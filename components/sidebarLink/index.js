import React from 'react'

export const SidebarLink = ({ name, Icon, active, handleActiveLink }) => {
    const isActive = active === name
    return (
        <li className='group mb-2' onClick={() => handleActiveLink(name)} >
            <a href={name.toLowerCase()} className='block  rounded-full ' >
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
            </a>
        </li>
    )
}

