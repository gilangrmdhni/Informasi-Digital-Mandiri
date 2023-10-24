import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1240px] m-auto grid grid-cols-2 justify-center gap-8 p-8 mt-10'>
      {/* Judul */}
      <div className="col-span-2 text-right">
        <h1 className="text-white text-3xl font-semibold mb-5">C O N T A C T &ensp; U S</h1>
        <hr className="border-t-1 border-sky-600 w-full mx-auto" />
      </div>

      {/* Kolom Kiri (Teks) */}
      <div className="col-span-1 mt-18">
      </div>

      {/* Kolom Kanan (Gambar) */}
      <div className="col-span-1 flex justify-center items-center">
        <img src="/contacts.png" alt="Gambar" className="w-auto h-auto" />
      </div>

      {/* Kolom Kiri Bawah (Alamat dan Email) */}
      <div className="col-span-2 mt-5">
        <div className="grid gap-2 sm:grid-cols-auto-1 md:grid-cols-auto-2 xl:grid-cols-auto-3">
          <div className="flex items-center text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <img src="/gmaill.png" alt="Gmail Icon" className="w-6 h-6 mr-2" />
            <p>ptidm.mth@gmail.com</p>
          </div>
          <div className="flex items-center text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <img src="/location.png" alt="Location Icon" className="w-6 h-6 mr-2" />
            <p>Jl. Tebet Barat 13 No.3B, Tebet, Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
