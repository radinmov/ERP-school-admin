import Sidebar from "../../componets/Sidebar";
import useTitle from "../../componets/Hook/useTitle";

export const Home = () => {
    useTitle("HomePage");
    return (
        <div className="min-h-screen bg-gray-50">
          
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 flex-col p-4 md:p-8 max-md:hidden">
                    <section className="flex flex-col flex-wrap gap-4 md:gap-6">
                        {/* Card 1 */}
                        <div className="w-72 h-64 flex flex-col items-center justify-center w-full  bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img className="w-36 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">نمایش برنامه کلاسی</h3>
                            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md">
                                برنامه هفتگی
                            </button>
                        </div>
                        {/* Card 2 */}
                        <div className="w-72 h-64 flex flex-col items-center justify-center w-full  bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img className="w-36 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">آها</h3>
                            <p className="text-center text-sm">اخبار جدید و تازه های گروه مختص بچه ها</p>
                            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md">
                                اخبار و جراید
                            </button>
                        </div>
                        {/* Card 3 */}
                        <div className="w-72 h-64 flex flex-col items-center justify-center w-full  bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img className="w-36 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">سامانه تیکتینگ</h3>
                            <p className="text-center text-sm">جهت درخواست پشتیبانید.</p>
                            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md">
                                سامانه تیکتینگ
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};
