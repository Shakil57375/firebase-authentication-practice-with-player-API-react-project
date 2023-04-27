import React, { useContext, useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const Signin = () => {
  const { login, forgetPass, googleSignIn, githubSignIn } = useContext(AuthContext);
  const emailRef = useRef();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          alert("Please verify your email to log in");
          return;
        }
        setSuccess("User logged in successfully");
        from.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleResetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Please provide your email address to reset password");
      return;
    }
    forgetPass(email)
      .then(() => {
        toast("Please check your email");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  const handleGoogleLogin = () =>{
    googleSignIn()
    .then(result =>{
      const loggerUser = result.user
      console.log(loggerUser);
      setSuccess("User Sign up successfully");
      navigate(from)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  }
  const handleGithubLogin = () =>{
    githubSignIn()
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      setSuccess("User Sign up successfully");
      navigate(from)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen lg:mt-24 mt-[4.2rem] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign in!</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[450px] w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  ref={emailRef}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input  input-bordered "
                  name="password"
                  required
                />
                <a href="#" className="label-text-alt link link-hover mt-3">
                  Forget password?{" "}
                  <Link onClick={handleResetPass} className="text-blue-600">
                    Reset
                  </Link>
                </a>

                <p
                  className="absolute top-12 right-3"
                  onClick={() => setShow(!show)}
                >
                  <small>
                    {show ? (
                      <span>
                        <FaEyeSlash className="text-2xl" />
                      </span>
                    ) : (
                      <span>
                        <FaEye className="text-2xl" />
                      </span>
                    )}
                  </small>
                </p>
              </div>
              <div>
                <a href="#" className="label-text-alt link link-hover">
                  New to my shop? Please{" "}
                  <Link className="text-blue-600" to="/signUp">
                    Sign Up
                  </Link>
                </a>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="text-green-500">{success}</div>
              <div className="text-red-600">{error}</div>
              <div>
                <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10">
                  OR
                </p>

                <div className="mb-3">
                  <img
                    onClick={handleGoogleLogin}
                    className=" social-button cursor-pointer"
                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    onClick={handleGithubLogin}
                    className=" social-button cursor-pointer"
                    src="https://i.ibb.co/g9f4P0S/github-btn.png"
                    alt=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Signin;
