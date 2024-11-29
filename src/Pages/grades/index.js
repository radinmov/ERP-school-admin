import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../componets/Sidebar';
import useTitle from "../../componets/Hook/useTitle";

export const Grades = () => {
  useTitle("Grades")
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-6">نمرات</h1>
          <div className="bg-white shadow-md rounded-md p-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => navigate('/grades/charts')}
            >
              نمایش نمودار نمرات
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
