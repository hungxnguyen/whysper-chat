import { motion } from "framer-motion";

function ChangeUserName({ setUsername }) {
  return (
    <div className="text-sm absolute top-6 right-6">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 px-3 rounded-xl bg-blue-700 text-zinc-300 relative"
          onClick={setUsername}
        >
          {" "}
          Change Username
        </motion.button>
      </div>
    </div>
  );
}

export default ChangeUserName;
