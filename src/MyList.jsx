import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './firebase/Authentication';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const MyList = () => {


  const {user, loading} = useContext(AuthContext)
  const [items, setItems] = useState([])

  let index = 1


    useEffect(() => {
      fetch(`http://localhost:3000/addSpot/${user?.email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })
    }, [])

    const handleDelete = (_id) => {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
             fetch(`http://localhost:3000/addSpot/myList/${_id}`, {
            method: 'DELETE'
        }).then(res => res.json())
       .then(data => {

        if(data.deletedCount > 0) {
          const remaining = items.filter(item => item._id !== _id)
          setItems(remaining)
        }
       })
          Swal.fire({
            title: "Deleted!",
            text: "This spot has been deleted.",
            icon: "success"
          });
        }
      });
    }

    if(items.length == 0){
      return (
        <div className='py-28 space-y-[115px]'>
          <h1 className='flex text-slate-300 font-extrabold justify-center items-center text-8xl '>No Spots Added</h1>
          <Link className='text-center font-bold ml-[40%] text-white bg-primary btn-wide btn' to="/addSpot">Add Now</Link>
        </div>
      )
    }

    return (
        <>
        {loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
        <div className="space-y-2 py-6">
        <h1 className="text-center font-bold text-3xl">My Tourists Spots</h1>
        <p className="text-center text-sm">Discover the wonders of our region through a myriad of <br /> breathtaking tourist spots that cater to every traveler's desire for adventure, relaxation, and cultural immersion.</p>
        </div>
       
         <section>
         <div className="overflow-x-auto mb-56">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Spot Name</th>
        <th>Country</th>
        <th>Location</th>
        <th>Cost</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        items.map((item) => {
          return (
            <tr>
              <th>{index++}</th>
              <td>{item.spotName}</td>
              <td>{item.country}</td>
              <td>{item.location}</td>
              <td>{item.cost}</td>
              <td> <Link to={`/updateSpot/${item._id}`}> <button className='btn btn-primary font-bold text-white'>Update</button></Link></td>
              <td><button onClick={() => handleDelete(item._id)} className='btn btn-primary font-bold text-white'>Delete</button></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
         </section>
        </>
    );
};

export default MyList;