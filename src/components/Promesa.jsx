import { motion } from 'framer-motion';
import Prom from '../components/Prom.png';

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
            src={Prom}
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
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold py-2'>Promesa</h1>
            <ul className='list-disc list-inside text-xl'>
              <li>Investigaciones de los seguros dentales en menos de una hora</li>
              <li>Envio de los reclamos dentro de las 24 horas una vez recibida la inforamcion completa</li>
              <li>Claridad en el manejo de los seguros dentales</li>
              <li>En caso de que un Seguro no pague / o el paciente no entregue el pago correspondiente, nosotros tampoco recibimos pago</li>
              <li>Se podra observar en el sistema los cobros enviados y su estatus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

