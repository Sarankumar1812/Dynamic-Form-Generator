import React from "react";
import { FiHome, FiFileText, FiEye, FiHelpCircle, FiInfo, FiMenu, FiX } from "react-icons/fi";

interface SidebarProps {
  isExpanded: boolean;
  activeLink: string;
  onToggle: () => void;
  onLinkClick: (id: string) => void;
}

const navigationLinks = [
  { id: "home", label: "Home", icon: <FiHome size={24} /> },
  { id: "jsonEditor", label: "JSON Editor", icon: <FiFileText size={24} /> },
  { id: "formPreview", label: "Saved Forms", icon: <FiEye size={24} /> },
  { id: "howToUse", label: "How To Use", icon: <FiHelpCircle size={24} /> },
  { id: "about", label: "About", icon: <FiInfo size={24} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, activeLink, onToggle, onLinkClick }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white shadow-xl transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <h1 className={`text-xl font-bold text-blue-700 ${!isExpanded && "hidden"}`}>
          Form Builder
        </h1>
        <button
          onClick={onToggle}
          className="rounded-lg bg-gray-100 p-2 text-blue-600 hover:bg-gray-200"
        >
          {isExpanded ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      <div className="mt-8 flex flex-col space-y-2 px-4">
        {navigationLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onLinkClick(link.id)}
            className={`group flex items-center rounded-lg p-3 text-sm font-medium transition-all hover:bg-gray-100 ${
              activeLink === link.id ? "bg-gray-100 text-blue-600" : "text-gray-600"
            }`}
          >
            <span>{link.icon}</span>
            <span
              className={`ml-3 transition-all ${
                isExpanded ? "opacity-100" : "w-0 opacity-0"
              }`}
            >
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
