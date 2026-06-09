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
        <h2 className='text-4xl font-bold '>
          Our Trainers
        </h2>

        <TrainerCard 
          name='Onomastus'
          speciality='Fisrt Boxer'
        />

        <TrainerCard 
          name='Hawa Singh'
          speciality='Father of Indian Boxing'
        />

        <TrainerCard 
          name='Muhammed Ali'
          speciality='Considered as the greatest'
        />

      </section>
      
      <Footer />
    </>
  )
}