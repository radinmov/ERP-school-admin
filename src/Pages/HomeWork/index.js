import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../componets/Sidebar';
import useTitle from "../../componets/Hook/useTitle";

export const HomeWork = () => {
  useTitle("HomeWork part")
  const navigate = useNavigate();

  const goToChart = () => {
    navigate('/homework/charts'); 
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          <h1 className="text-xl font-bold mb-4">صفحه تکالیف</h1>
          <div className="flex flex-col items-center justify-center border rounded-lg p-6 shadow-md bg-white">
            <p className="mb-4">گزارش کلی تکالیف</p>
            <button
              onClick={goToChart}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              گزارش عملکرد
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
