import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Importing icons

const Contact = () => {
  return (
    <div className=" text-white py-12 font-mono px-6 flex flex-col md:flex-row justify-center items-center gap-8">
      {/* Left Side - Contact Form */}
      <div className=" p-6 my-5 rounded-xl  w-full md:w-2/5 max-w-lg shadow-lg">
        <h2 className="text-green-400 text-3xl font-semibold mb-4">Let's work together</h2>
        <p className="text-black text-sm mb-6">
           I’m available for Full-Time and Part-Time positions, freelance projects, collaborations, or any exciting opportunities. Feel free to reach out, and let's build something amazing together!        </p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Firstname" className="w-1/2 p-3 bg-[#111] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400" />
            <input type="text" placeholder="Lastname" className="w-1/2 p-3 bg-[#111] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400" />
          </div>
          <div className="flex gap-4">
            <input type="email" placeholder="Email address" className="w-1/2 p-3 bg-[#111] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400" />
            <input type="tel" placeholder="Phone number" className="w-1/2 p-3 bg-[#111] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400" />
          </div>
          <select className="w-full p-3 bg-[#111] border border-gray-600 rounded-lg text-gray-400 focus:outline-none focus:border-green-400">
            <option>Select a service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Software Development</option>
          </select>
          <textarea placeholder="Type your message here." className="w-full p-3 bg-[#111] border border-gray-600 rounded-lg text-white h-24 resize-none focus:outline-none focus:border-green-400"></textarea>
          <button className="w-full bg-black hover:opacity-55 hover:opacity-90 transition white font-semibold py-3 rounded-lg">Send Message</button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="text-gray-400 space-y-6">
        <div className="flex items-center gap-3">
          <FiPhone className="text-black hover:text-white font-medium text-2xl" />
          <p className="text-lg text-white">(+91) 9253 1311 06</p>
        </div>
        <div className="flex items-center gap-3">
          <FiMail className="text-black hover:text-white font-medium text-2xl" />
          <p className="text-lg text-white">jeylantesi@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <FiMapPin className="text-black hover:text-white font-medium text-2xl" />
          <p className="text-lg text-white">India, Chandigarh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
