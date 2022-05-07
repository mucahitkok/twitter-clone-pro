import React from 'react'
import Link from 'next/link'

export const SidebarLink = ({ name, Icon, active, handleActiveLink }) => {
    const isActive = active === name
    const linkParam = name === 'Home' ? '/' : name.toLowerCase()
    return (
        <li className='group mb-2 cursor-pointer' onClick={() => handleActiveLink(name)} >
            <Link href={linkParam} className='block rounded-full ' >
                <div className='inline-block'>
                    <div className={`flex items-center group-hover:bg-gray-extraLight group-hover:text-primary-base rounded-full py-3 pl-2 pr-3 md:pr-5 ${isActive && 'text-primary-base'}`}>
                        <span >
                            <Icon className='w-8 h-8' />
                        </span>
                        <span className='hidden md:inline font-normal text-xl ml-3'>
                            {name}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

