'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/app/components/Informations/Modal';
import Card from '@/app/components/Informations/informationCard';
import { cards } from '@/app/components/data/infoCardData';

export default function Home() {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-6xl mx-auto mt-16 space-y-8">
                {/* Top card */}
                <div className="flex justify-center">
                    <Card card={cards[0]} onClick={() => setSelectedCard(cards[0])} />
                </div>
                
                {/* Bottom two cards */}
                <div className="flex flex-col gap-8">
                    <Card card={cards[1]} onClick={() => setSelectedCard(cards[1])} />
                    <Card card={cards[2]} onClick={() => setSelectedCard(cards[2])} />
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={selectedCard !== null} onClose={() => setSelectedCard(null)}>
                {selectedCard && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Image 
                                src={selectedCard.image} 
                                alt={`${selectedCard.title} icon`}
                                width={80}
                                height={80}
                                className={selectedCard.imageClass}
                            />
                            <h2 className="text-3xl font-bold">{selectedCard.title}</h2>
                        </div>
                        <p className="text-lg text-gray-500">{selectedCard.text}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
}
