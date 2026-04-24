'use client';

import Image from 'next/image';

export default function Card({ card, onClick }) {
    return (
        <div className="bg-transparent lg:flex lg:items-stretch">
            {/* Image section */}
            <div className="flex items-center justify-center bg-white rounded-xl shadow-md border-2 border-transparent w-40 h-40 mx-auto mb-6 lg:mb-0 lg:mr-16 lg:mx-0">
                <Image
                    src={card.image}
                    alt={`${card.title} icon`}
                    width={100}
                    height={100}
                    className={card.imageClass}
                />
            </div>
            {/* Text section */}
            <div
                className="flex flex-col justify-center flex-1 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-red-600 transition-all p-6 cursor-pointer hover:bg-red-50"
                onClick={onClick}
            >
                <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">{card.title}</h2>
                <p className="text-gray-800 text-center lg:text-left">{card.description}</p>
            </div>
        </div>
    );
}