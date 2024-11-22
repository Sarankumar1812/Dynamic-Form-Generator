import React from "react";
import { FaClipboard } from "react-icons/fa";

const HowToUse: React.FC = () => {

    const copyToClipboard = (json: string) => {
        navigator.clipboard.writeText(json);
        alert("JSON copied to clipboard!");
      };

  return (
    <div className="p-8 animate__animated animate__fadeInUp">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">How to Use the Dynamic Form Builder</h2>
      <p className="text-gray-700 mb-8">
        The Dynamic Form Builder allows you to create, preview, save, and manage custom forms
        using a JSON schema. Follow the steps below to get started.
      </p>

      <div className="flex flex-col gap-8">
        {/* Section 1: Navigate Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start animate__animated animate__fadeInUpLeft">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">1. Navigate the Sidebar</h3>
            <p className="text-gray-700">
              Use the sidebar on the left to navigate between sections:
            </p>
            <ul className="flex flex-col gap-4 list-disc list-inside mt-4 text-gray-700">
              <li>
                <strong>Home:</strong> Welcome page with an overview.
              </li>
              <li>
                <strong>JSON Editor:</strong> Create and edit custom forms using a JSON schema.
              </li>
              <li>
                <strong>Saved Form:</strong> View and manage saved forms.
              </li>
              <li>
                <strong>How to Use:</strong> Instructions for using the application.
              </li>
              <li>
                <strong>About:</strong> Learn more about the project.
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h4 className="text-lg font-medium text-blue-600 mb-2">Example Sidebar</h4>
            <ul className="list-none space-y-2">
              <li className="p-2 rounded bg-blue-100 text-blue-700">Home</li>
              <li className="p-2 rounded bg-blue-100 text-blue-700">JSON Editor</li>
              <li className="p-2 rounded bg-blue-100 text-blue-700">Saved Form</li>
              <li className="p-2 rounded bg-blue-100 text-blue-700">How to Use</li>
              <li className="p-2 rounded bg-blue-100 text-blue-700">About</li>
            </ul>
          </div>
        </div>

        {/* Section 2 & 3: Create and Preview Custom Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start animate__animated animate__fadeInUpLeft">
          {/* Section 2 */}
          <div className="flex flex-col gap-4">
            <div className="bg-green-50 border border-green-200 rounded p-4">
              <h3 className="text-xl font-semibold text-green-700 mb-2">2. Create a Custom Form</h3>
              <p className="text-gray-700">
                In the <strong>JSON Editor</strong> section, define your custom form using a JSON schema. 
                A default schema is provided for you to start with.
              </p>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded p-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Sample JSON Schema</h4>
              <pre className="bg-gray-200 text-sm p-4 rounded overflow-auto">
                {`{
  "formTitle": "Sample Form",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email",
      "required": true,
      "placeholder": "Enter your email"
    }
  ]
}`}</pre>
            </div>
          </div>

          {/* Section 3, 4, 5 */}

          <div className="flex flex-col gap-5">
                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                    <h3 className="text-xl font-semibold text-yellow-700 mb-2">3. Preview Your Form</h3>
                    <p className="text-gray-700">
                    As you edit the JSON schema in the <strong>JSON Editor</strong>, the live preview
                    on the right updates in real time. This allows you to see how your form will look and behave.
                    </p>
                    <p className="text-gray-700 mt-4">Fields:</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Name: Text input</li>
                    <li>Email: Email input</li>
                    </ul>
                </div>

                <div className="bg-pink-50 border border-pink-300 rounded p-4 animate__animated animate__fadeInUpLeft">
                    <h3 className="text-xl font-semibold text-pink-700">4. Save Your Form</h3>
                    <p className="text-gray-700">
                        Once your form is ready, click the <strong>Save Form</strong> button in the JSON Editor
                        section. 
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>Ensure all required fields are properly defined before saving.</li>
                        <li>Provide a meaningful title for your form to easily identify it later.</li> 
                    </ul>
                </div>

                <div className="bg--50 border border-gray-300 rounded p-4 animate__animated animate__fadeInUpLeft">
                    <h3 className="text-xl font-semibold text-blue-700">5. Manage Saved Forms</h3>
                    <p className="text-gray-700">
                        Navigate to the <strong>Form Preview</strong> section to view and manage all saved forms.
                        Each saved form includes:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>A live preview of the form.</li>
                        <li>A <strong>Delete</strong> button to remove the form from the list.</li>
                    </ul>
                </div>
                
          </div>
        
        </div>


        {/* Section 6: Tips for Better Forms */}
        <div className="bg-purple-50 border border-purple-200 rounded p-4 animate__animated animate__fadeInUpLeft">
          <h3 className="text-xl font-semibold text-purple-700">6. Tips for Better Forms</h3>
          <p className="text-gray-700">
            Here are some tips to create better forms:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Keep forms concise and focused on key inputs.</li>
            <li>Use clear labels and placeholders for user guidance.</li>
            <li>Make required fields easily identifiable.</li>
            <li>Test your form's usability with live previews.</li>
          </ul>
        </div>
      </div>

      

    <div className="mt-10 animate__animated animate__fadeInUp">
      

      {/* Example JSON Forms */}
      <div className="bg-gray-50 border border-gray-300 rounded p-4 animate__animated animate__fadeInUpLeft">
        <h3 className="text-xl font-semibold text-gray-800">Example Form JSON Schemas</h3>
        <p className="text-gray-700 mb-4">
          Below are some example JSON schemas for different types of forms:
        </p>

        {/* Example JSON 1: Contact Form */}
        <div className="bg-gray-100 border border-gray-300 rounded p-4 mb-4 relative">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Contact Form</h4>
          <button
            onClick={() =>
              copyToClipboard(`{
"formTitle": "Contact Form",
"fields": [
  {
    "id": "name",
    "type": "text",
    "label": "Name",
    "required": true,
    "placeholder": "Enter your full name"
  },
  {
    "id": "email",
    "type": "email",
    "label": "Email",
    "required": true,
    "placeholder": "Enter your email address"
  },
  {
    "id": "message",
    "type": "textarea",
    "label": "Message",
    "required": false,
    "placeholder": "Write your message here"
  }
]
}`)
            }
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
            aria-label="Copy Contact Form JSON"
          >
            <FaClipboard /> {/* React Icon for clipboard */}
          </button>
          <pre className="bg-gray-200 text-sm p-4 rounded overflow-auto">
            {`{
"formTitle": "Contact Form",
"fields": [
  {
    "id": "name",
    "type": "text",
    "label": "Name",
    "required": true,
    "placeholder": "Enter your full name"
  },
  {
    "id": "email",
    "type": "email",
    "label": "Email",
    "required": true,
    "placeholder": "Enter your email address"
  },
  {
    "id": "message",
    "type": "textarea",
    "label": "Message",
    "required": false,
    "placeholder": "Write your message here"
  }
]
}`}
          </pre>
        </div>

        {/* Example JSON 2: Registration Form */}
        <div className="bg-gray-100 border border-gray-300 rounded p-4 mb-4 relative">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Registration Form</h4>
          <button
            onClick={() =>
              copyToClipboard(`{
"formTitle": "Registration Form",
"fields": [
  {
    "id": "username",
    "type": "text",
    "label": "Username",
    "required": true,
    "placeholder": "Enter your username"
  },
  {
    "id": "password",
    "type": "password",
    "label": "Password",
    "required": true,
    "placeholder": "Enter your password"
  },
  {
    "id": "dob",
    "type": "date",
    "label": "Date of Birth",
    "required": false
  },
  {
    "id": "acceptTerms",
    "type": "checkbox",
    "label": "I accept the terms and conditions",
    "required": true
  }
]
}`)
            }
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
            aria-label="Copy Registration Form JSON"
          >
            <FaClipboard /> 
          </button>
          <pre className="bg-gray-200 text-sm p-4 rounded overflow-auto">
            {`{
"formTitle": "Registration Form",
"fields": [
  {
    "id": "username",
    "type": "text",
    "label": "Username",
    "required": true,
    "placeholder": "Enter your username"
  },
  {
    "id": "password",
    "type": "password",
    "label": "Password",
    "required": true,
    "placeholder": "Enter your password"
  },
  {
    "id": "dob",
    "type": "date",
    "label": "Date of Birth",
    "required": false
  },
  {
    "id": "acceptTerms",
    "type": "checkbox",
    "label": "I accept the terms and conditions",
    "required": true
  }
]
}`}
          </pre>
        </div>

        {/* Example JSON 3: Feedback Form */}
        <div className="bg-gray-100 border border-gray-300 rounded p-4 relative">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Feedback Form</h4>
          <button
            onClick={() =>
              copyToClipboard(`{
"formTitle": "Feedback Form",
"fields": [
  {
    "id": "name",
    "type": "text",
    "label": "Name",
    "required": false,
    "placeholder": "Enter your name (optional)"
  },
  {
    "id": "email",
    "type": "email",
    "label": "Email",
    "required": false,
    "placeholder": "Enter your email (optional)"
  },
  {
    "id": "rating",
    "type": "radio",
    "label": "Rating",
    "options": ["1", "2", "3", "4", "5"],
    "required": true
  },
  {
    "id": "comments",
    "type": "textarea",
    "label": "Comments",
    "required": false,
    "placeholder": "Write your feedback"
  }
]
}`)
            }
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
            aria-label="Copy Feedback Form JSON"
          >
            <FaClipboard /> 
          </button>
          <pre className="bg-gray-200 text-sm p-4 rounded overflow-auto">
            {`{
"formTitle": "Feedback Form",
"fields": [
  {
    "id": "name",
    "type": "text",
    "label": "Name",
    "required": false,
    "placeholder": "Enter your name (optional)"
  },
  {
    "id": "email",
    "type": "email",
    "label": "Email",
    "required": false,
    "placeholder": "Enter your email (optional)"
  },
  {
    "id": "comments",
    "type": "textarea",
    "label": "Comments",
    "required": false,
    "placeholder": "Write your feedback"
  }
]
}`}
          </pre>
        </div>
      </div>
    </div>



    </div>
  );
};

export default HowToUse;
