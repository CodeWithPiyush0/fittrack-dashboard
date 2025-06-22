import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import profie from '../assets/profile.png'

const Header = () => {
    const user = {
        name: 'Piyush Kumar',
        role: 'Frontend Developer Intern',
        avatarUrl: profie,
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 shadow-md">
            <div className="hidden md:flex justify-between items-center">
                <div className="flex items-center gap-2 flex-1">
                    <Dumbbell size={28} />
                    <h1 className="text-xl md:text-2xl font-bold">FitTrack</h1>
                </div>

                <nav className="flex gap-6 text-md font-medium justify-center flex-1">
                    <a href="#goals" className="px-2 py-1 rounded hover:bg-white/10 hover:underline transition">Goals</a>
                    <a href="#dashboard" className="px-2 py-1 rounded hover:bg-white/10 hover:underline transition">Dashboard</a>
                    <a href="#logs" className="px-2 py-1 rounded hover:bg-white/10 hover:underline transition">Logs</a>
                </nav>

                <div className="flex justify-end items-center flex-1">
                    <img
                        src={user.avatarUrl}
                        alt="User Avatar"
                        title={`${user.name} - ${user.role}`}
                        className="hidden md:block w-10 h-10 rounded-full object-cover border-2 border-white shadow-md cursor-pointer hover:scale-105 transition"
                    />
                </div>
            </div>

            <div className="flex md:hidden justify-between items-center">
                <div className="flex items-center gap-2">
                    <Dumbbell size={24} />
                    <h1 className="text-xl font-bold">FitTrack</h1>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-3 space-y-2 text-sm font-medium">
                    <a href="#goals" className="block hover:underline" onClick={() => setMenuOpen(false)}>Goals</a>
                    <a href="#dashboard" className="block hover:underline" onClick={() => setMenuOpen(false)}>Dashboard</a>
                    <a href="#logs" className="block hover:underline" onClick={() => setMenuOpen(false)}>Logs</a>
                </div>
            )}

        </header>
    )
}

export default Header