import React, { useEffect } from 'react';

type StepperProps = {
    activeStepIndex: number,
};

const Stepper:React.FC<StepperProps> = ({activeStepIndex}) => {

    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-item");
        stepperItems.forEach((step, i) => {
          if (i <= activeStepIndex) {
            step.classList.add("bg-indigo-500", "text-white");
          } else {
            step.classList.remove("bg-indigo-500", "text-white");
          }
        });
      }, [activeStepIndex]);
    
    return (
      <div className='w-1/3 md:w-1/6 ml-16 md:ml-24 mt-24'>
        <h3 className=' font-normal text-sm text-[#6776FF] mb-3'>Help us know you better!</h3>
        <div className="flex flex-row items-center justify-center pb-6">
            <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
                1
            </div>
            <div className="flex-auto border-t-2"></div>
            <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
                2
            </div>
            <div className="flex-auto border-t-2"></div>
            <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
                3
            </div>
        </div>
        </div>
    )
}
export default Stepper;