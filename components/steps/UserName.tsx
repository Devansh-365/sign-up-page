import React from 'react';
import Footer from '../Footer';
import H1 from '../Heading/H1';

type UserNameProps = {
    values: any,
    handleChange: any,
};

const UserName:React.FC<UserNameProps> = ({values, handleChange}) => {
    console.log(values.gender, handleChange)
    return (
        <>
            <div className='m-24 w-1/2 space-y-6'>
                <H1 title="What should we call you?" />
                <input type="text" className='bg-light-gray text-semibold p-2 rounded-md shadow-lg px-10 mb-5'
                defaultValue={values.name}
                onChange={handleChange("name")} />
                <H1 title='Gender' />
                <div className='flex space-x-5'>
                    <option 
                    defaultValue="male"
                    onClick={values.gender}
                    onChange={handleChange("gender")} className='w-16 h-16 bg-gray-100 rounded-md shadow-md cursor-pointer'>s</option>
                    <option
                    value={values.gender = "female"}
                    onChange={handleChange("gender")}
                    className='w-16 h-16 bg-gray-100 rounded-md shadow-md cursor-pointer'>a</option>
                </div>
            </div>
            <Footer img="/img/avatar3.png" width={358} />
        </>
    )
}
export default UserName;