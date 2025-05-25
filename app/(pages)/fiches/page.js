import Image from 'next/image';
import Link from 'next/link';
import { pdfInfo } from '@/app/components/data/fichesCardData';

export default function Home() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-5xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pdfInfo.map((file, index) => (
                        <Link key={index} href={file.pdfUrl} target="_blank" rel="noopener noreferrer"
                            className="block border-2 border-red-600 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="aspect-[3/4] relative bg-gray-100">
                                <Image
                                    src={file.thumbnailUrl}
                                    alt={`Aperçu ${file.title}`}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-2xl font-bold relative inline-block">
                                    {file.title}
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></div>
                                </h2>
                                <p className="text-gray-600 mt-2">{file.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}