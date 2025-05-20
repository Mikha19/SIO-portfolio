import Image from 'next/image';

export default function CompetenceCard({ title, image, progress, onClick }) {
    return (
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-red-600 cursor-pointer"
            onClick={onClick}
        >
            <div className="w-[100px] h-[100px] flex items-center justify-center mb-6">
                <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>
            <div className="relative">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform -skew-x-12"></div>
            </div>
        </div>
    );
}