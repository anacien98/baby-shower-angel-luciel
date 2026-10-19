import React from 'react';

export const Presentacion = ({ currentUser }) => {
return (

    <section className="w-full h-[852px] relative font-informacion">


    <div className="absolute top-[80px] left-[30px] right-[30px] text-center space-y-4">

        <p className="text-xl leading-relaxed font-mensaje text-[#658497]">
        “Los pies más pequeños hacen las huellas más grandes en nuestros corazones.”
        </p>

        <div className="w-70 h-[2px] bg-gradient-to-r from-transparent via-[#658497]/50 to-transparent my-6 mx-auto" />
        
        <div className="mt-18">
        <p className="text-[#658497] font-baby text-2xl pt-2">
            Acompaña a mis papás:
        </p>

        <p className="text-[#658497] font-titulo text-7xl flex flex-col mt-15">
            Lucia
            <span className="-mt-3">
                y Angel
            </span>
        </p>
        </div>


        <div className="flex flex-col items-center justify-center space-y-2 pt-4 mt-30">
        <span className="icon-[streamline-plump--stroller-solid] text-4xl text-[#658497] block" />

        <p className="text-[#658497] font-nombre text-5xl mt-3">
            ¡A celebrar mi llegada!
        </p>
        </div>
    </div>


    </section>
    );
};