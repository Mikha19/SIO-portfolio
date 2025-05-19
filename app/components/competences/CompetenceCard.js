import Image from 'next/image';

export default function CompetenceCard({ title, image }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full aspect-video  rounded-lg overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="relative mt-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform -skew-x-12"></div>
            </div>
        </div>
    );
}