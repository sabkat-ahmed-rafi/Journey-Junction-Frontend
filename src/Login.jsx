import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './firebase/Authentication';
import Swal from 'sweetalert2'


const Login = () => {

	const {login, googleLogin, loading } = useContext(AuthContext)
	const navigate = useNavigate();
	const location = useLocation()
	const previouseRoute = location?.state || '/';

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value
		const password = form.password.value

		if(!/[A-Z]/.test(password)){
			return Swal.fire({
			  position: "top-end",
			  icon: "error",
			  title: "Password must have Uppercase character.",
			  showConfirmButton: false,
			  timer: 1500
			});
		  }
		  if(!/[a-z]/.test(password)){
			return Swal.fire({
			  position: "top-end",
			  icon: "error",
			  title: "Password must have Lowercase character.",
			  showConfirmButton: false,
			  timer: 1500
			});
		  }
		  if(password.length < 6) {
			return Swal.fire({
			  position: "top-end",
			  icon: "error",
			  title: "Password must have 6 character.",
			  showConfirmButton: false,
			  timer: 1500
			});
		  }

		// login User 
		login(email, password)
		.then(userCredential => {
			const user = userCredential.user
			console.log(user)
			navigate(previouseRoute)
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Welcome back",
				showConfirmButton: false,
				timer: 1500
			  });
			
		}).catch(errro => {
			console.log(errro.message)
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Invalid information",
				showConfirmButton: false,
				timer: 1500
			  });
		})
	}

const provider = new GoogleAuthProvider();

	const handleGoogle = () => {
		googleLogin(provider)
		.then(result => {
			const user = result.user;
			console.log(user)
			navigate(previouseRoute)
		}).catch(error => {
			console.log(error.message)
		})
	}

    return (
        <>
		{/* Loading spinner */}
		{loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
        <section className='flex justify-center py-10'>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-slate-100 dark:text-gray-800">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleSubmit} action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block ">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  border border-slate-200 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-md dark:text-gray-50 bg-primary font-bold">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<Link to="/register" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</Link>
	</p>
</div>
        </section>  
        </>
    );
};

export default Login;