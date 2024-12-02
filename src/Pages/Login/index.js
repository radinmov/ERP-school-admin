import React from "react";
import Sidebar from "../../componets/Sidebar";
import useTitle from "../../componets/Hook/useTitle";
import { FaLock, FaUser } from "react-icons/fa";

export const Login = () => {
  useTitle("Login")
  return (
    <div className="flex min-h-screen bg-blue-100">

      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        {/* Login Card */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md">
          <h2 className="text-center w-[500px] text-2xl font-bold mb-4">صفحه ورود</h2>
          <form>
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 text-gray-700">
                نام کاربری
              </label>
              <div className="flex items-center border rounded-md">
                <span className="px-3 text-gray-400">
                  <FaUser size={20} color="blue" />
                </span>
                <input
                  type="text"
                  id="username"
                  placeholder="نام کاربری"
                  className="flex-1 px-2 py-2 border-l focus:outline-none rounded-md"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-gray-700">
                رمز عبور
              </label>
              <div className="flex items-center border rounded-md">
                <span className="px-3 text-gray-400">
                <FaLock size={20} color="blue" />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="رمز عبور"
                  className="flex-1 px-2 py-2 border-l focus:outline-none rounded-md"
                />
              </div>
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 w-4 h-4 text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600">
                من را به یاد داشته باش
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              ورود
            </button>
          </form>
          <p className="text-right mt-4 text-sm text-blue-500 cursor-pointer">
            فراموشی رمز عبور؟
          </p>
        </div>
        {/* Welcome Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-blue-500 text-white px-8 py-16 w-1/3">
          <h2 className="text-3xl font-bold mb-4">خوش آمدید</h2>
          <p className="text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
    </div>
  );
};
