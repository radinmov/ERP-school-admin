import React, { useState } from "react";
import Sidebar from "../../componets/Sidebar";

export const PresentUser = () => {
  // Sample data for students
  const [students, setStudents] = useState([
    { id: 1, name: "مهدی مهدی زاده", isPresent: true },
    { id: 2, name: "محمد محمدی", isPresent: true },
    { id: 3, name: "علی علوی", isPresent: true },
    { id: 4, name: "رضا رضوی", isPresent: true },
    { id: 5, name: "حمید حمیدی", isPresent: true },
    { id: 6, name: "امیر امیری", isPresent: true },
    { id: 7, name: "کیان کیانی", isPresent: false },
    { id: 8, name: "سینا سینایی", isPresent: false },
  ]);

  // Handle checkbox change
  const handleAttendanceChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  // Function to send attendance data to the backend
  const submitAttendance = () => {
    const attendanceData = students.map(({ id, isPresent }) => ({ id, isPresent }));
    console.log("Sending to backend:", attendanceData);
    // Make an API call here to send `attendanceData`
    // Example: axios.post('/api/attendance', attendanceData);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 bg-gray-100">
          <div className="bg-white shadow-md rounded-md p-6">
            <header className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">مدیریت کلاس</h1>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={submitAttendance}
              >
                ارسال حضور و غیاب
              </button>
            </header>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">ردیف</th>
                  <th className="border border-gray-300 p-2">نام دانش‌آموز</th>
                  <th className="border border-gray-300 p-2">حضور</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="text-center">
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{student.name}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="checkbox"
                        checked={student.isPresent}
                        onChange={() => handleAttendanceChange(student.id)}
                        className="w-5 h-5"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};
