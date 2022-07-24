import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Stepper from '../../components/Stepper/Stepper';
import UserName from '../../components/steps/UserName';
import UserOccupation from '../../components/steps/UserOccupation';
import UserPreference from '../../components/steps/UserPreference';
import toast from 'react-hot-toast';
import Navbar from '../../components/Navbar';
import UserPhoneNum from '../../components/steps/UserPhoneNum';
import VerifyPhoneNum from '../../components/steps/VerifyPhoneNum';

type userstepformProps = {
    
};

const userstepform:React.FC<userstepformProps> = () => {

    // Steps
    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () => {
        return ["UserName", "UserPreference", "UserOccupation"]
    }

    // State variables

    const [multiFormValues, setMultiFormValues] = useState({
        name: "",
        gender: "",
        email: "",
        preferred_city: "",
        roles: [],
        experience: ""
    })

    // Posts the data to a REST API

    let handleSubmit = async () => {
        try {
          let res = await fetch("https://api.fastjobs.io/frontendtask", {
            method: "POST",
            body: JSON.stringify({multiFormValues}),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            console.log("lets go")
            toast("User created successfully");
          } else {
            toast("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    //Navigates to the next page
    const handleNext = () => {
        toast("User created successfully");
        setActiveStep((nextStep) => nextStep + 1)
    }
    
    //Navigates to the Previous page
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1)
    }

    //Handle form value state on change
    const handleChange = (input: any) => (e: any) => {
        setMultiFormValues({...multiFormValues, [input]: e.target.value})
    }

    console.log(handleNext)

    return (
        <>
        <div className=''>
            <Navbar handleNext ={ activeStep=== 4 ? handleSubmit : handleNext} handleBack={activeStep=== 0 ? () => {} : handleBack} />
            {activeStep > 1 && (
                <Stepper activeStepIndex={activeStep} />
            )}
            {activeStep === 0 && (
                <>
                <UserPhoneNum />
                <Footer img="/img/avatar3.png" width={358} />
                </>
            )}
            {activeStep === 1 && (
                <>
                <VerifyPhoneNum />
                <Footer img="/img/avatar3.png" width={358} />
                </>
            )}
            {activeStep === 2 && (
                <>
                <UserName 
                values={multiFormValues} handleChange={handleChange} />
                <Footer img="/img/avatar3.png" width={358} />
                </>
            )}
            {activeStep === 3 && (
                <UserPreference 
                values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep === 4 && (
                <>
                <UserOccupation 
                values={multiFormValues} handleChange={handleChange} />
                <Footer img="/img/avatar5.png" width={500} />
                </>
            )}
        </div>
        </>
    )
}
export default userstepform;