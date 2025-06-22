import React, { useState, useEffect } from 'react'
import { Flame, Footprints, TimerReset } from 'lucide-react'

const iconMap = {
    flame: <Flame className='text-red-500 w-6 h-6' />,
    footprints: <Footprints className='text-blue-500 w-6 h-6' />,
    "timer-reset": <TimerReset className='text-green-500 w-6 h-6' />,
}

const StatCard = ({ label, value, unit, iconName }) => {

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const increment = value / (duration / 20);
        const counter = setInterval(() => {
            start += increment;
            if(start >= value){
                setDisplayValue(value);
                clearInterval(counter);
            }else{
                setDisplayValue(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(counter);
    }, [value]);

    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-600 shadow-md p-5 rounded-lg flex items-center gap-4 transform transition-transform hover:scale-[1.02]">
            <div className='p-3 bg-white/10 rounded-full'>
                {iconMap[iconName] || <span>❓</span>}</div>
            <div>
                <p className='text-sm text-gray-300'>{label}</p>
                <p className='text-2xl font-bold '>{displayValue} {unit}</p>
            </div>
        </div>
    )
}

export default StatCard