import React from 'react';
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';

function LogOut() {
    const [authUser, setAuthUser] = useAuth();

    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem('Users');
            toast.success('LogOut successfully');
            window.location.reload();
        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    };

    return (
        <div>
            <button 
                onClick={handlelogout} // Added the onClick handler
                className='px-3 py-2 text-white rounded-md cursor-pointer bg-red-500'
            >
                LogOut
            </button>
        </div>
    );
}

export default LogOut;
