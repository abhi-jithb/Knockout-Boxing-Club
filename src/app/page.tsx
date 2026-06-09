import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Section from "@/components/Section"
import TrainerCard from '@/components/TrainerCard'

export default function Home(){
  return(
    <>
      <Navbar/>

      <Hero />

      <Section 
        title='About the Gym'
        description='We help beginners to start their boxing career with professional trainer support to build strength, discipline and techniques to box perfectly.'
      />

      <Section 
        title='Training Program'
        description='Beginner classes, competitive boxing, fitness boxing and personal coaching.'
      />

      <Section
        title='Expert Trainers'
        description='Train under experienced coaches with years of competitive experience.'
      />

      <Section 
        title='Contact Info'
        description='Get in touch with the maintainers of the gym directly!'
      />

      <section className= "py-16">
        <h2 className='text-4xl font-bold text-center mb-8 '>
          Our Trainers
        </h2>

        <div className='grid md:grid-col-3 gap-6 px-8'>

          <TrainerCard 
              name='Mamoru Takamura'
              speciality='WBC World Middleweight Champion'
              image="/trainers/trainer1.jpg"
            />
              
            <TrainerCard 
              name='Ippo Makunouchi'
              speciality='Japanese Featherweight Champion'
              image="/trainers/trainer2.jpg"
            />
              
            <TrainerCard 
              name='Takeshi Sendo'
              speciality='Former Japanese Featherweight Champion'
              image="/trainers/trainer3.jpg"
            />
              
            <TrainerCard 
              name='Ricardo Martinez'
              speciality='Undisputed World Featherweight Champion'
              image="/trainers/trainer4.jpg"
            />

        </div>

      </section>

      <Footer />
    </>
  )
}