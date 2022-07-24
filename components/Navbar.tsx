import Image from 'next/image';
import React from 'react';

type NavbarProps = {
    handleNext: () => void,
    handleBack: () => void,
};

const Navbar:React.FC<NavbarProps> = ({handleNext, handleBack}) => {
    
    return (
        <div className='top-0 right-0 md:right-16 mt-20 mr-16 md:m-24 absolute space-x-6'>
            <button onClick={handleBack} className="p-2 rounded-full bg-black text-white aspect-square px-3 cursor-pointer">{`<`}</button>
            <button onClick={handleNext} className="p-2 rounded-full bg-black text-white aspect-square px-3 cursor-pointer">{`>`}</button>
        </div>
    )
}
export default Navbar;



