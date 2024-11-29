import Sidebar from "../../componets/Sidebar";
import useTitle from "../../componets/Hook/useTitle";

export const ClassManage = () => {
  useTitle("Class-managemnt")
  const classes = [
    { rank: 1, className: "اول-1", manager: "مهدی مهدوی" },
    { rank: 2, className: "دوم-1", manager: "مهدی مهدوی" },
  ];

  return (
    <div className="h-screen flex">

      <Sidebar />


      <main className="flex-1 flex flex-col p-4 md:p-8 bg-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <h1 className="text-xl font-bold">کلاس های شما</h1>
          <div className="flex space-x-2 rtl:space-x-reverse">
            <button className="p-2 bg-blue-500 text-white rounded-md">افزودن کلاس</button>
            <button className="p-2 bg-gray-300 rounded-md">تنظیمات</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-right">
                <th className="py-2 px-4">ردیف</th>
                <th className="py-2 px-4">نام کلاس</th>
                <th className="py-2 px-4">مسئول</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
                <tr key={index} className="text-right border-t">
                  <td className="py-2 px-4">{cls.rank}</td>
                  <td className="py-2 px-4">{cls.className}</td>
                  <td className="py-2 px-4">{cls.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
