import React from 'react';

const Portfolio = () => {
    return (
        <div id='portfolio' className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
            {/* Judul */}
            <div className="text-right">
                <h1 className="text-white text-3xl font-semibold mb-5">P O R T F O L I O</h1>
                <hr className="border-t-1 border-sky-600 w-full mx-auto" />
            </div>

            {/* Grid untuk Teks dan Gambar */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kolom Kiri (Teks) */}
                <div className="text-white">
                    <h2 className="text-2xl font-semibold">Standardize IoT Gateway using MQTT</h2>
                    <p className="py-5">
                        As Growth of IoT Business trends nowadays, our team members build a new way of IoT Device integration with new model / methodology, while the normal way need normalize its protocols first in each of device, with our solution any device can connect to central / service gateway without normalize any protocols previously.
                    </p>
                    <h2 className="text-2xl font-semibold mt-5">Advance SMPP asynchronous</h2>
                    <p className="py-5">
                        With switch trend from P to P SMS to become A to P SMS, this area growth and required more advance solution, in terms of service and agile delivery. Facebook, Whatapps and up to domestic Partner require an Agile SMS platform with high throughput and High continuity integration. We offer new models of SMPP method, with custom solution by adopt async process instead of normal way (sync process), this is give solution to overcome High latency issue
                    </p>
                </div>

                {/* Kolom Kanan (Gambar) */}
                <div className="flex justify-center items-center">
                    <img src="/portofolio.png" alt="Gambar" className="w-full md:max-w-md h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
