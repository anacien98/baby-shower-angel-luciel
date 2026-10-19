import React from 'react';

export const Confirmacion = ({ currentUser }) => {

    const pases = currentUser?.pases ? parseInt(currentUser.pases, 10) : 1;
    const telefonoWhatsApp = '526692162138';

    const mensaje = encodeURIComponent(`¡Hola! Confirmo asistencia de ${pases} pase(s)`);
    const enlaceWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;
    
    return (
    <section className="w-full h-[852px] relative font-informacion">


    <div className="absolute top-[80px] left-0 right-0 w-full flex flex-col items-center justify-center space-y-4 px-6 text-center">
    <div className="mt-8">
        <span className="icon-[boxicons--gift-filled] text-5xl text-[#658497] inline-block mx-auto" />
        <p className="text-[#658497] font-titulo text-5xl flex flex-col leading-tight -mt-5">
            <span>Mesa de</span>
            <span className="-mt-5">Regalos</span>
        </p>
        <a 
            href="https://www.amazon.com.mx/baby-reg/lucia-osuna-diciembre-2026-mazatlan/2PL7LX79IHJ4C?ref_=cm_sw_r_apann_dp_K7BN8FMC5P6W5M4P7XH5&language=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#658497] mt-9 inline-block p-3 w-[220px] text-2xl rounded-4xl text-white hover:bg-[#455966] shadow-md transition-all duration-200  tracking-wide active:scale-95">
            Click Aquí
        </a>
    </div>

        <div className="mt-20">
            <span className="icon-[dashicons--yes] text-6xl text-[#658497] inline-block mx-auto"></span>
            <p className="font-baby text-2xl text-[#658497]">Ayudanos confirmando tu asistencia</p>

            <p className="text-[#556670] font-medium text-lg mt-4">
            {currentUser?.nombre ? `¡Hola ${currentUser.nombre}!` : '¡Hola!'}
            </p>
        
            <span className="bg-[#658497]/10 text-[#658497] font-semibold text-sm px-4 py-1.5 rounded-full mt-2 inline-block">
            Tienes {pases} {pases === 1 ? 'pase asignado' : 'pases asignados'}
            </span>

            <a 
            href={enlaceWhatsApp}
            rel="noopener noreferrer"
            className="bg-[#658497] mt-9 inline-block p-3 w-[220px] text-2xl rounded-4xl text-white hover:bg-[#455966] shadow-md transition-all duration-200  tracking-wide active:scale-95">
            Confirmación
        </a>
        </div>
    </div>



    </section>
    );
};