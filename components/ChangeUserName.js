import { motion } from "framer-motion";

function ChangeUserName({ setUsername }) {
  return (
    <div className="absolute top-6 right-6 text-sm">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative rounded-xl bg-blue-700 py-2 px-3 text-zinc-300"
        onClick={setUsername}
      >
        {" "}
        Change Username
      </motion.button>
    </div>
  );
}

export default ChangeUserName;
