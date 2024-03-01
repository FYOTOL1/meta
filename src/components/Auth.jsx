import React from "react";

export default function Auth() {
  return (
    <>
      <div className="Auth py-8 px-7 bg-white h-git w-full max-w-[600px] rounded-xl z-20 shadow-xl">
        <div className="flex justify-between">
          <h1 className="flex flex-col md:flex-row gap-2 text-2xl">
            <p>Welcome To</p>
            <p className="text-blue-500 font-bold uppercase ">Metaticket</p>
          </h1>
          <div className="text-lg">
            <p>No Account?</p>
            <a className="text-blue-500" href="/">
              Signup
            </a>
          </div>
        </div>
        <h1 className="text-5xl">Sign in</h1>
        <div className="flex items-center flex-col lg:flex-row gap-5 mt-8">
          <button className="Google flex justify-center lg:justify-between  md:justify-evenly px-28 md:px-4 items-baseline bg-gray-200 w-full md:max-w-[400px] text-3xl py-4 rounded-lg">
            <i class="fa-brands fa-google"></i>
            <p className="text-2xl hidden md:inline">Sign in With Google</p>
          </button>
          <button className="Facebook flex justify-center lg:justify-between  md:justify-evenly px-28 md:px-4 items-baseline bg-gray-200 w-full md:max-w-[400px] lg:w-fit text-3xl py-4 rounded-lg">
            <i class="fa-brands fa-facebook"></i>
            <p className="text-2xl hidden md:inline lg:hidden">
              Sign in With Facebook
            </p>
          </button>
          <button className="Apple flex justify-center lg:justify-between  md:justify-evenly px-28 md:px-4 items-baseline bg-gray-200 w-full md:max-w-[400px] lg:w-fit text-3xl py-4 rounded-lg">
            <i class="fa-brands fa-apple"></i>
            <p className="text-2xl hidden md:block lg:hidden">
              Sign in With Apple
            </p>
          </button>
        </div>
        <form className="mt-8 w-full" method="POST">
          <div className="Name-Email">
            <label className="text-2xl" htmlFor="Name-Email">
              Enter Your Name or Email
            </label>
            <br />
            <input
              onFocus={(e) => e.target.classList.add("outline-blue-400")}
              id="Name-Email"
              className="w-full h-14 text-2xl p-5 outline outline-1 rounded-lg mt-4"
              type="text"
              placeholder="Username or Email"
            />
          </div>
          <div className="Name-Email mt-12">
            <label className="text-2xl" htmlFor="Password">
              Enter Your Password
            </label>
            <br />
            <input
              onFocus={(e) => e.target.classList.add("outline-blue-400")}
              id="Password"
              className="w-full h-14 text-2xl p-5 outline outline-1 rounded-lg mt-4"
              type="text"
              placeholder="Password"
            />
          </div>

          <a
            className="text-blue-400 mt-2 text-right w-full d-block text-md"
            href="/"
          >
            Forget Password
          </a>
        </form>
        <button className="w-full py-4 bg-blue-500 rounded-xl mt-8 text-2xl text-white">
          Sign in
        </button>
      </div>
    </>
  );
}
