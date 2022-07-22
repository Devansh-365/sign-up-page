import Image from 'next/image';
import React from 'react';

type NavbarProps = {
    href: string
};

const Navbar:React.FC<NavbarProps> = ({href}) => {
    
    return (
        <div className='top-0 right-2 absolute m-4'>
            <a href={href} className="p-2 rounded-full bg-black text-white aspect-square px-3 cursor-pointer">{`>`}</a>
        </div>
    )
}
export default Navbar;



