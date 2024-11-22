import React from "react";

interface Action {
  title: string;
  color: string;
  icon: React.ReactNode;
}

interface QuickActionsCardProps {
  actions: Action[];
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({ actions }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} flex items-center justify-center space-x-2 rounded-lg p-4 text-white transition-transform hover:scale-105`}
          >
            {action.icon}
            <span>{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsCard;
