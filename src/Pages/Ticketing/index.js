import React, { useState } from "react";
import Sidebar from "../../componets/Sidebar";
import useTitle from "../../componets/Hook/useTitle";

export const Ticketing = () => {
  useTitle("Ticketing")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const notifications = [
    { role: "معلم", time: "12:00", message: "لورم ایپسوم متن ساختگی با تولید سادگی..." },
    { role: "معاون", time: "8:00", message: "اطلاعات سرویس خود را کامل..." },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          {/* Top Section: Role Cards */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="p-4 bg-white rounded-lg shadow-md text-xl font-bold">
              مدیر
            </button>
            <button className="p-4 bg-white rounded-lg shadow-md text-xl font-bold">
              معلم
            </button>
            <button className="p-4 bg-white rounded-lg shadow-md text-xl font-bold">
              معاون
            </button>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">امروز</h2>
            <div className="flex flex-col gap-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-md"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">{notification.message}</span>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full">
                    {notification.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
