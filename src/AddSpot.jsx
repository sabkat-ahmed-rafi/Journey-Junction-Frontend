

const AddSpot = () => {

  const handleAddSpot = (e) => {

    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const spotName = form.spotName.value;
    const photo = form.photo.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visit = form.visit.value;

    const spotInfo = {name , email, spotName, photo, country, location, description,cost, seasonality, time, visit}

    console.log(spotInfo);

  }

    return (
        <>
          <section>
          <form onSubmit={handleAddSpot} className="grid items-baseline grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-2xl">Add Trourists Spots</p>
				<p className="text-xs">Once submitted, our team will review your spot before it's published on the platform. This process ensures the quality and authenticity of the spots listed.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Name</label>
					<input name='name' id="firstname" type="text" placeholder="name" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Email</label>
					<input name='email' id="email" type="email" placeholder="Email" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm">Tourists Spot Name</label>
					<input name='spotName' id="spotname" type="text" placeholder="Spot Name" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm">photoURL</label>
					<input name='photo' id="photo" type="text" placeholder="photoURL" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Country Name</label>
					<input name='country' id="address" type="text" placeholder="Country Name" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">Location</label>
					<input name='location' id="location" type="text" placeholder="Location" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Short Description</label>
					<input name='description' id="description" type="text" placeholder="Description" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Average Cost</label>
					<input name='cost' id="cost" type="text" placeholder="Average Cost" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Seasonality</label>
					<input name='seasonality' id="seasonality" type="text" placeholder="Seasonality" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Travel Time</label>
					<input name='time' id="time" type="text" placeholder="Travel Time" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Total visit per year</label>
					<input name='visit' id="time" type="text" placeholder="Total visit per year" className="w-full border border-slate-400 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
				</div>
        <div className='w-full'>
          <button className='btn btn-primary text-xl text-white font-semibold w-full'>Add spot</button>
        </div>
			</div>
		</form>
          </section> 
        </>
    );
};

export default AddSpot;