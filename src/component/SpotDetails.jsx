import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../firebase/Authentication';

const SpotDetails = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);
    const {loading} = useContext(AuthContext)
    


    return (
        <div>
            {loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
            <h1 className='text-center font-bold py-3 text-3xl pb-6'>Tourists Spot Details</h1>
            
            <section className='flex mx-10 mb-7'>
                    <div className='w-[50%]'>
                        <img className='w-[90%] rounded-md' src={loadedData.photo} alt="" />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>{loadedData.spotName}</h1>
                        <p className='font-serif'>{loadedData.description}</p>
                        <p className='font-semibold'>Location: {loadedData.location}, {loadedData.country}</p>
                        <p className='font-semibold'>Cost: {loadedData.cost}</p>
                        <p className='font-semibold'>Seasonality: {loadedData.seasonality}</p>
                        <p className='font-semibold'>Travel Time: 2-3 Days</p>
                        <p className='font-semibold'>Total visitor per year: {loadedData.visit}</p>
                        <p className='font-semibold'>Spot added by: {loadedData.name}</p>
                    </div>
                </section>
            
        </div>
    );
};

export default SpotDetails;