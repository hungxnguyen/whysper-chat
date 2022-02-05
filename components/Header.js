import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";
import Modal from "./Modal";

function Header() {
  const { user, setUserData } = useMoralis();
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const setUsername = () => {
    modalOpen ? close() : open();
  };

  return (
    <div className="sticky top-0 z-50 border-b-4 border-blue-700/80 bg-black p-5 text-blue-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 ">
        <div className="relative mx-auto hidden h-16 w-16 lg:inline-grid">
          <Image
            src="/images/login-image.png"
            className="rounded-full"
            layout="fill"
            objectFit="cover"
            alt="user-avatar"
          />
        </div>
        <div className="col-span-4 pl-3 text-left md:pl-0 md:text-center">
          <div className="relative h-36 w-36 rounded-full border-4 border-blue-500 md:mx-auto md:h-40 md:w-40">
            <Avatar logoutOnPress />
          </div>

          <h1 className="mt-3.5 text-xl font-thin lg:text-2xl">
            Welcome to Whysper
          </h1>
          <h2 className="-mt-0.5 truncate text-3xl font-semibold text-blue-200 lg:text-4xl">
            @{user.getUsername()}
          </h2>

          <ChangeUserName setUsername={setUsername} />
        </div>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {modalOpen && <Modal handleClose={close} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
