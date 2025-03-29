import Navigation from "../Navigation/Navigation";
import FooterSection from "../FooterSection/FooterSection";
import { FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Thankyou: React.FC = () => {
  // Function to open Google Calendar with a pre-filled event
  const scheduleMeeting = () => {
    const eventTitle = "Meeting with Our Representative";
    const eventDetails = "Discuss your inquiry with our team.";
    const startDate = new Date(); // Meeting starts now
    const endDate = new Date(startDate.getTime() + 30 * 60000); // 30-minute meeting

    // Formatting date for Google Calendar URL (YYYYMMDDTHHmmSSZ format)
    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&details=${encodeURIComponent(
      eventDetails
    )}&dates=${formatDate(startDate)}/${formatDate(endDate)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a021e] to-[#200046] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/contactus.png')",
      }}
    >
      <Navigation />

      <div className="flex flex-col items-center justify-center text-center px-6 py-12">
        <p className="text-3xl font-bold mt-16">
          We already received your inquiry, and one of our
        </p>
        <p className="text-3xl font-bold mt-5">
          representatives will get back to you
          <span className="font-bold text-pink-500 pl-2">shortly.</span>
        </p>
        <p className="text-sm mt-4">
          We have successfully received your inquiry, and one of our
          representatives will get back to you shortly.
        </p>
        <div className="flex flex-wrap gap-10 mt-10">
          {/* CALL US Button */}
          <button className="flex items-center bg-[#591C82] text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-700 hover:shadow-lg hover:shadow-purple-500 transition duration-300">
            <FaPhone className="transform scale-x-[-1] mr-2" /> CALL US
          </button>

          {/* MAIL US Button */}
          <button className="flex items-center bg-[#591C82] text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-700 hover:shadow-lg hover:shadow-purple-500 transition duration-300">
            <FaEnvelope className="transform scale-x-[-1] mr-2" /> MAIL US
          </button>

          {/* SCHEDULE A MEETING Button */}
          <button
            onClick={scheduleMeeting}
            className="flex items-center bg-[#591C82] text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-700 hover:shadow-lg hover:shadow-purple-500 transition duration-300"
          >
            <FaCalendarAlt className="transform scale-x-[-1] mr-2" /> SCHEDULE A
            MEETING
          </button>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Thankyou;
