import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const Modal = ({ handleClose }) => {
  const [newUsername, setNewUsername] = useState("");
  const { setUserData } = useMoralis();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const displayNewUsername = (e) => {
    e.preventDefault();

    if (!newUsername) return;

    setUserData({
      username: newUsername,
    });

    handleClose();
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal m-auto flex max-w-screen-md items-center justify-center rounded-lg bg-blue-200 p-5"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={displayNewUsername}
          className="flex flex-col space-y-3 text-center "
        >
          <p className="text-lg">Enter New Username</p>
          <input
            className="rounded-lg p-2 text-center text-zinc-900 placeholder:text-sm"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            type="text"
          />
          <button
            className="rounded-lg bg-blue-500 p-1.5 text-white"
            onClick={displayNewUsername}
          >
            Submit
          </button>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
