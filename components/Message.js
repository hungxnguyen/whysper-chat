import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-8 w-8 border-2 border-slate-800 rounded-full ${
          isUserMessage && "order-last ml-2"
        }`}
      >
        <Avatar username={user.getUsername()} />
      </div>
      <div
        className={`flex space-x-4 p-2 text-sm rounded-lg  ${
          isUserMessage
            ? "rounded-br-none bg-blue-600 shadow-lg shadow-blue-900"
            : "rounded-bl-none bg-gray-500 shadow-lg shadow-gray-700"
        }`}
      >
        <p className="text-white">{message.get("message")}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-300 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.get("createdAt")}
      />

      <p
        className={`absolute -bottom-5 text-xs text-gray-500 ${
          isUserMessage && "hidden"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
