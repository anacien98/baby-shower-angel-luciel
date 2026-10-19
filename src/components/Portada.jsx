import React from 'react';

export const Portada = ({ currentUser }) => {
  return (
    <section className="w-full h-[852px] flex flex-col justify-between items-center px-6 pt-10 pb-12 text-center relative">
      
    
      <div className="space-y-1 my-auto">
        <div className="text-center mb-6">
                <h1 className="text-3xl font-light text-[#556670] tracking-[15px] mb-2 font-baby">
                    baby shower
                </h1>
                <p className="text-8xl text-[#658497] font-nombre flex flex-col">
                    <span>Angel</span>
                    <span className="-mt-2">Luciel</span>
                </p>
            </div>
      </div>


      <div className="w-full max-w-[250px] h-[521px] flex items-center justify-center my-auto">
        <img 
          src="src/assets/leon1.png" 
          alt="Baby Shower Luciel"
          className="absolute left-[25px] top-[450px] object-contain"
          style={{ width: '349px', height: 'auto' }}
        />
      </div>

    </section>
  );
};