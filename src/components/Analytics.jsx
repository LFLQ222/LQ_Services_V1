import { motion } from 'framer-motion';
import bene1 from '../components/bene1.png';

const imageVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, 20, 0],
    transition: { duration: 2, ease: 'easeInOut', repeat: Infinity }
  }
};

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={bene1}
            alt='Laptop'
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div>
        <div className='flex flex-col justify-center'>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold py-2'>Beneficios</h1>
            <ul className='list-disc list-inside text-xl'>
              <li>Incremento de ingresos</li>
              <li>Incremento de pacientes</li>
              <li>Crecimiento de la clínica en general</li>
              <li>Acompañamiento de nuestros expertos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

