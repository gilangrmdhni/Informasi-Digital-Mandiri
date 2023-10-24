import React from 'react';

const Service = () => {
  return (
    <div id='service' className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
      {/* Judul */}
      <div className="text-right">
        <h1 className="text-white text-3xl font-semibold mb-5">S E R V I C E S</h1>
        <hr className="border-t-1 border-sky-600 w-full mx-auto" />
      </div>

      {/* Grid untuk Teks dan Gambar */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri (Teks) */}
        <div className="text-white">
          <h2 className="text-2xl font-semibold">Consultancy</h2>
          <p className="py-5">
            As our tagline to be closest with our clients, we proposing a new different way of IT Consultancy. Not only put the mainstream jargon, but also we give more value to our clients. Hence, our clients has value in more area.
          </p>
          <h2 className="text-2xl font-semibold mt-5">System Design, Devops</h2>
          <p className="py-5">
            As our tagline to be closest with our clients, we proposing a new different way of IT Consultancy. Not only put the mainstream jargon, but also we give more value to our clients. Hence, our clients has value in more area.
          </p>
        </div>

        {/* Kolom Kanan (Gambar) */}
        <div className="flex justify-center items-center">
          <img src="/img-service.png" alt="Gambar" className="w-full md:max-w-md h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Service;
