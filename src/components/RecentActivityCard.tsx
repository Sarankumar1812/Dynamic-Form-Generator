import React from "react";

interface Activity {
  title: string;
  time: string;
  type: string;
}

interface RecentActivityCardProps {
  activities: Activity[];
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ activities }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
            <div>
              <h3 className="font-semibold">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-sm ${
                activity.type === "job"
                  ? "bg-blue-100 text-blue-800"
                  : activity.type === "property"
                  ? "bg-green-100 text-green-800"
                  : activity.type === "event"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {activity.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
