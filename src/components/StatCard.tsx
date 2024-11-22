import React from "react";

interface StatCardProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, count, icon, color }) => {
  return (
    <div
      className={`${color} rounded-xl p-6 text-white shadow-lg transition-transform hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{count}</h3>
        </div>
        <div className="rounded-full bg-white/20 p-3">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
