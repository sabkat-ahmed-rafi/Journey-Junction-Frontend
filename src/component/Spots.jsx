import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const Spots = () => {

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
          <section className='lg:flex flex-wrap justify-center gap-16 mb-9'> 
          {
            spots.map(spot => <div className='border lg:mb-0 mb-5 lg:mx-0 mx-3 space-y-2 border-slate-400 lg:w-[40%] p-8 rounded-md' key={spot._id}>
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

export default Spots;