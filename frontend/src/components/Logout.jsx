import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import profile from './images/download.png'

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error);
            setTimeout(() => { }, 2000);
        }
    };
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
            <div className="text-red-600 w-12">
                <img
                    src={profile} // Replace with the actual profile image URL
                    alt="Profile"
                    className="profile-img"

                />

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