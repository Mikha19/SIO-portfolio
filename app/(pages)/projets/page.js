'use client';
import { useState } from 'react';
import { projects } from '@/app/components/data/projectCardData';
import Image from 'next/image';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center justify-center">
                    {/* Project Card */}
                    <div className="w-full max-w-6xl border-2 border-red-600 rounded-lg overflow-hidden">
                        <div className="flex">
                            <div className="w-1/2 relative h-[400px]">
                                <Image
                                    src={projects[currentIndex].image}
                                    alt={projects[currentIndex].title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-1/2 p-10 flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-6 relative inline-block">
                                    {projects[currentIndex].title}
                                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-600"></div>
                                </h2>
                                <p className="text-xl text-gray-600">
                                    {projects[currentIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}