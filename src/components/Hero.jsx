import React from 'react';
import Typed from 'react-typed';
import LQ from '../components/LQ.png';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../components/motion';


const Hero = () => {
  return (
    <div name='Hero' className='min-h-screen w-full'>
      <div className='text-white'>
        <div className='max-w-[800px] mt-20 mb-20 mx-auto text-center flex flex-col justify-center'>
          <p className='text-[rgb(57,94,153)] font-bold p-2'>
            Servicios de Cobranza de Seguros Americanos
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            LQ Services
          </h1>

          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              ¿Buscas incrementar tus
            </p>
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['Ingresos?', 'Clientes?']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            <motion.img
              variants={staggerContainer}
              src={LQ}
              alt='my profile'
              className='rounded-2xl mx-auto max-w-full md:w-2/3'
              animate={{
                y: [0, 20, 0],
                transition: { duration: 2, ease: 'easeInOut', repeat: Infinity }
              }}
            />
          </motion.div>
          <p className='md:text-xl text-lg font-bold text-gray-500 mt-4'>
            Maximice sus ingresos con nuestros servicios de cobranza de seguros dentales.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
