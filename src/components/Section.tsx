type SectionProps = {
    title: string;
    description: string;
};

export default function Section({title, description}:SectionProps){
    return(
        <section py-16 px-8 text-center>

            <h2 className="text-4xl font-bold mb-4">
                {title}
            </h2>
       
            <p className="max-w-2xl mx-auto">
                {description}
            </p>

         </section>
    )
}