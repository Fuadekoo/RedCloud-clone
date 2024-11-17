import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faClock, faComments, faHandshake, faCogs, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          The <span className="text-red-500">feature</span> or uniqueness that you perceive in our company
        </h1>
        <p className="mt-4 text-gray-600">
          RedCloud is known for its innovative, customized, and end-to-end solutions that are fine-tuned to address particular requirements of its customers.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faBullseye} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Training</p>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faClock} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Deliver on Time</p>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faComments} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Feedback Mechanism</p>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faHandshake} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Customer Support</p>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faCogs} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Customization</p>
        </div>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center shadow-md">
          <FontAwesomeIcon icon={faDollarSign} className="text-red-500 font-bold" />
          <p className="mt-2 font-medium text-gray-700">Affordable</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium shadow hover:bg-gray-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
