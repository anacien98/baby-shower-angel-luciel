import React, { useState } from 'react';
import usersData from '../data/invitados.json';

export const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = usersData.find(
            (u) =>
                u.usuario?.trim().toLowerCase() === username.trim().toLowerCase() &&
                String(u.clave) === String(password)
        );

        if (user) {
            setError('');
            localStorage.setItem('guestUser', JSON.stringify(user));
            onLoginSuccess(user);
        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#C6DCE8] p-4">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-light text-[#556670] tracking-[15px] mb-2 font-baby">
                    baby shower
                </h1>
                <p className="text-5xl text-[#658497] font-nombre flex flex-col">
                    <span>Angel</span>
                    <span className="-mt-2">Luciel</span>
                </p>
            </div>

            <div className="bg-[#FFFDF6] p-8 rounded-2xl shadow-xl w-full max-w-md border border-stone-200">
                <p className="text-sm text-stone-500 text-center mb-4 font-informacion">
                    Ingresa tus datos para ver tu invitación
                </p>

                {/* Mensaje de error */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-xs text-center p-3 rounded-lg mb-4 font-informacion">
                        {error}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4 font-informacion">
                    <div>
                        <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                            Usuario
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ej: INV001"
                            className="w-full px-4 py-3 rounded-3xl bg-[#E6E0C9] focus:outline-none focus:ring-2 focus:ring-[#658497]/50 text-stone-700 transition-all text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-3xl bg-[#E6E0C9] focus:outline-none focus:ring-2 focus:ring-[#658497]/50 text-stone-700 transition-all text-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#658497] hover:bg-[#455966] text-white font-medium rounded-xl shadow-md transition-all duration-200 text-sm tracking-wide mt-2 active:scale-95"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};