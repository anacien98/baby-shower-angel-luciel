import React from 'react';

export const DesktopBlock = () => {
  return (
    <div className="min-h-screen w-full bg-[#C6DCE8] flex items-center justify-center p-4 font-informacion">
      <div className="bg-[#FFFDF6] p-8 rounded-2xl shadow-xl text-center max-w-xs border border-stone-200 space-y-4">
        <div className="w-16 h-16 bg-[#658497]/10 text-[#658497] rounded-full flex items-center justify-center mx-auto text-3xl">
          📱
        </div>

        <h2 className="text-2xl font-nombre text-[#658497]">
          Experiencia Móvil
        </h2>

        <p className="text-stone-600 text-xs leading-relaxed">
          Esta invitación fue diseñada exclusivamente para disfrutarse desde tu teléfono celular.
        </p>

        <p className="text-[10px] text-stone-400 pt-2 border-t border-stone-100">
          Por favor, abre el enlace desde tu smartphone.
        </p>
      </div>
    </div>
  );
};