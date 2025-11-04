'use client';
import { useState, useEffect } from 'react';

const subtitleText = "Bienvenue sur mon site";
const nameText = "Je m'appelle Alexandre Mikhael";

export default function Home() {
    const [displayedSubtitle, setDisplayedSubtitle] = useState('');
    const [displayedName, setDisplayedName] = useState('');

    useEffect(() => {
        let i = 0;
        const subtitleInterval = setInterval(() => {
            setDisplayedSubtitle(subtitleText.slice(0, i + 1));
            i++;
            if (i === subtitleText.length) clearInterval(subtitleInterval);
        }, 40);

        return () => clearInterval(subtitleInterval);
    }, []);

    useEffect(() => {
        if (displayedSubtitle === subtitleText) {
            let j = 0;
            const nameTimeout = setTimeout(() => {
                const nameInterval = setInterval(() => {
                    setDisplayedName(nameText.slice(0, j + 1));
                    j++;
                    if (j === nameText.length) clearInterval(nameInterval);
                }, 40);
            }, 1000); // 1s delay after subtitle finishes
            return () => clearTimeout(nameTimeout);
        }
    }, [displayedSubtitle]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-center relative mb-6">
                <span className="relative z-10">
                    {displayedSubtitle}
                    <span
                        className="absolute left-0 right-0 -bottom-2 h-2 bg-red-600 z-[-1] rounded"
                        style={{ width: '100%' }}
                    ></span>
                    <span className="animate-pulse text-red-600">
                        {displayedSubtitle.length < subtitleText.length ? '|' : ''}
                    </span>
                </span>
            </h1>
            <div className="text-lg md:text-2xl text-gray-700 h-8">
                <span>
                    {displayedName}
                    <span className="animate-pulse text-red-600">
                        {displayedSubtitle === subtitleText && displayedName.length < nameText.length ? '|' : ''}
                    </span>
                </span>
            </div>
        </div>
    );
}