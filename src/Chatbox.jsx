import { useState } from "react";
import "./index.css";
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sampleResponses = {
    hello: "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a chatbot! You can call me ChatBuddy.",
    bye: "Goodbye! Have a great day!",
    default: "I'm not sure about that. Can you rephrase?",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const responseText =
      sampleResponses[input.toLowerCase()] || sampleResponses["default"];
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: responseText, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end custom-scroll">
      {open && (
        <div className="w-80 bg-gray-900 border-2 border-red-500 rounded-2xl shadow-lg p-4 text-white h-80 flex flex-col overflow-hidden">
          <div className="flex-1 space-y-2 overflow-y-scroll custom-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={
                    msg.sender === "user"
                      ? "text-white bg-red-500 p-2 rounded-lg inline-block max-w-xs"
                      : "text-white bg-gray-700 p-2 rounded-lg inline-block max-w-xs"
                  }
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-800 text-white border border-red-500 rounded-l-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-red-500 px-4 text-white rounded-r-md"
              onClick={handleSend}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m-7.5-7.5L19.5 12m-7.5 7.5L19.5 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <button
        className="mt-2 bg-black text-white p-3 rounded-full border-2 border-red-500 shadow-lg hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h8m-8 4h4m-2-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
          />
        </svg>
      </button>
    </div>
  );
}
