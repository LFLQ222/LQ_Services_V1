import React from 'react';
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Análisis Confidencial de Viabilidad de Beneficios de Pacientes</h2>
                <p className='text-center text-4xl font-bold'>1</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Identificamos que los pacientes cuenten con aseguranza y con cobertura de los servicios ofrecidos por la clínica.</p>
                    
                </div>
                
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Gestión Personalizada de Cobranza con Aseguradoras</h2>
                <p className='text-center text-4xl font-bold'>2</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>LQ Services se asegura que las Clínicas cumplan con todos los requisitos que se necesita para el trámite de los cobros.</p>
                    
                </div>
                
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Asesoría en Cobranza con Pacientes</h2>
                <p className='text-center text-4xl font-bold'>3</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Te llevamos de la mano para poder generar los registros correctos para el éxito de tu cobranza americana, validando la información de soporte de los reclamos</p>
                    
                </div>
                
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Plataforma GCDental de Gestión de Pacientes</h2>
                <p className='text-center text-4xl font-bold'>4</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Tendrás acceso a una plataforma con la mayor seguridad en datos e información de pacientes, agenda y alertas de cobranza, médicas y personalizadas.</p>
                    
                </div>
                
            </div>
        </div>
      </div>
    );
  };
  
  export default Cards;