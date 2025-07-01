'use client';

import Image from 'next/image';

export default function Card({ card, onClick }) {
    return (
        <div className="flex items-stretch bg-transparent">
            {/* Image section (square, not clickable) */}
            <div className="flex items-center justify-center bg-white rounded-xl shadow-md border-2 border-transparent w-40 h-40 mr-16">
                <Image
                    src={card.image}
                    alt={`${card.title} icon`}
                    width={100}
                    height={100}
                    className={card.imageClass}
                />
            </div>
            {/* Text section (rectangle, clickable) */}
            <div
                className="flex flex-col justify-center flex-1 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-red-600 transition-all p-6 cursor-pointer hover:bg-red-50"
                onClick={onClick}
            >
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
            </div>
        </div>
    );
}