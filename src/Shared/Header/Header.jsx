import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

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
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content px-20">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/players">Players</Link>
            </li>
            <li>
                <Link to="/myTeam">My team</Link>
            </li>
            <li>
                <Link to="/signin">Sign in</Link>
            </li>
            <li>
                <Link to="/signUp">Sign Up</Link>
            </li>
            {
              user && 
              <div className="flex gap-4">
                <button onClick={handleLogOut}>Sign Out</button>
                <span className='text-white'> <img src={user.photoURL} width={50} height={50} className="rounded-full" alt="" /></span>
              </div>
            }
          </ul>
        </div>
      </div>

      
      
      
      
    </div>
  );
};

export default Header;
