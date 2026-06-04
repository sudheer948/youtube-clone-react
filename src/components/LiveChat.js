import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        }),
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          // Disclaimer: Don't use indexes as keys
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="w-full p-3 border border-black flex gap-2.5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mohd Sudheer",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Enter your message here!"
        />
        <button className="w-full px-3 bg-black text-white py-2 rounded-md hover:bg-gray-200 hover:text-black transition-all">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
