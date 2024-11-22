import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema } from "../types/SchemaTypes";

const FormPreview: React.FC<{ schema: FormSchema | null }> = ({ schema }) => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  if (!schema) {
    return <h2 className="text-xl">No schema provided.</h2>;
  }

  return (
    <div className="animate__animated animate__fadeInUp">
      <h2 className="text-xl font-bold">{schema.formTitle}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
        {schema.fields.map((field) => {
          switch (field.type) {
            case "text":
            case "email":
              return (
                <div key={field.id} className="flex flex-col">
                  <label className="font-medium">{field.label}</label>
                  <input
                    {...register(field.id, { required: field.required })}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="p-2 mt-1 border rounded"
                  />
                  {formState.errors[field.id] && (
                    <p className="text-red-500 text-sm">{field.label} is required</p>
                  )}
                </div>
              );
            case "select":
              return (
                <div key={field.id} className="flex flex-col">
                  <label className="font-medium">{field.label}</label>
                  <select
                    {...register(field.id, { required: field.required })}
                    className="p-2 mt-1 border rounded"
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formState.errors[field.id] && (
                    <p className="text-red-500 text-sm">{field.label} is required</p>
                  )}
                </div>
              );
            case "textarea":
              return (
                <div key={field.id} className="flex flex-col">
                  <label className="font-medium">{field.label}</label>
                  <textarea
                    {...register(field.id, { required: field.required })}
                    placeholder={field.placeholder}
                    className="p-2 mt-1 border rounded"
                  />
                  {formState.errors[field.id] && (
                    <p className="text-red-500 text-sm">{field.label} is required</p>
                  )}
                </div>
              );
            case "radio":
              return (
                <div key={field.id} className="flex flex-col">
                  <label className="font-medium">{field.label}</label>
                  {field.options?.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <input
                        {...register(field.id, { required: field.required })}
                        type="radio"
                        value={option.value}
                        id={`${field.id}-${option.value}`}
                        className="p-2"
                      />
                      <label htmlFor={`${field.id}-${option.value}`} className="font-medium">
                        {option.label}
                      </label>
                    </div>
                  ))}
                  {formState.errors[field.id] && (
                    <p className="text-red-500 text-sm">{field.label} is required</p>
                  )}
                </div>
              );
            case "checkbox":
              return (
                <div key={field.id} className="flex items-center space-x-2">
                  <input
                    {...register(field.id, { required: field.required })}
                    type="checkbox"
                    className="p-2"
                  />
                  <label htmlFor={field.id} className="font-medium">{field.label}</label>
                  {formState.errors[field.id] && (
                    <p className="text-red-500 text-sm">{field.label} is required</p>
                  )}
                </div>
              );
            default:
              return null;
          }
        })}
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
