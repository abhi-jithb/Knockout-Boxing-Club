type ProgramCardsProps = {
    title: string;
    duration: string;
    description: string;
    price: number;
}

export default function ProgramCards({title, duration, description, price}: ProgramCardsProps){
    return(
        <div className="border rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p>{duration}</p>
            <p className="mb-2">{description}</p>
            <p className="text-xl font-bold mb-2">{price}</p>
        </div>
    )
}