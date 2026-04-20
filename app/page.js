'use client';
import { useState, useEffect } from 'react';

const subtitleText = "Bienvenue sur mon site";
const nameText = "Je m'appelle Alexandre Mikhael";
const instructionText = "Pour continuer, cliquez sur la barre à gauche de l'écran !";
const arrowText = "< -";

export default function Home() {
    const [displayedSubtitle, setDisplayedSubtitle] = useState('');
    const [displayedName, setDisplayedName] = useState('');
    const [displayedInstruction, setDisplayedInstruction] = useState('');
    const [displayedArrow, setDisplayedArrow] = useState('');

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
            }, 1000);
            return () => clearTimeout(nameTimeout);
        }
    }, [displayedSubtitle]);

    useEffect(() => {
        if (displayedName === nameText) {
            let k = 0;
            const instructionTimeout = setTimeout(() => {
                const instructionInterval = setInterval(() => {
                    setDisplayedInstruction(instructionText.slice(0, k + 1));
                    k++;
                    if (k === instructionText.length) clearInterval(instructionInterval);
                }, 30);
            }, 800);
            return () => clearTimeout(instructionTimeout);
        }
    }, [displayedName]);

    useEffect(() => {
        if (displayedInstruction === instructionText) {
            let l = 0;
            const arrowTimeout = setTimeout(() => {
                const arrowInterval = setInterval(() => {
                    setDisplayedArrow(arrowText.slice(0, l + 1));
                    l++;
                    if (l === arrowText.length) clearInterval(arrowInterval);
                }, 150);
            }, 600);
            return () => clearTimeout(arrowTimeout);
        }
    }, [displayedInstruction]);

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
            <div className="text-lg md:text-2xl text-gray-700 mt-8 h-6 text-center">
                <span>
                    {displayedInstruction}
                    <span className="animate-pulse text-red-600">
                        {displayedName === nameText && displayedInstruction.length < instructionText.length ? '|' : ''}
                    </span>
                </span>
            </div>
            <div className="text-2xl md:text-4xl text-gray-900 font-bold mt-6 h-10">
                <span>
                    {displayedArrow}
                    <span className="animate-pulse text-red-600">
                        {displayedInstruction === instructionText && displayedArrow.length < arrowText.length ? '|' : ''}
                    </span>
                </span>
            </div>
        </div>
    );
}