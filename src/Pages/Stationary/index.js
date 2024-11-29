import React from 'react';
import Sidebar from '../../componets/Sidebar';
import { FaCalendarAlt } from 'react-icons/fa';
import useTitle from "../../componets/Hook/useTitle";

export const Stationary = () => {
  useTitle("Stationary")
  return (
    <div className="h-screen flex">
      <Sidebar />

      <main className="flex-1 flex flex-col p-4 md:p-8 bg-gray-100">

        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-md">
          <div className="flex flex-col items-center mb-4">
            <FaCalendarAlt className="text-blue-500 text-3xl" />
            <h2 className="text-xl font-semibold text-blue-600 mt-2">فرم درخواست</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="sr-only">نوع درخواست</label>
              <select className="w-full p-3 border rounded">
                <option>لوازم تحریر</option>
              </select>
            </div>
            <div>
              <label className="sr-only">شرح کالا</label>
              <input type="text" placeholder="شرح کالا" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="sr-only">تعداد</label>
              <input type="number" placeholder="تعداد" className="w-full p-3 border rounded" />
            </div>
            <div>
              <label className="sr-only">توضیحات</label>
              <textarea placeholder="توضیحات" className="w-full p-3 border rounded" rows="3"></textarea>
            </div>

            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded">ثبت درخواست</button>
          </form>
        </div>
      </main>
    </div>
  );
};