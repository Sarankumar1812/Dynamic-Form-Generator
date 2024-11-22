

export interface FormField {
  id: string;
  type: "text" | "email" | "password" | "textarea" | "select" | "radio" | "checkbox"; // Define the field types
  label: string;
  required: boolean;
  placeholder?: string; // Optional placeholder for inputs and textareas
  options?: { value: string; label: string }[]; // Options for select and radio fields
}

export interface FormSchema {
  formTitle: string;
  fields: FormField[]; // Array of fields
}
