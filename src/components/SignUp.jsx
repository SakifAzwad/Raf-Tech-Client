/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCon } from "./Provider/AuthProv";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";


const SignUp = () => {

  const { createUser } = useContext(AuthCon);
  const navigate = useNavigate();
  const location1 = useLocation();
  const [registerError, setRegisterError] = useState("");

  const hanreg = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const URL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[@$!%*?&]/.test(password)) {
      setRegisterError(
        "Password must include at least one special character (e.g., @$!%*?&)."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: URL,
        })
          .then(() => {
            const p = result.user.displayName;

            swal(
              `Welcome ${p}!`,
              `You've successfully registered to Raf Events.`,
              "success"
            );
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
        navigate(location1?.state ? location1.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });

    e.target.name.value = "";
    e.target.photo.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };

    return (
        <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/K2bMkL3/bg2.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <div className="hero min-h-screen">
                <div className="">
                  <div className="pt-6 text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-col4 pb-4 ">Get Started with Raf Tech.</h1>
                    
                  </div>
                  <div className="card flex-shrink-0 w-full  shadow-2xl bg-col2 bg-opacity-40">
                    <form onSubmit={hanreg} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-lg text-col4">Name</span>
                        </label>
                        <input
                        name="name"
                          type="text"
                          placeholder="Name"
                          className="input input-bordered border-col3 bg-transparent"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-lg text-col4">PhotoURL</span>
                        </label>
                        <input
                        name="photo"
                          type="text"
                          placeholder="Name"
                          className="input input-bordered border-col3 bg-transparent"
                          required
                        />
                      </div>
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
                        
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-col3 text-col4 border-0 hover:bg-col4 hover:text-col1">Sign Up</button>
                      </div>
                      
                    </form>
                    {registerError && (
                        <p className="px-8 pb-4 text-red-700 font-extrabold">{registerError}</p>
                    )}
                    <p className="text-center pb-4 w-full text-col4">
                    Already have an account?{"  "} 
                    <Link className="text-col3 w-full font-extrabold" to="/login">
                        Login
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

export default SignUp;