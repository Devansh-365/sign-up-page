import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import H1 from '../../components/Heading/H1';

type UserPhoneNumProps = {
    
};

const UserPhoneNum:React.FC<UserPhoneNumProps> = () => {

    const [value, setValue] = useState()
    const [checked, setChecked] = useState(false);
    
    return (
        <div className='ml-16 md:ml-24 m-24 w-3/4 md:w-1/2 space-y-8'>
            <H1 title='Your mobile number?' />
            <div className='bg-[#F4F4F5] max-w-[300px] rounded-md shadow-lg flex justify-evenly'>
            <PhoneInput
                className=' font-semibold outline-none p-2'
                international
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={value}
                onChange={() => setValue(value)}/>
            </div>
            <div className="md:flex md:items-center mt-6 w-2/3">
                <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox"/>
                <span className="text-sm">
                    By checking you confirm that you accept our Terms and conditions and have read our Privacy Policy.
                </span>
                </label>
            </div>
        </div>
    )
}
export default UserPhoneNum;