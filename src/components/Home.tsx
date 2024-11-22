import {
    BsPencilSquare,
    BsEyeFill,
    BsShieldCheck,
    BsFileLock,
    BsPlus,
    BsBook,
    BsInfoCircle,
    BsLayoutTextSidebar,
  } from "react-icons/bs";
  
  const Home = () => {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Intro Section */}
        <div className="text-start mb-12 ">
          <p className="text-2xl font-extralight text-blue-700 hover:text-blue-500">
            Create forms dynamically using a JSON schema. Edit, preview, and submit forms in real-time...
          </p>
        </div>
  
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate__animated animate__fadeInUp">
          {/* JSON Schema Editor */}
          <div className="flex flex-col items-center p-6 border border-blue-300 rounded-lg shadow-lg bg-blue-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsPencilSquare className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">JSON Schema Editor</h3>
            <p className="text-center text-gray-600 mt-2">
              Easily enter and edit your JSON schema to generate dynamic forms.
            </p>
          </div>
  
          {/* Real-time Form Preview */}
          <div className="flex flex-col items-center p-6 border border-green-300 rounded-lg shadow-lg bg-green-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsEyeFill className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Real-time Form Preview</h3>
            <p className="text-center text-gray-600 mt-2">
              View your form as you modify the schema in real-time.
            </p>
          </div>
  
          {/* Form Validation */}
          <div className="flex flex-col items-center p-6 border border-purple-300 rounded-lg shadow-lg bg-purple-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsShieldCheck className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Form Validation</h3>
            <p className="text-center text-gray-600 mt-2">
              Ensure data accuracy with built-in validation for all form fields.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="flex gap-8 justify-center mb-12 animate__animated animate__fadeInUp">
          <div className="mt- py-8 px-6 border border-indigo-300 bg-indigo-50 rounded-lg shadow-sm  mx-auto w-full max-w-screen-lg ">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get Started</h2>
              <p className="text-lg text-gray-600 mb-4">
                Ready to start generating forms? Head over to the JSON Editor page to begin creating your forms.
              </p>
              <a
                href="/json-editor"
                className="bg-indigo-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition flex items-center justify-center space-x-3"
              >
                <BsPlus className="text-white text-2xl" href="" />
                <span>Start Creating Forms</span>
              </a>
            </div>
          </div>
  
          {/* Form Created */}
          <div className=" flex flex-col items-center p-6 border border-yellow-300 rounded-lg shadow-sm bg-yellow-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsFileLock className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Form Created</h3>
            <p className="text-center text-gray-600 mt-2">
              Once your form is created, securely save it and generate the necessary outputs.
            </p>
          </div>
        </div>
  
        {/* Additional Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeInUp">
          {/* How to Use? */}
          <div className="flex flex-col items-center p-6 border border-blue-300 rounded-lg shadow-lg bg-blue-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsBook className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">How to Use?</h3>
            <p className="text-center text-gray-600 mt-2">
              Learn how to start using the JSON Schema editor to create dynamic forms and manage them efficiently.
            </p>
          </div>
  
          {/* About */}
          <div className="flex flex-col items-center p-6 border border-green-300 rounded-lg shadow-lg bg-green-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsInfoCircle className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">About</h3>
            <p className="text-center text-gray-600 mt-2">
              This project provides an intuitive platform to design, preview, and validate dynamic forms from JSON schema.
            </p>
          </div>
  
          {/* Overview of Project */}
          <div className="flex flex-col items-center p-6 border border-purple-300 rounded-lg shadow-lg bg-purple-50 transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <BsLayoutTextSidebar className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Overview of Project</h3>
            <p className="text-center text-gray-600 mt-2">
              This platform allows you to easily generate forms, validate inputs, and create dynamic UI elements using JSON schema.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  