import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllSpot = () => {

  const [spots, setSpots] = useState([])


  useEffect(() => {
    (async function fetchData() {
      try{
        const response = await fetch("http://localhost:3000/addSpot")
      const data = await response.json()
      console.log(data)
      setSpots(data)
      }catch(error){
        console.log(error)
      }
    })()  
  },[])

    return (
        <>
          <div className="space-y-2 py-6">
        <h1 className="text-center font-bold text-3xl">All Tourists Spots</h1>
        <p className="text-center text-sm">Discover the wonders of our region through a myriad of <br /> breathtaking tourist spots that cater to every traveler's desire for adventure, relaxation, and cultural immersion.</p>
        </div>
          <section className='flex flex-wrap justify-center gap-16 mb-9'> 
          {
            spots.map(spot => <div className='border space-y-2 border-slate-400 w-[40%] p-8 rounded-md' key={spot._id}>
              <div>
              <img className='rounded-md' src={spot.photo} alt="" />
              </div>
              <div className='flex justify-between'>
              <h1 className='text-xl font-bold'>{spot.spotName}</h1>
              </div>
              <p>{spot.description}</p>
              <p className='badge badge-primary font-bold'>{spot.cost}</p>
              <p className='font-bold'>Seasonality: {spot.seasonality}</p>
              <p className='font-bold'>Travel Time: 2-3 Days</p>
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

export default AllSpot;