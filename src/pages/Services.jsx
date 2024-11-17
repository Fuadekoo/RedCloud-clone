import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFileAlt, faProjectDiagram, faLaptop, faMoneyBillWave, faChartBar } from "@fortawesome/free-solid-svg-icons";
import "./service.css";

function Services() {
  const services = [
    { name: "Sales Management System", icon: faBriefcase },
    { name: "Stock Management System", icon: faFileAlt, active: true },
    { name: "Project Management System", icon: faProjectDiagram },
    { name: "Service and Maintenance Management System", icon: faLaptop },
    { name: "Finance Management System", icon: faMoneyBillWave },
    { name: "Plan and Budget Management System", icon: faChartBar },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-3xl font-bold mb-6">
        <span className="text-red-500">Service</span> RedCloud Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              service.active ? "bg-red-500 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <p className="mt-3">{service.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="load-more-btn">Load more</button>
      </div>
    </div>
  );
}

export default Services;
