import React from 'react';

export const Despedida = ({ currentUser }) => {
return (

    <section className="w-full h-[852px] relative font-informacion">
    
    <div className="absolute top-[80px] left-[30px] right-[30px] text-center space-y-4">
        <p className="text-6xl text-[#658497] font-nombre flex flex-col mt-22">
            ¡Nos vemos
            <span>
                Pronto!
            </span>
        </p>

        <p className="font-cursiva text-5xl text-[#658497]">
            ¡Te esperamos!
        </p>

        <div className="w-full max-w-[250px] h-[321px] flex items-center justify-center my-auto">
            <img 
                src="src/assets/leon2.png" 
                alt="Baby Shower Luciel"
                className="absolute left-[25px] top-[350px] object-contain"
                style={{ width: '349px', height: 'auto' }}
            />
        </div>

    </div>

    </section>
    );
};