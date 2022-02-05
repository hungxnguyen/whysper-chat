import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb-40">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          width={175}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-7 px-6 md:space-y-9 md:px-12 lg:px-36 ">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div ref={endOfMessagesRef} className="pt-10 text-center text-gray-400">
        <p>{`You're up to date ${user.getUsername()} 🚀 `} </p>
      </div>

      <div className="fixed bottom-0 mt-10 flex h-16 w-full items-center justify-center bg-blue-900 ">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
    </div>
  );
}

export default Messages;
