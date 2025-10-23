'use client';
import { projects } from '@/app/components/data/projectCardData';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-white">
            {/* Each project is a full-screen section so the page scrolls vertically through them */}
            {projects.map((project, idx) => (
                <section
                    key={project.title + idx}
                    className="min-h-screen flex items-center justify-center p-8 snap-start"
                >
                    <div className="w-full max-w-6xl border-2 border-red-600 rounded-lg overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 relative h-[60vh] md:h-[60vh]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
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
                </section>
            ))}
        </div>
    );
}