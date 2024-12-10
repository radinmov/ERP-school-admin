import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../componets/Sidebar';
import useTitle from "../../componets/Hook/useTitle";
import { FaPlus, FaArchive, FaChartBar } from 'react-icons/fa'; 
import { FaSearch } from 'react-icons/fa';


export const HomeWork = () => {
  useTitle("HomeWork part");
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock fetch for demonstration purposes
  const [homeworkData, setHomeworkData] = useState([]);
  useEffect(() => {
    const fetchHomeworkData = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch('https://api.example.com/homework');
        if (!response.ok) {
          throw new Error('Failed to fetch homework data');
        }
        const data = await response.json();
        setHomeworkData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeworkData();
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8 bg-gray-100">
          <h1 className="text-xl font-bold mb-4">صفحه تکالیف</h1>

          <div className="md:flex-row items-center gap-4 p-6 rounded-lg">
            {/* Search Input Section */}
            <div className="flex-1  w-[650px] h-[67px] relative bg-blue-500 rounded-xl">
                <span>جست و جوی </span>
              <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="مهدی مهدی زاده"
                className="w-[306px] h-[44px] p-3 pl-10 rounded-lg  text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch size={30} color="white" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 m-4">
              <button
                onClick={() => navigate('/homework/new')}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg"
              >
                <FaPlus color="blue" size={20} />
                تکلیف جدید
              </button>
              <button
                onClick={() => navigate('/homework/archive')}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg"
              >
                <FaArchive color="blue" size={20} />
                آرشیو
              </button>
              <button
                onClick={() => navigate('/homework/report')}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg"
              >
                <FaChartBar color="blue" size={20} />
                گزارش عملکرد
              </button>
            </div>
          </div>

          {/* Homework List */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">لیست تکالیف</h2>
            {loading ? (
              <p>در حال بارگذاری...</p>
            ) : error ? (
              <p className="text-red-500">خطا: {error}</p>
            ) : (
              <ul className="space-y-4">
                {homeworkData
                  .filter((item) =>
                    item.title.includes(searchValue)
                  )
                  .map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <span>{item.title}</span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeWork;
