
import { Link, useNavigate } from "react-router-dom";
import { useRef,useEffect } from "react";

import { RiTailwindCssFill } from "react-icons/ri";


const SignUpPage = () => {

const usernameRef = useRef();
const passwordRef = useRef();
const confirmRef = useRef();
const navigate = useNavigate();

const signUpHandler = async(event) => {
event.preventDefault();


const username = usernameRef.current.value.trim();
const password = passwordRef.current.value.trim();
const confirmPassword = confirmRef.current.value.trim();

if(!username || !password || !confirmPassword) {
  alert("Please fill all required fields")
  return;
}

if(password !== confirmPassword) {
  alert("Confirm password and username don't match")
  return;
}

const newUser = {
  username: username,
  password: password,
  id: String(Math.random()),
  image: `https://avatar.iran.liara.run/username?username=${username}`,
}

 // Check existing User
 const existingUserResponse = await fetch(`http://localhost:3000/users`);
 const existingUserData = await existingUserResponse.json();

 const isUserNameTaken = existingUserData.some(
   (user) => user.username === username
 );

 if (isUserNameTaken) {
   alert("Username already exists");
   return
 }

localStorage.setItem("userId", JSON.stringify(newUser.id))     //yeni useri-i locala atiriq

const response = await fetch("http://localhost:3000/users", {
  method: "POST",
  "content-type": "application/json",
  body: JSON.stringify(newUser)
})

const data =  response.json();

usernameRef.current.value = "";
passwordRef.current.value = "";
confirmRef.current.value = "";


navigate("/");

}


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
       <RiTailwindCssFill className="text-[40px] text-indigo-600"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={signUpHandler} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Username
            </label>
            <div className="mt-2">
              <input
                ref={usernameRef}
                id="username"
                name="username"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                ref={confirmRef}
                id="confirm-password"
                name="confirm-password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;