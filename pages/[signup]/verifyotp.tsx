import React from 'react';
import Footer from '../../components/Footer';
import H1 from '../../components/Heading/H1';
import Navbar from '../../components/Navbar';
import OtpForm from '../../components/OtpForm';

type VerifyOtpProps = {
    
};

const VerifyOtp:React.FC<VerifyOtpProps> = () => {
    
    return (
        <>
        <Navbar href="/" />
        <div className='m-24 w-1/2 space-y-2'>
            <H1 title='Enter Otp' />
            <OtpForm />
            <a className="font-semibold underline border-red solid text-[#6776F]">Resend the otp</a>
        </div>
        <Footer width={568} img="/img/avatar2.png" />
        </>
    )
}
export default VerifyOtp;