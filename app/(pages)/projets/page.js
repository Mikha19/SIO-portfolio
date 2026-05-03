'use client';
import { projects } from '@/app/components/data/projectCardData';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-white">
            {projects.map((project, idx) => (
                <section
                    key={project.title + idx}
                    className="min-h-screen flex items-center justify-center p-8 snap-start"
                >
                    <div className="w-full max-w-6xl">
                        <div className="border-2 border-red-600 rounded-lg overflow-hidden shadow-md mb-8">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 relative h-[30vh] lg:h-[30vh]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold mb-6 relative inline-block">
                                        {project.title}
                                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-600" />
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Proofs Section */}
                        {project.proofs && project.proofs.length > 0 && (
                            <div className="border-2 border-gray-300 rounded-lg p-8 bg-gray-50">
                                <h3 className="text-2xl font-bold mb-6">Preuves et ressources</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {project.proofs.map((proof, proofIdx) => (
                                        <div
                                            key={proof.title + proofIdx}
                                            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                                        >
                                            {proof.type === 'link' && (
                                                <a
                                                    href={proof.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 font-semibold break-words"
                                                >
                                                    🔗 {proof.title}
                                                </a>
                                            )}
                                            {proof.type === 'document' && (
                                                <a
                                                    href={proof.value}
                                                    download
                                                    className="text-red-600 hover:text-red-800 font-semibold break-words"
                                                >
                                                    📄 {proof.title}
                                                </a>
                                            )}
                                            {proof.type === 'image' && (
                                                <div className="space-y-2">
                                                    <p className="font-semibold text-gray-700">🖼️ {proof.title}</p>
                                                    <Image
                                                        src={proof.value}
                                                        alt={proof.title}
                                                        width={600}
                                                        height={450}
                                                        className="w-full h-auto rounded border border-gray-200"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}