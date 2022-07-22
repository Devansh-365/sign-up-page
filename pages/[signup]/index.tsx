import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Navbar';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Navbar from '../../components/Navbar';
import H1 from '../../components/Heading/H1';


type indexProps = {
    
};

const index:React.FC<indexProps> = () => {

    const [value, setValue] = useState()
    const [checked, setChecked] = React.useState(false);
    
    return (
        <>
        <Navbar href='/signup/verifyotp' />
        <div className='m-24 w-1/2'>
            <H1 title='Your mobile number?' />
            <div className='bg-[#F4F4F5] max-w-[300px] rounded-md shadow-lg flex justify-evenly'>
            <PhoneInput
                className='h-12 font-semibold outline-none'
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={value}
                onChange={() => setValue(value)}/>
            </div>
            <div className='mt-4 flex items-center'>
            <label className='font-semibold'>
                <input type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                    className="bg-[#F4F4F5] w-5 h-5 rounded shadow-md mr-4"
                />
                By checking you confirm that you accept our Terms and conditions and have read our Privacy Policy.
            </label>
            </div>
        </div>
        <Footer img="/img/avatar3.png" width={358} />
        </>
    )
}
export default index;