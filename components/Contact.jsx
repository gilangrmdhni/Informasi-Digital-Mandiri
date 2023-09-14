import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1240px] m-auto grid grid-cols-2 justify-center gap-8 p-8 mt-10'>
      {/* Judul */}
      <div className="col-span-2 text-right">
        <h1 className="text-white text-3xl font-semibold mb-5">C O N T A C T  U S</h1>
        <hr className="border-t-1 border-sky-600 w-full mx-auto" />
      </div>

      {/* Kolom Kiri (Teks) */}
      <div className="col-span-1 mt-18">
      </div>

      {/* Kolom Kanan (Gambar) */}
      <div className="col-span-1 flex justify-center items-center">
        <img src="/contacts.png" alt="Gambar" className="w-auto h-auto" />
      </div>
      <div className="col-span-2 text-left items-center grid gap-2 mt-20 sm:mt-0 sm:grid-cols-auto-1 md:grid-cols-auto-2 xl:grid-cols-auto-3">
        <h1 className="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          ptidm.mth@gmail.com
        </h1>
      </div>

    </div>
  );
};

export default Contact;
