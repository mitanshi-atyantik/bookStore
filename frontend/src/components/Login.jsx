import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => { }, 2000);
        }
      });
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:4001/auth/google";
    } catch (error) {
      toast.error("Error logging in with Google");
      console.error("Google Login Error", error);
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal bg-transparent">
        <div className="modal-box dark:bg-gray-800 dark:text-white dark:border dark:border-white  flex flex-col items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="w-full">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-3xl text-center">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2 w-full">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2 w-full">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password "
                className="w-full px-3 py-1 border rounded-md outline-none dark:text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex flex-col items-center mt-6">
              <button className="bg-pink-500 text-white w-full rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="my-2">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 dark:text-blue-800 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>{" "}
              </p>
              <p className="my-2">Or</p>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className=" flex items-center justify-center w-full max-w-xs px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Login;