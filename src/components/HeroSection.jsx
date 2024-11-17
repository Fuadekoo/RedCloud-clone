import React from "react";
import './HeroSection.css'; // Import the CSS file

function HeroSection() {
    const features = [
        "Data Center & Housing",
        "Sales Automation",
        "E-Commerce",
        "Virtual Internet Service Provider",
        "Financial Technology",
    ];

    return (
        <div className="hero-section bg-gradient-to-b from-transparent via-red-800 to-red-600  text-white py-20 px-4 text-center flex justify-between items-center rounded-md my-10 mx-10 relative">
            <div className="text-left">
                <h1 className="text-4xl font-bold animate-text">Red Cloud<br></br> ICT Solutions</h1>
                {/* <p className="text-lg mt-4">Innovative Solutions for Your Business</p> */}
                <div className="mt-6">
                    <button className="bg-white text-red-600 px-4 py-2 rounded-lg mr-4 hover:font-bold">
                        Get Started
                    </button>
                    <button className="bg-transparent px-4 py-2 hover:font-bold">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="ml-8 relative">
                <img
                    src="readcloud.png"
                    alt="Red Cloud"
                    className="mx-auto"
                />
                {features.map((feature, index) => (
                    <div key={index} className={`feature feature-${index}`}>
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeroSection;