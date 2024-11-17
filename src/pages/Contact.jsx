import React from "react";
import "./contact.css"; // Optional: Add custom CSS if needed

function Contact() {
    return (
        <div className="bg-white py-16 px-6 text-white">
            <div className="max-w-4xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-md relative animate-fadeIn">
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-center text-lg mb-8">
                    We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative group">
                        <input
                            type="text"
                            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                            placeholder=" "
                            required
                        />
                        <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-red-500 peer-valid:hidden">
                            Name
                        </label>
                    </div>
                    {/* Email Field */}
                    <div className="relative group">
                        <input
                            type="email"
                            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                            placeholder=" "
                            required
                        />
                        <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-red-500 peer-valid:hidden">
                            Email
                        </label>
                    </div>
                    {/* Subject Field */}
                    <div className="col-span-2 relative group">
                        <input
                            type="text"
                            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                            placeholder=" "
                            required
                        />
                        <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-red-500 peer-valid:hidden">
                            Subject
                        </label>
                    </div>
                    {/* Message Field */}
                    <div className="col-span-2 relative group">
                        <textarea
                            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                            placeholder=" "
                            rows="5"
                            required
                        ></textarea>
                        <label className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-red-500 peer-valid:hidden">
                            Message
                        </label>
                    </div>
                    {/* Submit Button */}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-red-600 hover:shadow-lg focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                {/* Decorative Bubbles */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-red-600 rounded-full opacity-70 animate-ping"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-red-500 rounded-full opacity-70 animate-bounce"></div>
            </div>
        </div>
    );
}

export default Contact;
