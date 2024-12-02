import React, { useState } from 'react';
import {
  FaUserGraduate,
  FaClipboardList,
  FaEdit,
  FaUtensils,
  FaQuestionCircle,
  FaGift,
  FaIdBadge,
  FaArrowLeft,
  FaCommentDots,
  FaBell,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUsers,
  FaBook
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleNavigation = (path, buttonLabel) => {
    setActiveButton(buttonLabel);
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-1 bg-gray-100 h-screen">
      {/* Top Icon Section */}
      <div className="flex space-x-4 mt-2 mb-4 md:hidden flex-row items-start">
        <button className="p-2 bg-blue-700 rounded-full shadow-lg text-white ml-4">
          <FaCalendarAlt size={24} />
        </button>
        <button className="p-2 bg-blue-500 rounded-full text-white shadow-lg">
          <FaBell size={24} />
        </button>
        <button className="p-2 bg-green-500 rounded-full text-white shadow-lg">
          <FaCommentDots size={24} />
        </button>
        <button className="p-2 bg-red-500 rounded-full text-white shadow-lg">
          <FaArrowLeft size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full max-w-lg md:max-w-3xl">
        <DashboardButton
          icon={<FaUserGraduate size={45} />}
          label="پروفایل "
          onClick={() => handleNavigation('/UserPro', 'پروفایل ')}
          active={activeButton === 'پروفایل '}
        />
        <DashboardButton
          icon={<FaEdit size={45} />}
          label="درخواست لوازم تحریر"
          onClick={() => handleNavigation('/Stationary', 'درخواست لوازم تحریر')}
          active={activeButton === 'درخواست لوازم تحریر'}
        />
        <DashboardButton
          icon={<FaQuestionCircle size={45} />}
          label="سامانه تکنیک"
          onClick={() => handleNavigation('/Ticketing', 'سامانه تکنیک')}
          active={activeButton === 'سامانه تکنیک'}
        />
        <DashboardButton
          icon={<FaQuestionCircle size={45} />}
          label="سامانه تکنیک2"
          onClick={() => handleNavigation('/Ticketing/chat', '۲سامانه تکنیک')}
          active={activeButton === ' ۲سامانه تکنیک'}
        />
        <DashboardButton
          icon={<FaBook size={45} />}
          label="سامانه تکلیف "
          onClick={() => handleNavigation('/HomeWork', 'سامانه تکلیف')}
          active={activeButton === 'سامانه تکلیف'}
        />
        <DashboardButton
          icon={<FaBook size={45} />}
          label="سامانه نمرات "
          onClick={() => handleNavigation('/grades', 'سامانه نمرات')}
          active={activeButton === 'سامانه نمرات'}
        />
        <DashboardButton
          icon={<FaIdBadge size={45} />}
          label="سامانه حضور و غیاب"
          onClick={() => handleNavigation('/PresentUser', 'سامانه حضور و غیاب')}
          active={activeButton === 'سامانه حضور و غیاب'}
        />
        <DashboardButton
          icon={<FaChalkboardTeacher size={45} />}
          label="مدیریت ازمون ها"
          onClick={() => handleNavigation('/exam', 'مدیریت ازمون ')}
          active={activeButton === 'مدیریت ازمون '}
        />
        <DashboardButton
          icon={<FaUsers size={45} />}
          label="مدیریت کاربران"
          onClick={() => handleNavigation('/UsersManegment', 'مدیریت کاربران')}
          active={activeButton === 'مدیریت کاربران'}
        />
        <DashboardButton
          icon={<FaChalkboardTeacher size={45} />}
          label="مدیریت کلاس"
          onClick={() => handleNavigation('/ClassManage', 'مدیریت کلاس')}
          active={activeButton === 'مدیریت کلاس'}
        />
      </div>
    </div>
  );
};

const DashboardButton = ({ icon, label, onClick, active }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer flex flex-col md:flex-row md:justify-start items-center justify-center w-full h-40 md:h-14 mb-1 md:p-4 p-0 rounded-lg shadow-lg
      ${active ? 'border-2 border-blue-600' : ''}
      bg-blue-600 text-white md:text-gray-500 md:bg-white md:shadow-md md:border-r
      hover:border-2 hover:border-blue-600`}
  >
    {icon}
    <p className="mt-2 px-3 md:text-md text-sm font-bold text-center">{label}</p>
  </div>
);

export default Sidebar;
