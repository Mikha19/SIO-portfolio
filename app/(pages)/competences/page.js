'use client';

import { useState, useEffect } from 'react';
import CompetenceCard from '@/app/components/competences/CompetenceCard';
import Modal from '@/app/components/competences/Modal';
import { competences } from '@/app/components/data/compCardData';
import Image from 'next/image';
import Code from '@/app/components/competences/code';
import { motion } from 'framer-motion';

export default function Home() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentProgress, setCurrentProgress] = useState(0);

    // Function to calculate color based on progress
    const getProgressColor = (progress) => {
        if (progress <= 50) {
            // From red to yellow (0-50%)
            return `rgb(255, ${Math.round((progress / 50) * 255)}, 0)`;
        } else {
            // From yellow to green (51-100%)
            return `rgb(${Math.round(255 - ((progress - 50) / 50) * 255)}, 200, 0)`;
        }
    };

    // Animate progress when modal opens
    useEffect(() => {
        if (selectedCard) {
            setCurrentProgress(0);
            const duration = 1000; // 1 second animation
            const steps = 60; // 60 steps for smooth animation
            const increment = selectedCard.progress / steps;
            const stepDuration = duration / steps;

            let progress = 0;
            const interval = setInterval(() => {
                progress += increment;
                if (progress >= selectedCard.progress) {
                    setCurrentProgress(selectedCard.progress);
                    clearInterval(interval);
                } else {
                    setCurrentProgress(progress);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        }
    }, [selectedCard]);

    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, type: "spring", stiffness: 80 }
        }),
    };

    return (
        <div className="min-h-screen bg-white p-16">
            <div className="grid grid-cols-3 gap-16 max-w-7xl mx-auto">
                {competences.map((item, i) => (
                    <motion.div
                        key={item.id}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <CompetenceCard 
                            {...item}
                            onClick={() => setSelectedCard(item)}
                        />
                    </motion.div>
                ))}
            </div>

            <Modal isOpen={selectedCard !== null} onClose={() => setSelectedCard(null)}>
                {selectedCard && (
                    <div className="flex flex-col items-center space-y-6 p-8">
                        <div className="w-[150px] h-[150px] flex items-center justify-center">
                            <Image 
                                src={selectedCard.image} 
                                alt={selectedCard.title}
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                        <div className="relative">
                            <h2 className="text-3xl font-bold text-center">{selectedCard.title}</h2>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform -skew-x-12"></div>
                        </div>
                        <div className="w-full max-w-md">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                    className="h-2.5 rounded-full transition-all duration-75"
                                    style={{ 
                                        width: `${currentProgress}%`,
                                        backgroundColor: getProgressColor(currentProgress)
                                    }}
                                ></div>
                            </div>
                            <p className="text-lg text-gray-600 text-center mt-2">
                                Niveau de maîtrise: {Math.round(currentProgress)}%
                            </p>
                        </div>
                        <div className="w-full max-w-md">
                            <Code language={selectedCard.title.toLowerCase()}>
                                {selectedCard.codeExample}
                            </Code>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}