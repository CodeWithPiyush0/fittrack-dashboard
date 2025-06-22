import React, { useState, useEffect } from 'react'
import { ArrowUpCircle } from 'lucide-react'

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisiblity = () => {
            setVisible(window.scrollY > 300);
        }

        window.addEventListener('scroll', toggleVisiblity);
        return () => window.removeEventListener('scroll', toggleVisiblity);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } 

    if(!visible) return null;

  return (
    <button
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700'
    >
        <ArrowUpCircle size={24} />
    </button>
  )
}

export default ScrollToTop