import React, { useState } from 'react';

type OTPProps = {
    
};

const OTP:React.FC<OTPProps> = () => {
    
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  return (
    <div className="flex space-x-2">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="number"
              className="w-12 h-12 border-2 rounded bg-light-gray outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
            />
          </React.Fragment>
        );
      })}
    </div>
  )
}
export default OTP