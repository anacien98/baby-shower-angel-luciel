import React from 'react';

export const Informacion = ({ currentUser }) => {
return (

    <section className="w-full h-[852px] relative font-informacion">
    
    <div className="absolute top-[80px] left-[30px] right-[30px] text-center space-y-4">
        <p className="font-titulo text-5xl text-[#658497]">Información</p>

        <div className="flex flex-col items-center justify-center space-y-2 pt-4 mt-10 ">
            <div className="mt-4">
                <span className="icon-[clarity--date-solid] text-4xl text-[#658497] nline-block mx-auto"> </span>
                <p className="font-baby tracking-[10px]">fecha</p>
                <p className="font-informacion text-4xl  text-[#556670]">15 nov 26</p>
            </div>
            
            <div className="mt-9">
                <span className="icon-[tabler--clock-hour-1-filled] text-4xl text-[#658497] nline-block mx-auto"> </span>
                <p className="font-baby tracking-[10px]">horario</p>
                <p className="font-informacion text-4xl text-[#556670]">4:00 pm</p>
            </div>

            <div className="mt-9">
                <span className="icon-[bxs--map] text-4xl text-[#658497] inline-block mx-auto"> </span>
                <p className="font-baby tracking-[10px]">ubicación</p>
                <p className="font-informacion text-4xl  text-[#556670]">Salon Dubai</p>
                <a 
                    href="https://share.google/OoW8Tre0zZtEVhuq7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#658497] mt-9 inline-block p-3 w-[220px] text-2xl rounded-4xl text-white hover:bg-[#455966] shadow-md transition-all duration-200  tracking-wide active:scale-95">
                    Ver Ubicación
                </a>
            </div>

        </div>
    </div>

    </section>
    );
};