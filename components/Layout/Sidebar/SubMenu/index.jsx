import {IoIosArrowDown} from 'react-icons/io'
import React, {  useState } from 'react'
import Link from 'next/link'

function Menu({title, icon, route, SubMenus,}) {
const [open, setOpen] = useState(false)
  return (
    <div>
      <Link href={route ? route : "/"}>
      <a className="mt-1 mb-1 flex justify-between pt-2 py-2 bg-white hover:bg-[#064635] text-[#064635] hover:text-white" onClick={() => setOpen(!open)}>
        <div className='flex'>
          <div className="text-2xl ml-2">{icon}</div>
          <span className='ml-4'>{title}</span>
        </div>
        <div className='mr-3'>
          {SubMenus && <IoIosArrowDown className={`${open && 'rotate-180'}`}/>}
        </div>
      </a>
      </Link>

      {open && SubMenus && (
        <div className="">
          {SubMenus.map((subMenu, index) => (
            <Link href={subMenu.route}>
              <a className="mt-1 mb-1 ml-6 mr-5 pt-2 py-2 bg-white hover:bg-[#064635] text-[#064635] hover:text-white rounded-md flex" key={index}>
                <div className="text-2xl ml-4">{subMenu.icon}</div>
                <div className="ml-2">{subMenu.title}</div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu