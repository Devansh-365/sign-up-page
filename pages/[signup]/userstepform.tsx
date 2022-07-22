import React, { useState } from 'react';
import UserName from '../../components/steps/UserName';
import UserOccupation from '../../components/steps/UserOccupation';
import UserPreference from '../../components/steps/UserPreference';


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

    //Navigates to the next page
    const handleNext = () => {
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

    return (
        <div>
            {activeStep === 0 && (
                <UserName 
                values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep === 1 && (
                <UserPreference 
                values={multiFormValues} handleChange={handleChange} />
            )}
            {activeStep === 2 && (
                <UserOccupation 
                values={multiFormValues} handleChange={handleChange} />
            )}
        </div>
    )
}
export default userstepform;