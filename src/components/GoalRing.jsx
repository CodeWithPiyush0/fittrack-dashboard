import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const GoalRing = ({ label, value, goal, color, Icon }) => {

    const [animatedPercent, setAnimatedPercent] = useState(0);
    const percentage = Math.min((value / goal) * 100, 100);

    useEffect(() => {
        let start = 0;
        const step = () => {
            start += 2;
            if(start <= percentage){
                setAnimatedPercent(start);
                requestAnimationFrame(step);
            } else{
                setAnimatedPercent(percentage);
            }
        };
        requestAnimationFrame(step);
    }, [percentage]);

    return (
        <div className='bg-gradient-to-br from-slate-800 to-slate-600 shadow-md p-5 rounded-lg w-full max-w-[10rem] aspect-square flex flex-col items-center justify-center gap-2 transform transition-transform hover:scale-[1.02]'>
            <div className='w-24 h-24'>
                <CircularProgressbar
                    value={animatedPercent} text={`${Math.round(animatedPercent)}%`} styles={buildStyles({
                        textColor: 'white',
                        pathColor: color,
                        trailColor: '#2d3748',
                    })}
                />
            </div>
            <div className='text-center flex flex-col items-center'>
                {Icon && <Icon size={18} className="text-gray-300 mb-1" />}
                <p className='text-sm text-gray-400'>{label}</p>
                <p className='text-sm'>{value} / {goal}</p>
            </div>
        </div>
    )
}

export default GoalRing