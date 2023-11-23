import { Button } from '@material-tailwind/react'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative isolate px-6 lg:px-8 bg-gradient-to-b from-white to-light-green-200">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="flex justify-between placeholder: mx-auto max-w-6xl py-14">
          <div className='max-w-2xl'>
            <h1 className="text-3xl font-bold tracking-tight text-green-800 lg:text-6xl">
              NutriCare: Empowering Your <span className='text-orange-600'>Health</span> Through <span className='text-orange-600'>Nutrition</span>
            </h1>
            <p className="mt-6 text-md leading-8 text-green-800">
            <span className='text-orange-600'>NutriCare</span> is your one-stop destination for achieving a healthier lifestyle through proper nutrition. Our platform is designed to empower you with the knowledge and tools needed to make informed decisions about your diet and overall well-being. Whether you're looking to manage your weight, improve your eating habits, or simply understand the nutritional content of your meals, <span className='text-orange-600'>NutriCare</span> has you covered.
            </p>
            <div className="mt-4 gap-x-6">
              <a href='#'>
                <Button className='bg-green-800 hover:bg-green-500'>Read More</Button>
              </a>
            </div>
          </div>
          <div>
            <img src='/illustration/amico.svg' className='max-w-sm h-auto hidden lg:block xl:block' alt='NutriCare illustration'></img>
          </div>
        </div>
      </div>
  )
}

export default Hero