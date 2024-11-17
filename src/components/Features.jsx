import React from "react";

function Features() {
  const features = [
    "Data Center & Housing",
    "Financial Technology",
    "E-Commerce",
    "Sales Automation",
    "Virtual Internet Service Provider",
  ];

  return (
    <div className="bg-gray-100 py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-md shadow-md text-red-600 font-bold text-lg"
        >
          {feature}
        </div>
      ))}
    </div>
  );
}

export default Features;
