import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    preference: "",
    qualification: "",
    dob: "",
    resume: null,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const files = e.target instanceof HTMLInputElement && type === "file" ? e.target.files : null;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.name || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    navigate("/careers"); // Redirect to Career Page after submission
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#301934] text-white p-6 bg-[url('/internship_form.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-3xl bg-[#2a1230] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold uppercase text-white mb-6">
          Application
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Email *</label>
            <input
              type="email"
              name="email"
              className="input-style"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Name *</label>
            <input
              type="text"
              name="name"
              className="input-style"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Phone Number *</label>
            <input
              type="text"
              name="phone"
              className="input-style"
              placeholder="Mobile"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Last Qualification</label>
            <select
              name="qualification"
              className="input-style"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Preferences</label>
            <select
              name="prefernece"
              className="input-style"
              value={formData.preference}
              onChange={handleChange}
            >
              <option value="" className="text-black">Choose</option>
              <option value="job" className="text-black">Job</option>
              <option value="internship" className="text-black">Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="input-style"
              value={formData.dob}
              onChange={handleChange}
            />
          </div> 

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="input-style"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
