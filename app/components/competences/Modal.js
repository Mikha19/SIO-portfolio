export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative z-50 bg-white p-8 rounded-lg shadow-xl w-[1000px] max-h-[80vh] overflow-y-auto m-4 border-4 border-red-600">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <b>X</b>
                </button>
                {children}
            </div>
        </div>
    );
}