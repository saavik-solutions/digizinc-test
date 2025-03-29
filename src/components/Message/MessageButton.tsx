import { useState } from "react";
import { X, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Button - Fixed at Right Bottom */}
      <button
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-[100]"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Box - Appears Above Footer */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-[99999]">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white shadow-2xl rounded-xl w-80 h-60 p-5 border border-gray-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Chat</h3>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <p className="text-gray-600 mb-3">Hello! How can I assist you today?</p>

            {/* Input Box with Send Button */}
            <div className="flex items-center border rounded-lg p-2 mt-18">
                <input
                  type="text"
                  className="flex-1 outline-none text-black p-1 border border-purple rounded-md"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              <button className="text-blue-600 hover:text-blue-700" onClick={() => setMessage("")}>
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
