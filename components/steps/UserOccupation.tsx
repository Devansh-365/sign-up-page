import React from 'react';
import H1 from '../Heading/H1';

type UserOccupationProps = {
    values: any,
    handleChange: any,
};

const yearWorkExpList = ["Fresher","1-3 years","3-6 years","6+ years"]
const rolesList = ["Frontend Developer","UI Engineer","Web Developer"]

const UserOccupation:React.FC<UserOccupationProps> = ({values, handleChange}) => {
    console.log(values)
    return (
        <>
        <div className='ml-16 md:ml-24 w-1/2 space-y-6 z-10 absolute'>
          <H1 title="Role you are looking for?" />  
          <select
           value={values.roles}
           onChange={(e) => values.roles.push(e.target.value)}
           className="select select-primary max-w-xs text-semibold p-2 rounded-md shadow-lg pr-14 mb-5 bg-light-gray">
                <option disabled selected>Eg. Web Developer</option>
                <option>Web Developer</option>
                <option>Frontend Developer</option>
                <option>UI Developer</option>
                <option>UI Engineer</option>
           </select>
           <div>
            <h3 className='font-semibold text-sm mb-1'>Trending Roles :</h3>
            <div className='space-x-3 flex sm:w-1/2'>
            {rolesList.map((item) => (
                <button
                className='px-4 py-3 bg-white shadow-md rounded-md text-[#6776FF] font-semibold text-sm text-center transition duration-150 ease-in-out'>{item}</button>
            ))}
            </div>
           </div>
           <H1 title="How many years of work experience" />
           <div className='space-x-3 flex'>
           {yearWorkExpList.map((item) => (
            <button
            key={item}
            onClick={() => values.experience = item} 
            onChange = {() => values.experience = ""}
            className='px-3 py-2 bg-white shadow-md rounded-md text-[#6776FF] font-semibold text-sm text-center focus:bg-[#6776FF] focus:text-white transition duration-150 ease-in-out'>{item}</button>
           ))}
           </div>
        </div>
        </>
    )
}
export default UserOccupation;