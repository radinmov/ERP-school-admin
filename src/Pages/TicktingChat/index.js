import React, { useState } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import Sidebar from '../../componets/Sidebar'; // Assuming you already have Sidebar component
import useTitle from "../../componets/Hook/useTitle";

export const TicketingChat = () => {
  useTitle("UsersManegment");

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'A', content: 'مشکل در ورود به حساب کاربری دارم.' },
    { sender: 'B', content: 'لطفاً مشکل خود را توضیح دهید.' },
  ]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([
        ...messages,
        { sender: 'A', content: message }, 
      ]);
      setMessage(''); 
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row">
        <Sidebar />

        <main className="flex-1 flex-col p-4 md:p-8">
          <div className="p-4 rounded-lg mb-6">
            <div className="flex space-x-4">
              <button className="px-6 py-3 w-[200px] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-200">
                معاون 
              </button>

              <button className="px-6 py-3 w-[200px] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-200">
                معلم 
              </button>

              <button className="px-6 py-3 w-[200px] text-black font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200">
                مدیر
              </button>

            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">جزئیات تیکت</h2>

            {/* Chat Messages Section */}
            <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start space-x-2 ${msg.sender === 'A' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`flex-shrink-0 ${msg.sender === 'A' ? 'bg-blue-500' : 'bg-gray-500'} text-white rounded-full p-2`}>
                    {msg.sender}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm max-w-lg">
                    <p className="font-semibold">{msg.sender === 'A' ? 'کاربر علی' : 'پشتیبان'}</p>
                    <p className="text-gray-700">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="پیام خود را وارد کنید..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                ارسال
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
