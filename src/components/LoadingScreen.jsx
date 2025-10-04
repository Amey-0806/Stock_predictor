import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-green-400">
            <motion.img
                src="https://i.gifer.com/7efs.gif"
                alt="loading"
                className="w-24 mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                Loading your fortune...
            </motion.h2>
        </div>
    );
}
