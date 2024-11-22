import React from "react";
import { BsTrash } from "react-icons/bs"; // Importing the delete (trash) icon
import FormPreview from "./FormPreview";
import { FormSchema } from "../types/SchemaTypes";

interface FormPreviewListProps {
  forms: FormSchema[];
  onDelete: (index: number) => void; // Function to handle form deletion
}

const FormPreviewList: React.FC<FormPreviewListProps> = ({ forms, onDelete }) => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-blue-600">Saved Forms</h2>
      <div className="mt-4 space-y-6">
        {forms.length === 0 ? (
          <p>No forms have been saved yet.</p>
        ) : (
          forms.map((form, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <div className="flex justify-end items-center">
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 flex items-center gap-2"
                >
                  <BsTrash className="text-white" /> {/* Delete icon */}
                  
                </button>
              </div>
              <FormPreview schema={form} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FormPreviewList;
