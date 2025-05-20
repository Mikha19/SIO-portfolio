import { veilleItems } from '@/app/components/data/veilleCardData';

export default function Home() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 relative inline-block">
                    Veille Technologique
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform -skew-x-12"></div>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {veilleItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-red-600 rounded-lg overflow-hidden"
                        >
                            <div className="w-full h-48 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="relative inline-block mb-4">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></div>
                                </div>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="text-sm text-gray-500">
                                    <p className="font-semibold mb-1">Sources :</p>
                                    <ul className="list-disc list-inside">
                                        {item.sources.map((source, idx) => (
                                            <li key={idx}>{source}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}