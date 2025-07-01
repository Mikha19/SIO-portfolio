'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [displayedSubtitle, setDisplayedSubtitle] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [displayedSecondSubtitle, setDisplayedSecondSubtitle] = useState('');

    const titleText = "Besoin de me contacter ?";
    const subtitleText = "Remplissez le formulaire suivant pour que l'on se donne rendez-vous !";
    const secondSubtitleText = "Ou contactez-moi directement sur Linkedin.";

    useEffect(() => {
        let i = 0;
        const titleInterval = setInterval(() => {
            setDisplayedTitle(titleText.slice(0, i + 1));
            i++;
            if (i === titleText.length) clearInterval(titleInterval);
        }, 40);
        return () => clearInterval(titleInterval);
    }, []);

    useEffect(() => {
        if (displayedTitle === titleText) {
            let j = 0;
            const subtitleTimeout = setTimeout(() => {
                const subtitleInterval = setInterval(() => {
                    setDisplayedSubtitle(subtitleText.slice(0, j + 1));
                    j++;
                    if (j === subtitleText.length) clearInterval(subtitleInterval);
                }, 30);
            }, 600); // delay after title finishes
            return () => clearTimeout(subtitleTimeout);
        }
    }, [displayedTitle]);

    // Typing animation for the second subtitle after the first subtitle finishes
    useEffect(() => {
        if (displayedSubtitle === subtitleText) {
            let k = 0;
            const secondSubtitleTimeout = setTimeout(() => {
                const secondSubtitleInterval = setInterval(() => {
                    setDisplayedSecondSubtitle(secondSubtitleText.slice(0, k + 1));
                    k++;
                    if (k === secondSubtitleText.length) clearInterval(secondSubtitleInterval);
                }, 30);
            }, 600); // delay after first subtitle finishes
            return () => clearTimeout(secondSubtitleTimeout);
        }
    }, [displayedSubtitle]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Information */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold relative inline-block min-h-[56px]">
                            <span className="relative z-10">
                                {displayedTitle}
                                <span className="absolute left-0 right-0 -bottom-2 h-1 bg-red-600 transform -skew-x-12 z-[-1]"></span>
                                <span className="animate-pulse text-red-600">
                                    {displayedTitle.length < titleText.length ? '|' : ''}
                                </span>
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 mt-6 min-h-[32px]">
                            <span>
                                {displayedSubtitle}
                                <span className="animate-pulse text-red-600">
                                    {displayedTitle === titleText && displayedSubtitle.length < subtitleText.length ? '|' : ''}
                                </span>
                            </span>
                        </p>
                        <div className="mt-8">
                            <p className="text-lg text-gray-600 min-h-[32px]">
                                <span>
                                    {displayedSecondSubtitle}
                                    <span className="animate-pulse text-red-600">
                                        {displayedSubtitle === subtitleText && displayedSecondSubtitle.length < secondSubtitleText.length ? '|' : ''}
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white rounded-lg p-8 border-2 border-red-600">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Adresse e-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows="6"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center">Message envoyé avec succès !</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center">Une erreur est survenue. Veuillez réessayer.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}