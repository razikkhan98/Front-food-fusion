import React, { useState } from "react";

// images
import ChatBotImg from "../../Assets/Images/chatbot-img/chatbot.svg";
import Profile from "../../Assets/Images/chatbot-img/user.png";
import { RxPaperPlane } from "react-icons/rx";

const Message = [
  {
    title: "AI Helper",
    sender: "hii how can i help you",
    user: "Send one plate samosa table no.2",
    user_img: Profile,
    time: "16:40",
  },
  {
    title: "AI Helper",
    sender: "Sure, I have send the notification to the chef",
    user: "Send one plate samosa",
    user_img: Profile,
    time: "16:40",
  },
]

const ChatBot = () => {
  // =========
  // State
  // ========
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // =========
  // Function
  // =========
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };



  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chatbot Icon */}
      <div
        onClick={toggleChat}
        className="cursor-pointer cashier-main-bg-color p-3 rounded-full shadow-lg border flex items-center justify-center border-gray-300"
      >
        <img src={ChatBotImg} className="h-12" alt="ChatBot" />
      </div>

      {/* Chat Pop-up */}
      {isChatOpen && (
        <div className="absolute bottom-24 right-0 w-80  bg-white rounded-lg shadow-xl border border-gray-200">
          
          {/* Messages */}
          <div className="p-3 max-h-80 overflow-auto">
            {Message.map((items, index) => (
              <>
                <div className={`px-3 py-1 my-3 text-sm bg-gray-light-color rounded-lg max-w-[75%] `}>
                  <p className="font-medium text-xs cashier-main-text-color ">{items.title}</p>
                  <p className="text-xs">{items.sender}</p>
                  <p className="text-xs text-gray-500 text-right">{items.time}</p>
                </div>
                <div className="flex justify-end items-end">
                  <div className=" rounded-lg cashier-light-bg-color px-3 py-1 max-w-[75%]">
                    <p className="text-xs">{items.user}</p>
                    <p className="text-xs text-gray-500 text-right">16:40</p>
                  </div>
                  <div className="relative">
                    <img src={items.user_img} className="ms-2 h-10" alt="Loading" />
                    <span className="absolute right-0 bottom-0 rounded-full bg-green-400 p-1.5 z-10"></span>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* Input Field */}
          <div className="relative flex items-center  border-gray-300 p-2">
            <input
              type="text"
              placeholder="Type here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 text-xs py-2 bg-gray-light-color rounded-full focus:outline-none"
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 ml-2 p-2">
              < RxPaperPlane className="text-color-gray fw-bold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
