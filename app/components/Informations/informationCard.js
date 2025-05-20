'use client';

import Image from 'next/image';

export default function Card({ card, onClick }) {
    return (
        <div 
            className="w-full flex gap-6 bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-2xl cursor-pointer"
            onClick={onClick}
        >
            {/* Left side - Image and title */}
            <div className="w-64 flex flex-col items-center gap-3">
                <Image 
                    src={card.image} 
                    alt={`${card.title} icon`}
                    width={150}
                    height={150}
                    className={`${card.imageClass} w-32 h-32 object-cover`}
                />
                <h2 className="text-2xl font-bold text-center">{card.title}</h2>
            </div>

            {/* Right side - Text content */}
            <div className="flex-1">
                <p className="text-gray-700">{card.description}</p>
            </div>
        </div>
    );
}