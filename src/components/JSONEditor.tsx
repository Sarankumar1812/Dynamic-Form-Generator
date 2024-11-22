import React, { useState } from "react";
import { validateJSON } from "../utils/validateJSON";
import FormPreview from "./FormPreview";

interface JSONEditorProps {
  onSaveSchema: (schema: any) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSaveSchema }) => {
  const [json, setJson] = useState<string>(
    JSON.stringify(
      {
        formTitle: "Sample Form",
        fields: [
          { id: "name", type: "text", label: "Name", required: true },
          { id: "email", type: "email", label: "Email", required: true },
        ],
      },
      null,
      
    )
  );
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJson(value);
    setIsValid(validateJSON(value));
  };

  const handleSave = () => {
    if (isValid) {
      const schema = JSON.parse(json);
      onSaveSchema(schema);
      alert("Form saved successfully!");
    } else {
      alert("Invalid JSON. Please correct the JSON and try again.");
    }
  };

  const schema = isValid ? JSON.parse(json) : null;

  return (
    <div className="flex gap-12 justify-center items-center h-screen">
      {/* JSON Editor Section */}
      <div className="flex-1 p-4 h-full">
        <h2 className="text-xl font-semibold text-blue-600">JSON Editor</h2>
        <textarea
          value={json}
          onChange={handleJsonChange}
          className={`w-full mt-4 h-[500px] p-4 border rounded-lg ${
            isValid ? "border-gray-300" : "border-red-500"
          } overflow-auto`}
          placeholder="Enter your JSON schema here..."
        />
        {!isValid && <p className="mt-2 text-red-500">Invalid JSON format</p>}
        <button
          onClick={handleSave}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Form
        </button>
      </div>

      {/* Vertical Divider */}
      <div className="border-l-2 border-gray-300 h-full"></div>

      {/* Form Preview Section */}
      <div className="flex-1 p-4 h-full">
        <h2 className="text-xl font-semibold text-blue-600">Form Preview</h2>
        <div className="mt-4 p-4 border rounded-lg">
          {schema ? <FormPreview schema={schema} /> : <p>Invalid Schema</p>}
        </div>
      </div>
    </div>
  );
};

export default JSONEditor;
