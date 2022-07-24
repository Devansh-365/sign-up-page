import React from 'react';
import Footer from '../Footer';
import H1 from '../Heading/H1';

type UserNameProps = {
    values: any,
    handleChange: any,
};

const gender = ["male","female"]

const UserName:React.FC<UserNameProps> = ({values, handleChange}) => {
    console.log(values, handleChange)
    return (
        <>
            <div className='ml-16 md:ml-24 w-1/2 space-y-6 z-10 absolute'>
                <H1 title="What should we call you?" />
                <input type="text" className='bg-light-gray text-semibold p-2 rounded-md shadow-lg pr-14 mb-5'
                defaultValue={values.name}
                placeholder="Enter your name"
                onChange={handleChange("name")} />
                <H1 title='Gender' />
                <div className='flex space-x-5'>
                    {gender.map((item) => (
                        <button
                        key={item}
                        onClick={() => values.gender = item}  
                        className='w-16 h-16 bg-gray-100 rounded-md shadow-md cursor-pointer'>f</button>
                    ))}
                </div>
            </div>           
        </>
    )
}
export default UserName;