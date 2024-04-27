import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./firebase/Authentication";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



const Register = () => {

  const {register,loading, setUserLoginInfo} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    const photo = form.photo.value
    console.log(email, password, name, photo)

    const userData ={name, photo}


    if(password == "" || email == ""){
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Give Email and Password",
        showConfirmButton: false,
        timer: 1500
      });
    }

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

    // Saving data in database
    fetch('http://localhost:3000',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.insertedId)
      fetch(`http://localhost:3000/${data.insertedId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserLoginInfo(data)
      })
    }) 

    // creating User 
    register(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      navigate("/")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created successfully",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(user)
    })
    .catch(error => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "something went wrong",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(error.message)
    })

  }

  return (
    <>
    {/* Loading spinner */}
		{loading && <span className="loading loading-bars loading-lg text-primary sticky top-[300px] left-[650px] z-10"></span>}
      <section className="flex justify-center py-2">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-slate-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <form onSubmit={handleRegister} action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block ">
                PhotoURL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md border border-slate-200  dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md  border border-slate-200 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 bg-primary font-bold">
              Sign up
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
