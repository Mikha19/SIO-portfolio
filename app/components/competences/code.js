'use client';

export default function Code({ children, language }) {
    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                <span className="text-sm text-gray-200">{language}</span>
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
            <pre className="bg-gray-900 p-4 overflow-x-auto">
                <code className="text-sm text-gray-300">{children}</code>
            </pre>
        </div>
    );
}