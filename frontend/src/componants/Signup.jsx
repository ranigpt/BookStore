import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const onSubmit = async(data) => {
        const userinfo = {
            fullname: data.fullname,
            dob: data.dob,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post('http://localhost:3000/user/signup', userinfo);
            console.log(res);
            toast.success('SignUp successful..!');
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            navigate('/'); // Redirect to root after successful signup
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
            }
        }
    };

    const handleClose = () => {
        navigate('/'); // Redirect to root when closing the modal
    };

    return (
        <div className='flex items-center justify-center mt-36'>
            <div className="modal-box">
                <h2 className="font-bold text-2xl text-blue-950 m-2 p-3">Sign UP</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>
                            X
                        </button>

                        <div className='mt-1 flex flex-col'>
                            <h3>Name</h3>
                            <input
                                type='text'
                                placeholder='Enter your Name'
                                className='w-80 h-10 px-1 border rounded-md outline-none'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-1 flex flex-col'>
                            <h3>DOB</h3>
                            <input
                                type='date'
                                className='w-80 h-10 px-1 border rounded-md outline-none'
                                {...register("dob", { required: true })}
                            />
                            {errors.dob && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-1 flex flex-col'>
                            <h3>Email</h3>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='w-80 h-10 px-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='mt-1 flex flex-col'>
                            <h3>Password</h3>
                            <input
                                type='password'
                                placeholder='Enter your password'
                                className='w-80 h-10 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='flex flex-row justify-between'>
                            <button className='w-52 rounded-md shadow-md p-2 m-2 bg-blue-800 text-white font-semibold'>
                                Submit
                            </button>

                            <p className='mt-4'>
                                Have an account?{' '}
                                <Link to='/'>
                                    <span className='text-blue-800 font-semibold'>Login</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
