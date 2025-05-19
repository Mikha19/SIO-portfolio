import CompetenceCard from '@/app/components/competences/CompetenceCard';
import { competences } from '@/app/components/data/compCardData';

export default function Home() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                {competences.map((item) => (
                    <CompetenceCard 
                        key={item.id}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}