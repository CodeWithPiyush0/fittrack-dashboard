import React, { useState } from 'react'

const ToggleView = ({ onChange }) => {

    const [active, setActive] = useState('Daily');

    const handleClick = (view) => {
        setActive(view);
        onChange(view);
    }

    const views = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className='flex gap-3 mb-4'>
        {views.map((view) => (
            <button key={view} onClick={() => handleClick(view)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === view ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>{view}</button>
        ))}
    </div>
  )
}

export default ToggleView