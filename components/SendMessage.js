import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get("ethAddress"),
    });

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-2 bg-black opacity-80 w-5/6 max-w-xl py-2.5 px-6 rounded-full border-2 border-blue-500">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder={`Type your message...`}
      />
      <button
        type="submit"
        className="font-bold text-blue-200"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
