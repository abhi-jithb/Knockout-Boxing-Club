type TrainerCardProps = {
    name: string;
    speciality: string;
};

export default function TrainerCard({name, speciality}: TrainerCardProps){
    return(
        <div className="border rounded-lg p-6">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>{speciality}</p>
        </div>
    )
}