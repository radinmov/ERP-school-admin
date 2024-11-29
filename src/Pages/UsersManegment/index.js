import React from 'react';
import { BiUserPlus, BiSearch } from 'react-icons/bi';
import Sidebar from '../../componets/Sidebar';
import useTitle from "../../componets/Hook/useTitle";

export const UsersManegment = () => {
  useTitle("UsersManegment")
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex-col p-4 md:p-8">
          <div className="flex justify-between items-center mb-8">
            {/* Title */}
            <h1 className="text-xl font-bold text-blue-900">مدیریت کاربران</h1>
          </div>

          {/* Content */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Register User Button */}
              <button className="bg-blue-500 text-white px-6 py-4 rounded-full flex items-center shadow-lg hover:bg-blue-600">
                <BiUserPlus className="text-3xl mr-2" />
                ثبت کاربر
              </button>

              {/* Search Button */}
              <button className="bg-blue-500 text-white px-6 py-4 rounded-full flex items-center shadow-lg hover:bg-blue-600">
                <BiSearch className="text-3xl mr-2" />
                جستجو
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
