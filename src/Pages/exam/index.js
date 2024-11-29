import Sidebar from "../../componets/Sidebar";
import useTitle from "../../componets/Hook/useTitle";

export const Exam = () => {
  useTitle("exam-center")
  return (
    <div className="h-screen flex flex-col bg-gray-100">

      <div className="flex flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8">
          <div className="flex justify-between items-center mb-8">
            {/* Title */}
            <h1 className="text-xl font-bold text-blue-900">مدیریت آزمون</h1>

            {/* Add Exam Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
              افزودن آزمون
            </button>
          </div>

          {/* Exam Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">فصل دوم ریاضی</h2>
              <p className="text-gray-500 mt-2">1403/8/30</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">فصل 5 علوم</h2>
              <p className="text-gray-500 mt-2">1403/9/20</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-800">مطالعات فصل 6</h2>
              <p className="text-gray-500 mt-2">1403/9/15</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
