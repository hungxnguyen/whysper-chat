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
        className="flex items-center justify-center m-auto p-5 rounded-lg max-w-screen-md bg-blue-200 modal"
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
          <p className="text-xl">Enter New Username</p>
          <input
            className="p-2 rounded-lg placeholder:text-sm text-center text-zinc-900"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            type="text"
          />
          <button
            className="p-1.5 bg-blue-500 text-white rounded-lg"
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
