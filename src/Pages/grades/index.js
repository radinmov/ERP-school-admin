import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../componets/Sidebar';
import useTitle from '../../componets/Hook/useTitle';


export const Grades = () => {
  useTitle("Grades");
  const navigate = useNavigate();

  // State to store scores
  const [scores, setScores] = useState({
    exam1: "",
    exam2: "",
  });

  // Handler for score changes
  const handleScoreChange = (event, exam) => {
    setScores({
      ...scores,
      [exam]: event.target.value,
    });
  };

  // Handler to navigate to the grade chart page
  const handleViewCharts = () => {
    navigate('/grades/charts');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-6">نمرات</h1>
          
          {/* Button to navigate to the grade chart page */}
          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleViewCharts}
            >
              نمایش نمودار نمرات
            </button>
          </div>

          {/* Exam 1 */}
          <div className="bg-white shadow-md rounded-md p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">امتحان 1: ریاضیات</h3>
            <label htmlFor="exam1" className="block mb-2 text-gray-700">
              وارد کردن نمره:
            </label>
            <input
              type="number"
              id="exam1"
              value={scores.exam1}
              onChange={(event) => handleScoreChange(event, "exam1")}
              placeholder="مثال: 20"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Exam 2 */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">امتحان 2: علوم</h3>
            <label htmlFor="exam2" className="block mb-2 text-gray-700">
              وارد کردن نمره:
            </label>
            <input
              type="number"
              id="exam2"
              value={scores.exam2}
              onChange={(event) => handleScoreChange(event, "exam2")}
              placeholder="مثال: 18"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Grades;
