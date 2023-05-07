import React from 'react';

const Newsletter = () => {
  const handleNotifyMeClick = () => {
    const email = 'contacto.lqservices@gmail.com'; 
    const subject = 'Notify me';
    const body = 'Please notify me when the service is available';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            "Queremos ser tu socio en la gestion de cobranza de tus seguros dentales americanos"
          </h1>
          <p>Comunícate con nosotros</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button
              className='bg-[rgb(57,94,153)] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
              onClick={handleNotifyMeClick}
            >
              Enviar
            </button>
          </div>
          <p>Teléfono MX 662 251 8151 / US 520 455 3453.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
