import React, { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, sendVerificationEmail, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    if (password.length < 6) {
      setError("Please add more then 6 character");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError(
        "Week password! your password must contain at least one upper case"
      );
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError(
        "Week password! your password must contain at least one lower case"
      );
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Week password! your password must contain at least one number");
      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError(
        "Week password! your password must contain at least one special character"
      );
      return;
    }
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Sign up successfully");
        navigate('/')
        verificationEmail(result.user);
        updateUserData(result.user, name);
        from.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    const updateUserData = (user, name) => {
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          console.log("user name updated");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    const verificationEmail = (user) => {
      sendVerificationEmail(user)
        .then((result) => {
          console.log(result);
          alert("Please check your email");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };
  const handleGoogleLogin = () =>{
    googleSignIn()
    .then(result =>{
      const loggerUser = result.user
      console.log(loggerUser);
      setSuccess("User Sign up successfully");
      navigate('/')
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
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  className="input input-bordered"
                  name="password"
                  required
                />
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
                  Already have an account? Please{" "}
                  <Link className="text-blue-600" to="/signin">
                    Login
                  </Link>
                </a>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div className="text-green-500">{success}</div>
              <div className="text-red-600">{error}</div>
              <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10" >OR</p>
              
              <div className="">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
