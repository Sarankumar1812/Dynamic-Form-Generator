import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import JSONEditor from "../components/JSONEditor";
import FormPreviewList from "../components/FormPreviewList";
import HowToUse from "../components/HowToUse";
import About from "../components/About"; // Import About component
import { FormSchema } from "../types/SchemaTypes";

const FormDashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Sidebar state
  const [activeLink, setActiveLink] = useState("home"); // Active page
  const [forms, setForms] = useState<FormSchema[]>([]); // Saved forms

  // Save schema to the list of forms
  const handleSaveSchema = (schema: FormSchema) => {
    setForms((prevForms) => [...prevForms, schema]);
  };

  // Delete a form by index
  const handleDeleteForm = (index: number) => {
    setForms((prevForms) => prevForms.filter((_, i) => i !== index));
  };

  // Render content based on the active link
  const renderContent = () => {
    switch (activeLink) {
      case "home":
        return <Home />;
      case "jsonEditor":
        return <JSONEditor onSaveSchema={handleSaveSchema} />;
      case "formPreview":
        return <FormPreviewList forms={forms} onDelete={handleDeleteForm} />;
      case "howToUse":
        return <HowToUse />; // Render HowToUse component
      case "about":
        return <About />; // Render About component
      default:
        return <h2>Select a section from the sidebar</h2>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar
        isExpanded={isExpanded}
        activeLink={activeLink}
        onToggle={() => setIsExpanded(!isExpanded)}
        onLinkClick={(id) => setActiveLink(id)}
      />

      {/* Main Content Area */}
      <main className={`flex-1 p-8 ${isExpanded ? "ml-64" : "ml-20"}`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default FormDashboard;
