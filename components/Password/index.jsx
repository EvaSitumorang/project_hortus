import React, { useState } from 'react'
import {ImEyeBlocked, ImEye} from 'react-icons/im'

const Password=({placeholder, namee})=> {
    const [input, setInput] =useState('')
    const [open, setOpen] = useState(false)
    const handleInput =(e) => {
        setInput(e.target.value)
    }
    const toggle = () => {
        setOpen(!open)
    }
  return (
    <div className='relative'>
        <div className='flex flex-col'>
            <label className='md:text-sm text-xs text-black font-medium'>{namee}</label>
            <input type={(open===false)? 'password' : 'text'} placeholder={placeholder} onChange={handleInput} value={input} className="py-2 px-3 rounded-sm border-2 text-sm border-gray-300 mt-1 bg-white focus:outline-none"/>
        </div>
        <div className='text-2xl absolute top-8 right-3'>
            {
                (open===false)? <ImEye onClick={toggle}/> : <ImEyeBlocked onClick={toggle}/>
            }
        </div>
    </div>
  )
}

export default Password