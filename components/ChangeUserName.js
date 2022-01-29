import { motion } from "framer-motion";
import { useMoralis } from "react-moralis";

function ChangeUserName() {
  const { setUserData, user } = useMoralis();

  const setUserName = (e) => {
    const username = prompt(
      `Enter your new Username (currently it's: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-6 right-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="py-2 px-3 rounded-xl bg-blue-700 text-white"
        onClick={setUserName}
      >
        {" "}
        Change Username
      </motion.button>
    </div>
  );
}

export default ChangeUserName;
