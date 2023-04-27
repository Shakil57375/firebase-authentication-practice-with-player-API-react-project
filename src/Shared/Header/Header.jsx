import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveNavLink from "../../Components/NavLink/ActiveNavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    // console.log(user.email);
    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(error => {
        console.log(error);
      })
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between z-50 fixed top-0 w-full  items-center lg:px-28 px-4 lg:py-6 py-4 bg-gray-700 '>
            <div className='text-3xl font-bold cursor-pointer'>
                <Link to= "/" className='sm:m-0 sm:p-0 text-white'>Fantasy11</Link>    
            </div>
            <div className='flex justify-between items-center flex-row-reverse lg:flex-row'>
                <div>
                    <div className='md:hidden' onClick={()=> setOpen(!open)}>
                            <span >
                                {
                                    open === true ? <XMarkIcon className='h-6 w-6 text-black-400'/> : <Bars3Icon className='h-6 w-6 text-black-400'/>
                                    
                                }
                            </span>
                    </div>
                    <div className={`links flex text-white absolute lg:static duration-500 lg:flex-row flex-col justify-center  ${open ? 'block right-0 top-16 -ml-16 z-50 lg:bg-inherit bg-black lg:text-black text-white py-5 gap-2 pl-10' : "hidden lg:block"} `}>
                  <ActiveNavLink to="/">Home</ActiveNavLink>
                  <ActiveNavLink to="/players">Players</ActiveNavLink>
                  <ActiveNavLink to="/myTeam">My team</ActiveNavLink>
                  <ActiveNavLink to="/signin">Sign in</ActiveNavLink>
                  <ActiveNavLink to="/signUp">Sign Up</ActiveNavLink>
                    </div>
                </div>
                <div>
                {
              user && 
              <div className="flex gap-4">
                <button onClick={handleLogOut}>Sign Out</button>
                <span className='text-white mr-3'> <img src={user.photoURL} width={50} height={50} className="rounded-full" alt="" /></span>
              </div>
            }
                </div> 
            </div>          
        </div>
    )
};

export default Header;
