import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import profile from './images/download.png'
import Cookies from 'js-cookie';    

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            Cookies.remove('user');
            toast.success("Logout successfully");

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error);
            setTimeout(() => { }, 2000);
        }
    };

    console.log(authUser.fullname)
    return (
        <div className="flex gap-4 items-center">
            {/* <div className="user-profile flex gap-2 items-center">
                <img
                    src={profile} // Replace with the actual profile image URL
                    alt="Profile"
                    className="profile-img"
                />
                <span className="username">
                    {authUser.fullname}
                </span>
            </div>
            <button
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button> */}
            <div className="w-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M256 73.825a182.175 182.175 0 1 0 182.18 182.18A182.177 182.177 0 0 0 256 73.825zm0 71.833a55.05 55.05 0 1 1-55.054 55.046A55.046 55.046 0 0 1 256 145.658zm.52 208.723h-80.852c0-54.255 29.522-73.573 48.885-90.906a65.68 65.68 0 0 0 62.885 0c19.363 17.333 48.885 36.651 48.885 90.906z" data-name="Profile"/></svg>
                {/* <img
                    src={profile} // Replace with the actual profile image URL
                    alt="Profile"
                    className="profile-img"

                /> */}

            </div>
            <div><span className="username">
                {authUser.fullname}
            </span></div>
            <div><button
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button></div>

        </div>
    );
}

export default Logout;