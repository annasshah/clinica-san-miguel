"use client";
// import "regenerator-runtime/runtime";
import Image from "next/image";
import { useState } from "react";
import ChatInterface from "./Chat";
import InitialChat from "./InitalChat";
import AiBotImg from "../../assets/images/AiBot/Aibot.png";

import "animate.css";
export default function AiBot() {
  const [open, setOpen] = useState(false);
  const [initialModal, setInitialModal] = useState(true);
  const [assistantId, setAssistantId] = useState("");
  const [threadId, setThreadId] = useState("");

  const openClickHandler = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const initialChatHandler = () => {
    setInitialModal((initialModal) => !initialModal);
  };

  const updateIDsState = (newAssistantId, newThreadId) => {
    setAssistantId(newAssistantId);
    setThreadId(newThreadId);
  };

  return (
    <>
    {open && (
          <div className="relative flex items-center justify-center  overflow-hidden   h-[100vh] w-[100%] ">
          <div className="  w-full  flex flex-col items-center justify-center  relative ">
            { [
              initialModal ? (
                <InitialChat
                  key="initialChat"
                  initialChatHandler={initialChatHandler}
                  updateIDsState={updateIDsState}
                />
              ) : (
                <ChatInterface
                  key="chatInterface"
                  assistantId={assistantId}
                  threadId={threadId}
                />
              ),
            ]}
          </div>
    
        
        </div>
    )

    }
      <div className="   flex flex-col items-center justify-center absolute bottom-1 right-4 ">
            <div className="w-[351px] flex items-center  my-2 justify-end">
              <div
                className="flex items-center  cursor-pointer justify-center bg-red-700 p-3 rounded-[50px]"
                onClick={openClickHandler}
              >
                <Image
                  src={AiBotImg}
                  className="cursor-pointer h-[40px] w-[40px]"
                  alt="Ai Chat Bot"
                />
              </div>
            </div>
          </div>
    </>

  );
}
