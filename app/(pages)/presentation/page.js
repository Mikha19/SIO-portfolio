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
            <div className="max-w-6xl mx-auto mt-16 space-y-8">
                {/* Top card */}
                {/* <div className="flex justify-center">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <Card card={presentations[0]} onClick={() => setSelectedCard(presentations[0])} />
                    </motion.div>
                </div> */}
                
                {/* Bottom two presentations */}
                <div className="flex flex-col gap-8">
                    {[0, 1, 2].map((idx, i) => (
                        <motion.div
                            key={presentations[idx].title}
                            custom={i + 1}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <Card card={presentations[idx]} onClick={() => setSelectedCard(presentations[idx])} />
                        </motion.div>
                    ))}
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
