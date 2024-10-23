import React, { useRef } from 'react'; // Import useRef
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dialogRef = useRef(null); // Create a reference for the dialog

  const onSubmit = async(data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('http://localhost:3000/user/login', userinfo);
      console.log(res.data);
      toast.success('SignIn successful..!');
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      dialogRef.current.close(); // Close the dialog on successful login
      window.location.reload();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        toast.error("Error: " + err.response.data.message);
      } else {
        alert("An error occurred.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal" ref={dialogRef}> {/* Attach ref to dialog */}
        <div className="modal-box">
          <h2 className="font-bold text-lg">Sign In</h2>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => dialogRef.current.close()}> {/* Call close method */}
              X
            </button>
            <div className='mt-1 flex flex-col'>
              <h3>Email</h3>
              <input type='email' placeholder='Enter your email' className='w-80 h-10 px-1 border rounded-md outline-none' 
                {...register("email", { required: true })} />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <h3>Password</h3>
            <input type='password' placeholder='Enter your password' className='w-80 h-10 px-3 py-1 border rounded-md outline-none' 
              {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
            <div className='flex flex-row justify-between'>
              <button className='w-52 rounded-md shadow-md p-2 m-2 bg-blue-800 text-white font-semibold'>Submit</button>
              <p className='mt-4'>Not Registered? <Link to='/register'><span className='text-blue-800 font-semibold'>Sign Up</span></Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
