'use client';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative z-50 bg-white p-8 rounded-lg shadow-xl w-[800px] min-h-[600px] m-4">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}