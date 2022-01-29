import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 text-blue-500 bg-black border-b-4 border-blue-700/80">
      <div className="grid grid-cols-5 lg:grid-cols-6 ">
        <div className="relative h-16 w-16 mx-auto hidden lg:inline-grid">
          <Image
            src="/images/login-image.png"
            className="rounded-full"
            layout="fill"
            objectFit="cover"
            alt="user-avatar"
          />
        </div>
        <div className="text-left pl-3 md:pl-0 md:text-center col-span-4">
          <div className="relative h-36 w-36 md:h-40 md:w-40 md:mx-auto border-4 border-blue-500 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-xl lg:text-2xl mt-3.5 font-thin">
            Welcome to Whysper
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold truncate -mt-0.5 text-blue-200">
            @{user.getUsername()}
          </h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
