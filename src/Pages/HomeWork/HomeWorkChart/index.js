import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from '../../../componets/Sidebar';
import useTitle from "../../../componets/Hook/useTitle";


export const HomeWorkChart = () => {
  useTitle("charting-homework")
  const [chartData, setChartData] = useState([
    { name: 'علوم', تکالیف: 20 },
    { name: 'ریاضی', تکالیف: 35 },
    { name: 'ادبیات', تکالیف: 50 },
    { name: 'مطالعات', تکالیف: 15 },
  ]);
  const [barColor, setBarColor] = useState('#8884d8'); 

  const handleDataChange = (index, field, value) => {
    const updatedData = [...chartData];
    updatedData[index][field] = field === 'تکالیف' ? Number(value) : value;
    setChartData(updatedData);
  };

  // Handler for color change
  const handleColorChange = (e) => {
    setBarColor(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8">
          <h1 className="text-xl font-bold mb-4">گزارش عملکرد</h1>
          
          {/* Chart Section */}
          <div className="w-full flex items-center justify-center mb-6">
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="تکالیف" fill={barColor} />
            </BarChart>
          </div>

          {/* Inputs for Editing Chart Data */}
          <div className="flex flex-col items-center gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleDataChange(index, 'name', e.target.value)}
                  className="border rounded px-2 py-1"
                  placeholder="نام درس"
                />
                <input
                  type="number"
                  value={item.تکالیف}
                  onChange={(e) => handleDataChange(index, 'تکالیف', e.target.value)}
                  className="border rounded px-2 py-1"
                  placeholder="تعداد تکالیف"
                />
              </div>
            ))}

            {/* Input for Changing Bar Color */}
            <div className="flex items-center gap-4 mt-4">
              <label htmlFor="colorPicker" className="font-bold">انتخاب رنگ:</label>
              <input
                type="color"
                id="colorPicker"
                value={barColor}
                onChange={handleColorChange}
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
