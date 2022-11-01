import React, { useState } from 'react'

const Inputfields=({type, placeholder, namee}) => {
    const [input, setInput] =useState('')
    const handleInput =(e) => {
        setInput(e.target.value)
    }
    return (
        <>
        <div className='flex flex-col'>
            <label className='md:text-sm text-xs text-black font-medium'>{namee}</label>
            <input type={type} placeholder={placeholder} onChange={handleInput} value={input} className="py-2 px-3 rounded-sm border-2 text-sm border-gray-300 mt-1 bg-white focus:outline-none"/>
        </div>

        </>
    )
}

export default Inputfields