import Image from "next/image"

type TrainerCardProps = {
    name: string;
    speciality: string;
    image: string;
};

export default function TrainerCard({name, speciality, image}: TrainerCardProps){
    return(
        <div className="border rounded-lg p-6">
            <Image 
                src={image}
                alt={name}
                width={300}
                height={300}
            />
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>{speciality}</p>
        </div>
    )
}