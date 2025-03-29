
import CountUp from "react-countup";

const State = () => {
  const stats = [
    { value: 5, label: "Years" },
    { value: 1000, label: "Hours Invested" },
    { value: 20, label: "Concepts delivered" },
  ];

  return (
    <section className="flex justify-center mt-8">
      <div 
        className="w-[950px] h-[100px] border border-gray-500 rounded-xl p-10 shadow-lg backdrop-blur-md text-white flex justify-around items-center gap-x-10 relative"
        style={{
          backgroundImage: "url('/Rectangle_56.png')", // Replace with actual image path
          backgroundSize: "cover", // Ensures image covers entire div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents repetition
        }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <p className="text-5xl font-extrabold">
              <CountUp start={0} end={stat.value} duration={3} suffix="+" />
            </p>
            <p className="text-lg opacity-80 mt-2 leading-relaxed text-center text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
