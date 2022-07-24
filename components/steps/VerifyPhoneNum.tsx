import React from 'react';
import H1 from '../Heading/H1';
import OtpForm from '../OtpForm';

type VerifyPhoneNumProps = {
    
};

const VerifyPhoneNum:React.FC<VerifyPhoneNumProps> = () => {
    
    return (
        <>
        <div className='ml-16 md:ml-24 m-24 w-1/2 space-y-2'>
            <H1 title='Enter Otp' />
            <OtpForm />
            <a className="font-semibold underline border-red solid text-[#6776F]">Resend the otp</a>
        </div>
        </>
    )
}
export default VerifyPhoneNum;