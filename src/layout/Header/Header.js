import { 
    FaCommentDots,
    FaBell,
    FaUserGraduate,
    FaArrowLeft,
    FaCalendarAlt

} from "react-icons/fa";

export const Header = () => {
    return (
        <header className=" flex items-center justify-between bg-white p-4 shadow-md max-md:hidden">
            <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-blue-600 text-3xl" />
                <h1 className="text-2xl font-bold text-gray-700">High School </h1>
            </div>
            <div className="flex space-x-4 items-center ">
                
            
                <button className="p-2 bg-blue-500 rounded-full h-full text-white ml-4">
                <FaBell size={24} />
                </button>
                
                <button className="p-2 bg-green-500 rounded-full h-full text-white">
                <FaCommentDots size={24} />
                </button>

                <button className="p-2  bg-red-500  rounded-full h-full text-white ">
                <FaArrowLeft size={24} />
                </button> 
                
                <button className="p-3  bg-gray-200 rounded-full text-gray-800 ml-4">
                <FaUserGraduate size={24} />
                </button>

                <p className="flex items-center">ثنا قلی نواز</p>
            </div>
        </header>
    );
};
