import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // User icon for the profile image placeholder
import Sidebar from '../../componets/Sidebar';

export const UserProfile = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center p-4 md:p-8">
          {/* Profile Header */}
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 rounded-full p-6">
                <FaUserCircle className="text-blue-500 text-6xl" />
              </div>
            </div>
            <h2 className="text-center text-xl font-bold text-gray-700 mb-4">پروفایل کاربر</h2>

            {/* Profile Form */}
            <form className="space-y-4">
              {/* National Code */}
              <input
                type="text"
                placeholder="کد ملی"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              {/* Gender Selector */}
              <select
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">آقا</option>
                <option value="">خانم</option>
              </select>

              {/* Name Fields */}
              <input
                type="text"
                placeholder="نام"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              {/* Contact Info */}
              <input
                type="text"
                placeholder="شماره همراه"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              {/* Marital Status */}
              <select
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">مجرد</option>
                <option value="">متاهل</option>
              </select>

              {/* Spouse Name */}
              <input
                type="text"
                placeholder="نام همسر"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              {/* Additional Info */}
              <input
                type="date"
                placeholder="تاریخ تولد"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="تعداد فرزندان"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="مدرک تحصیلی"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="قسمت کاری"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="آدرس"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="بانک حساب"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="شماره حساب"
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
              >
                ثبت
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
