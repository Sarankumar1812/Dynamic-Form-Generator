import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="p-8 animate__animated animate__fadeInUp">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-blue-600">Dynamic Form Generator</h2>
        <p className="text-lg text-gray-700 mt-4">
          A real-time dynamic form generator that allows users to create forms from JSON schema with validation and submission support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project Overview Card */}
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 shadow-md animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-semibold text-blue-600">Project Overview</h3>
          <p className="mt-4 text-gray-800">
            This application allows you to dynamically generate forms from JSON schemas. You can edit the JSON schema and see the form updating in real time.
          </p>
        </div>

        {/* Features Card */}
        <div className="bg-green-100 border border-green-300 rounded-lg p-6 shadow-md animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-semibold text-green-600">Features</h3>
          <ul className="mt-4 text-gray-800 list-disc list-inside">
            <li>Real-time form generation and validation</li>
            <li>JSON syntax highlighting and error handling</li>
            <li>Mobile-responsive layout</li>
            <li>Submit form data to the console</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className=" animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 animate__animated animate__fadeInUpLeft">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Sarankumar S</h3>
        <p className="text-gray-700 mb-4">
          I'm a full-stack developer with a passion for building scalable and
          efficient web applications. My expertise spans across both frontend
          and backend technologies such as React.js, Node.js, Express.js, MongoDB,
          and more. I am also proficient in cloud services, version control, and
          various databases.
        </p>
        <div className="flex gap-6 text-gray-700 mb-4">
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>{"+91 6363004737"}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>{"iam.sharanyv@gmail.com"}</span>
          </div>
        </div>
        <div className="flex gap-6 text-blue-600">
          <a
            href="https://linkedin.com/in/sarankumaryv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/sarankumar1812"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInUpLeft">
        <h4 className="text-lg font-medium text-blue-700 mb-4">Skills</h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><span className="font-bold">Programming Languages:</span> Java, JavaScript (ES6+), TypeScript</li>
            <li><span className="font-bold">Frontend & Backend:</span> React.js, Redux, Node.js, Express.js, Tailwind CSS</li>
            <li><span className="font-bold">API Development:</span> REST API, GraphQL</li>
            <li><span className="font-bold">Database:</span> MySQL, MongoDB</li>
            <li><span className="font-bold">Version Control & CI/CD:</span> Git, GitHub</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg mt-7 rounded-lg p-6 animate__animated animate__fadeInUpLeft">
        <h4 className="text-lg font-medium text-blue-700 mb-4">Education</h4>
        <p className="text-gray-700">
          <strong>Guvi, Chennai:</strong> Specialized in MERN Stack Development, July 2024
        </p>
        <p className="text-gray-700">
          <strong>Thanthai Periyar Government Institute of Technology, Vellore:</strong> BE, CGPA: 7.96/10, 2020 – 2024
        </p>
      </div>
    </div>

      </div>
    </div>
  );
};

export default About;
