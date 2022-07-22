import React from 'react';

type H1Props = {
    title: string;
};

const H1:React.FC<H1Props> = ({title}) => {
    
    return (
        <h2 className='font-semibold  text-2xl mb-1'>
            {title}
        </h2>
    )
}
export default H1;