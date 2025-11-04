'use client';

import Image from 'next/image';
import Modal from '@/app/components/Presentation/Modal';
import Card from '@/app/components/Presentation/presentationCard';
import { useState } from 'react';
import { presentations } from '@/app/components/data/presCardData';
import { motion } from 'framer-motion';

export default function Home() {
    const [selectedCard, setSelectedCard] = useState(null);

    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, x: -80 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, type: "spring", stiffness: 80 }
        }),
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-6xl mx-auto mt-16">
                {/* Présentations - vertically stacked */}
                <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                    {[0, 1, 2].map((idx, i) => (
                        <motion.div
                            key={presentations[idx].title}
                            custom={i + 1}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                           className="w-full"
                        >
                            <Card card={presentations[idx]} onClick={() => setSelectedCard(presentations[idx])} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={selectedCard !== null} onClose={() => setSelectedCard(null)}>
                {selectedCard && (
                    <div className="w-full max-w-3xl">
                        {/* Header: circular image + title */}
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 flex-shrink-0">
                                <Image
                                    src={selectedCard.image}
                                    alt={`${selectedCard.title} icon`}
                                    width={80}
                                    height={80}
                                    className={`${selectedCard.imageClass} rounded-full object-cover`}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl p-8 font-bold">{selectedCard.title}</h2>
                                {selectedCard.link && (
                                    <a
                                        href={selectedCard.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline decoration-2 font-medium transition-colors"
                                    >
                                        {selectedCard.link}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Red divider */}
                        <div className="mt-6">
                            <div className="h-1 bg-red-500 rounded w-full" />
                        </div>

                        {/* Body text */}
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            {selectedCard.text}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    );
}
