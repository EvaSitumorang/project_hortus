import React from 'react'

const Navbar =() =>{
  return (
    <div className = 'bg-[#064635] h-28 w-full flex flex-row justify-between sticky top-0' >
        <div  className = 'flex flex-row ml-20' >
          <img src='https://www.hortusweb.com/img/Icon-daun.png' alt='' className='h-28'/>
          <div div className = 'text-white font-semibold pt-5' >
            <p className='text-3xl '>HORTUS</p>
            <p>gardening & plants</p>
          </div>
        </div>
        <div className = 'pt-9 flex text-white mr-14' >
          <img src='/logout.svg' className='h-7'/>
          <p>Logout</p>
        </div>
    </div>
  )
}

export default Navbar;