import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="relative z-50 bg-white p-8 rounded-lg shadow-xl w-[1000px] max-h-[80vh] overflow-y-auto m-4 border-4 border-red-600"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <b>X</b>
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}