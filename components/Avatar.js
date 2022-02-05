import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <div>
      <Image
        className="cursor-pointer rounded-full bg-zinc-800 hover:opacity-75"
        src={`https://avatars.dicebear.com/api/adventurer/${
          username || user.getUsername()
        }.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
        alt="user-avatar"
      />
    </div>
  );
}

export default Avatar;
