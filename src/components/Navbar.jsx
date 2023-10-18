/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthCon } from "./Provider/AuthProv";

const Navbar = () => {
  const { user, logOut } = useContext(AuthCon);

  const hanlogout = () => {
    logOut().then().catch();
  };

  return (
    <div>
      <div className="py-2  bg-col1">
        <div className="flex md:pb-0 pb-2 items-center justify-between">
          <img
            className="md:ml-8 h-12 md:h-20"
            src="https://i.ibb.co/N6ngXQs/cover.png"
            alt=""
          />

          <div className="flex md:space-x-3">
            {user ? (
              <>
                <div className="md:flex  md:space-x-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <h1 className="flex lg:items-center text-col4">
                  {user.displayName}
                </h1>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="space-x-3 pr-2 md:pr-8">

              {
                user ? (
                  <>
                  <button onClick={hanlogout} className="btn bg-col3 text-col4 border-0 hover:bg-col4 hover:text-col1">
                Log Out
              </button>
                  
                  </>

                )
                :
                (
                  <>
                  <Link to="/login">
              <button className="btn bg-col3 text-col4 border-0 hover:bg-col4 hover:text-col1">
                Login
              </button>
            </Link>
            <Link to="signup">
              <button className="btn bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1">
                Sign Up
              </button>
            </Link>
                  
                  </>

                )

              }
            
          </div>

          </div>

          
        </div>
        <div className="text-col4 text-xl py-2 border-t-2 border-col2">
          <ul className="text-center flex justify-evenly font-semibold ">
            <li className="transform transition duration-500 hover:scale-125">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="transform transition duration-500 hover:scale-125">
              <NavLink to="/addproduct">Add Product</NavLink>
            </li>
            <li className="transform transition duration-500 hover:scale-125">
              <NavLink to="/mycart">My Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
