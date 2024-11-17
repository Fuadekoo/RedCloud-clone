import React from "react";
import "./testimonials.css";

function Testimonial() {
    const stats = [
        { label: "Customers", value: "6k+" },
        { label: "Services", value: "12+" },
        { label: "Partners", value: "16+" },
        { label: "Company", value: "47+" },
    ];

    return (
        <div className="bg-white py-12 px-6 flex items-center justify-center min-h-screen">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Customers */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h4 className="text-2xl font-extrabold">{stats[0].value}</h4>
                        <p className="text-base mt-2">{stats[0].label}</p>
                    </div>
                </div>

                {/* Red Section with Squares */}
                <div className="relative flex flex-col md:flex-row items-center justify-around bg-red-600 text-white px-6 py-6 rounded-lg shadow-md overflow-hidden">
                    {/* Background Squares */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-10">
                        {Array.from({ length: 36 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-white w-4 h-4 rounded-sm opacity-50"
                            ></div>
                        ))}
                    </div>

                    {/* Stats */}
                    {stats.slice(1, 3).map((stat, index) => (
                        <div key={index} className="text-center relative z-10 mx-2">
                            <h4 className="text-2xl font-normal">{stat.value}</h4>
                            <p className="text-base mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Company */}
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h4 className="text-2xl font-extrabold">{stats[3].value}</h4>
                        <p className="text-base mt-2">{stats[3].label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
