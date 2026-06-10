import ContactForm from "@/components/ContactForm";

export default function Contact(){
    return(
        <section className="min-h-[80vh] py-16">
            <h1 className="text-4xl font-bold text-center mb-8">
                Contact Page
            </h1>

            <ContactForm/>
        </section>
    )
}