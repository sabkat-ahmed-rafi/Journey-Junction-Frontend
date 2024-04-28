import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Countries = () => {

    const [countries, setContries] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/contries')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setContries(data)
        })
    }, [])

    return (
        <>
        <section>
        <div className="space-y-2 py-6">
        <Bounce><h1 className="text-center font-bold text-3xl">Countries</h1></Bounce>
        <p className="text-center text-sm">Discover the wonders of our region through a myriad of <br /> breathtaking tourist spots that cater to every traveler's desire for adventure, relaxation, and cultural immersion.</p>
        </div>
        </section>
            <section className='lg:flex mb-8 flex-wrap lg:gap-9 lg:justify-center'>
                {
                    countries?.map(country => {
                        return (
                            <Link to={`/contries/${country._id}`} className='lg:w-[28%] lg:transition lg:hover:scale-110 lg:border rounded-md lg:p-5 border-slate-400' key={country._id}>
                                <section className='border lg:border-none rounded-md mx-auto lg:w-full w-[80%] mb-6 lg:p-0 p-8'>
                                    <div>
                                    <img className='rounded-md lg:w-full ' src={country.photo} alt="" />
                                    </div>
                                    <h1 className='text-2xl font-semibold'>{country.country}</h1>
                                    <p className='text-sm'>{country.description}</p>
                                </section>
                            </Link>
                        )
                    })
                }
            </section>
        </>
    );
};

export default Countries;