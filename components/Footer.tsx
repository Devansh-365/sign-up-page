import Image from 'next/image';
import React from 'react';

type FooterProps = {
    img: string,
    width: number,
};

const Footer:React.FC<FooterProps> = ({img, width}) => {
    
    return (
        <footer className="bg-footer-pattern bg-cover w-full h-[202px] lg:h-[600px] absolute left--6 bottom-0 flex justify-center">
            {/* Avatar */}
            <Image width={width} height={252} src={img} alt="" className=''/>

        </footer>
    )
}
export default Footer;