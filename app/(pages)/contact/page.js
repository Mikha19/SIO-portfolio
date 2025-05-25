'use client';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

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
                setFormData({ name: '', email: '', subject: '', message: '' });
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
                        <h1 className="text-4xl font-bold relative inline-block">
                            Besoin de me contacter ?
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform -skew-x-12"></div>
                        </h1>
                        <p className="text-lg text-gray-600 mt-6">
                            Remplissez le formulaire suivant pour que l'on se donne rendez-vous !
                        </p>
                        <div className="mt-8">
                            {/* Add additional contact information if needed */}
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
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Adresse Email</label>
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
                                <p className="text-green-600 text-center">Message envoyé avec succès!</p>
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