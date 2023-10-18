/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCon } from "./Provider/AuthProv";
import swal from "sweetalert";

const Login = () => {

  const {signIn,signInWithGoogle}=useContext(AuthCon);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");

  const autolog = () =>
  {
    signInWithGoogle()
    .then((result)=>
    {
      const p=result.user.displayName;
      swal(`Welcome Back ${p}!`,`You've successfully logged in to Raf Events.`, "success");
      navigate(location?.state ? location.state : '/');
    })
    .catch(error=>
      {
        console.log(error);
        setRegisterError(error.message);
      })
  }

  const hanlogin=e=>
  {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');

      signIn(email,password)
      .then((result)=>
        {
          const p=result.user.displayName;
          swal(`Welcome Back ${p}!`,`You've successfully logged in to Raf Tech.`, "success");
          navigate(location?.state ? location.state : '/');
        })
      .catch(error=>
        {
          console.log(error.code);
          setRegisterError(error.message);
        })
      
      e.target.email.value="";
      e.target.password.value="";
  }

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/vL71dbg/bg1.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <div className="hero min-h-screen">
                <div className="">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-col4 pb-4 ">Welcome Back to Raf Tech.</h1>
                    
                  </div>
                  <div className="card flex-shrink-0 w-full  shadow-2xl bg-col2 bg-opacity-40">
                    <form onSubmit={hanlogin} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-lg text-col4">Email</span>
                        </label>
                        <input
                        name="email"
                          type="email"
                          placeholder="Email"
                          className="input input-bordered border-col3 bg-transparent"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label ">
                          <span className="label-text text-lg text-col4">Password</span>
                        </label>
                        <input
                        name="password"
                          type="password"
                          placeholder="Password"
                          className="input input-bordered border-col3 bg-transparent"
                          required
                        />
                        <label className="pt-2 text-left pl-1">
                          <a
                            href=""
                            className="label-text-alt text-base  text-col3 hover:text-col4 "
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-col3 text-col4 border-0 hover:bg-col4 hover:text-col1">Login</button>
                      </div>
                      <h2 className="text-col4 pt-4 text-center">Or</h2>
                    </form>
                    <div className="form-control px-8 pb-6">
                      <button onClick={autolog}  className="btn   bg-col1 border-col2 text-col4 hover:bg-col4 hover:text-col1">
                        Login in With <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">O</span>
                        <span className="text-[#FBBC05]">O</span>
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#34A853]">L</span>
                        <span className="text-[#EA4335]">E</span>
                      </button>
                    </div>
                    {registerError && (
                        <p className="text-center  pt-4 font-extrabold  text-red-700">Invalid Email or Password</p>
                  )}
                    <p className="text-center pb-4 w-full text-col4">
                    Do not have an account? {"   "} 
                    <Link className="text-col3 w-full font-extrabold" to="/signup">
                         Sign Up
                    </Link>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
