import Hero from '@/components/Hero'
import ProgramCards from '@/components/ProgramCards'
import Section from "@/components/Section"
import TrainerCard from '@/components/TrainerCard'

const trainers = [
  {
    name: "Mamoru Takamura",
    speciality: "WBC World Middleweight Champion",
    image: "/trainers/trainer1.jpg",
  },
  {
    name: "Ippo Makunouchi",
    speciality: "Japanese Featherweight Champion",
    image: "/trainers/trainer2.jpg",
  },
  {
    name: "Takeshi Sendo",
    speciality: "Former Japanese Featherweight Champion",
    image: "/trainers/trainer3.jpg",
  },
  {
    name: "Ricardo Martinez",
    speciality: "Undisputed World Featherweight Champion",
    image: "/trainers/trainer4.jpg",
  },
];

export default function Home(){
  return(
    <>
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
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              name={trainer.name}
              speciality={trainer.speciality}
              image={trainer.image}
            />
          ))}
        </div>
      </section>

      <section className='py-16'>
        <h2 className='text-4xl font-bold text-center mb-8'>
          Training Programs
        </h2>

          <ProgramCards 
            title='1 Week Program'
            duration='3 week'
            description='oru aazhcha boxing padikam'
            price={3000}
          />

          <ProgramCards 
            title='4 Week Program'
            duration='4 week'
            description='4 aazhcha boxing padikam'
            price={5000}
          />

          <ProgramCards 
            title='6 Week Program'
            duration='6 week'
            description='6 aazhcha boxing padikam'
            price={7000}
          />

          <ProgramCards 
            title='8 Week Program'
            duration='8 week'
            description='8 aazhcha boxing padikam'
            price={12000}
          />
      </section>
    </>
  )
}