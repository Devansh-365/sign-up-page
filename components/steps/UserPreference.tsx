import React from 'react';
import Footer from '../Footer';
import H1 from '../Heading/H1';

type UserPreferenceProps = {
    values: any,
    handleChange: any,
};

const cityList = ["Mumbai", "Bengaluru","Delhi","Pune"]

const UserPreference:React.FC<UserPreferenceProps> = ({values, handleChange}) => {
    console.log(values)
    return (
        <>
        <div className='ml-16 md:ml-24 w-1/2 space-y-6 z-10 absolute'>
            <H1 title="Where can we reach you?" />
            <input type="text" className='bg-light-gray text-semibold p-2 rounded-md shadow-lg pr-14 mb-5'
                placeholder='Enter your email address'
                defaultValue={values.email}
                onChange={handleChange("email")} />
            <H1 title="Prefered city to work?" />
            <select 
            value={values.preferred_city}
            onChange={(e) => values.preferred_city = e.target.value}
            className="select select-primary max-w-xs text-semibold p-2 rounded-md shadow-lg pr-14 mb-5 bg-light-gray">
            <option disabled selected>Eg. Bengaluru, Mumbai</option>
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Pune</option>
            </select>
            <div>
                <h3 className='text-semibold text-sm'>Top cities you may prefer:</h3>
                <div className='space-x-3 flex sm:w-1/2'>
                {cityList.map((item) => (
                    <button
                    onClick={() => {values.preferred_city = item}}
                    className='px-4 py-3 bg-white shadow-md rounded-md text-[#6776FF] font-semibold text-sm text-center transition duration-150 ease-in-out'>{item}</button>
                ))}
                </div>
            </div>
        </div>
        <Footer img="/img/avatar4.png" width={270} />
        </>
    )
}


export default UserPreference