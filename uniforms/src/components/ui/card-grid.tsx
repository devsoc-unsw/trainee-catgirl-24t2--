import { Card } from "@/components/ui/card"
import { Plus } from 'lucide-react';

interface CardGridProps {
    variant: string;
}

const CardGrid: React.FC<CardGridProps> = ({ variant })=> {
    return variant === "d" ?
        <div className="flex flex-wrap items-center content-centre w-[80vw] max-w-[970px] h-[251px] p-[10px] gap-[20px]">
            { /*Add Forms Button*/ }
            <div className="flex justify-center items-center rounded-[20px] w-[20vw] max-w-[220px] h-[251px] scale-bounce bg-card hover:bg-card">
                <Plus className="w-[120px] h-[120px]"></Plus>
            </div>
            { /*Maybe have an input as the amount of cards?*/ }
            <Card variant={variant}></Card>  
        </div>
    :
        <div className="flex flex-col items-center content-centre w-[80vw] max-w-[280px] h-[251px] p-[10px] gap-[20px]">
            { /*Add Forms Button*/ }
            <div className="flex justify-center items-center rounded-[20px] w-[80vh] max-w-[260px] h-[45px] scale-stretch bg-card hover:bg-card">
                <Plus className="w-[30px] h-[30px] scale-bounce"></Plus>
            </div>
            { /*Maybe have an input as the amount of cards?*/ }
            <Card variant={variant}></Card>  
        </div>
}

export { CardGrid }