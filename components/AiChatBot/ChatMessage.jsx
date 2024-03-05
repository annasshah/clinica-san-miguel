"use client";
import React from "react";

const ChatMessage = ({ message }) => {
  const userClass =
    message.sender === "user"
      ? " mb-4  p-3 bg-[#C1001F] text-[#475560] text-[12px]  rounded-tr-[20px] shadow-md  rounded-tl-[20px] rounded-bl-[20px]    self-end    "
      : "mb-4   p-3 bg-[#3D3D3C] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] max-w-md  shadow-md  text-[12px] ";

  if (!message.content) {
    return null;
  }
  return (
    <div
      className={`flex mt-4  w-[100%] items-center ${message.sender === "user" && "justify-end"}
      ${message.sender === "assistant" && "justify-start"}`}
    >
      <div
        className={`flex  animate__animated animate__fadeInUp  w-[100%] ${message.sender === "user" && "justify-end"}${message.sender === "assistant" && "justify-start"}  "`}
      >
        <div className="w-[80%]">
          <div className={`${userClass} `}>
            <p className="text-[#475560] text-white  text-justify ">
              {message.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
