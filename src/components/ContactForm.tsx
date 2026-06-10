export default function ContactForm(){
    return(
        <form className="flex flex-col gap-4 max-w-md mx-auto">

            <input type="text" placeholder="Your Name" className="border p-2 rounded" />

            <input type="email" placeholder="example@gmail.com" className="border p-2 rounded"/>

            <textarea placeholder="Write your message here... We are ready to hear you!" className="border p-2 rounded"/>

            <button type="submit" className="border p-2 rounded">Send Message</button>
        </form>
    )
}