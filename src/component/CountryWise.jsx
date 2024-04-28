import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';

const CountryWise = () => {

    const loadedData = useLoaderData()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/addSpot")
        .then(response => response.json())
        .then(data => {
             console.log(data)
             const matchedData = data.filter(p => p.country === loadedData.country)
             setData(matchedData)
         })
    },[])

   
 console.log(data)
 if(data.length == 0){
    return (
      <div className='py-28 space-y-[115px]'>
        <h1 className='flex text-slate-300 font-extrabold justify-center items-center text-8xl '>No Spots Found</h1>
        <Link className='text-center font-bold ml-[40%] text-white bg-primary btn-wide btn' to="/addSpot">Add Now</Link>
      </div>
    )
  }

    return (
        <>
        <div className="space-y-2 py-6">
        <Bounce><h1 className="text-center font-bold text-3xl">Country wise Spot</h1></Bounce>
        <p className="text-center text-sm">Discover the wonders of our region through a myriad of <br /> breathtaking tourist spots that cater to every traveler's desire for adventure, relaxation, and cultural immersion.</p>
        </div>
        <section className='lg:flex flex-wrap gap-14 justify-center mb-6'>
            {
                data.map(spot => <div className='border lg:mb-0 mb-5 lg:mx-0 mx-3 space-y-2 border-slate-400 lg:w-[40%] p-8 rounded-md' key={spot._id}>
                <div>
                <img className='rounded-md' src={spot.photo} alt="" />
                </div>
                <div className='flex justify-between'>
                <h1 className='text-xl font-bold'>{spot.spotName}</h1>
                <h1 className='text-lg font-semibold'>{spot.country}</h1>
                </div>
                <p>{spot.description}</p>
                <p className='text-sm font-bold'> Location: {spot.location}</p>
                <p className='badge badge-primary font-bold'>{spot.cost}</p>
                <p className='font-bold'>Seasonality: {spot.seasonality}</p>
                <p className='font-bold'>Visit per year: {spot.visit}</p>
                <div>
                  <Link to={`/addSpot/spotDetails/${spot._id}`} className='btn w-full btn-primary font-bold text-white'>View Details</Link>
                </div>
              </div>)
            }
            </section>
        </>
    );
};

export default CountryWise;