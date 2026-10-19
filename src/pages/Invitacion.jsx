import React, { useState, useEffect } from 'react';
import backgroundImg from '../assets/Background.jpg';
import { Portada } from '../components/Portada'; 
import { Presentacion } from '../components/Presentacion';
import { Informacion } from '../components/Informacion';
import { Confirmacion } from '../components/Confirmacion';
import { Despedida } from '../components/Despedida';
import { FadeInView } from '../components/FadeInView'; 

export const Invitacion = ({ currentUser, onLogout }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 393) {
        setScale(windowWidth / 393);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#C6DCE8] flex justify-center items-start overflow-x-hidden relative font-informacion text-stone-700">
      
      <button
        onClick={onLogout}
        className="fixed top-4 right-4 z-50 bg-[#FFFDF6]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-[#556670] shadow-md border border-stone-200 active:scale-95 transition-all"
      >
        Salir
      </button>

      <div 
        style={{ 
          width: '393px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          marginBottom: scale < 1 ? `-${(1 - scale) * 4255}px` : '0px'
        }}
        className="transition-transform duration-100 ease-out"
      >
        <main 
          className="w-[393px] min-h-[4255px] relative bg-top bg-no-repeat bg-[length:100%_auto] shadow-lg"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          
          <FadeInView>
          <Portada currentUser={currentUser} />
          </FadeInView>
    

          <FadeInView>
            <Presentacion currentUser={currentUser} />
          </FadeInView>

          <FadeInView>
            <Informacion currentUser={currentUser} />
          </FadeInView>

          <FadeInView>
            <Confirmacion currentUser={currentUser} />
          </FadeInView>

          <FadeInView>
            <Despedida currentUser={currentUser} />
          </FadeInView>
        </main>
      </div>

    </div>
  );
};