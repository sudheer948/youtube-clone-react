import { PROFILE_URL } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 mb-2 items-center shadow-sm">
      <img
        className="h-8 rounded-2xl flex-shrink-0"
        src={PROFILE_URL}
        alt="user profile"
      />

      <div>
        <span className="font-semibold">{name}</span> <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
