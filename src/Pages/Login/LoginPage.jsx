import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  const navigate=useNavigate();
  const location= useLocation();
  const from = location.state?.from?.pathname || "/" ;

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)

      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
   <div>
    <Helmet>
      <title>bistro boss/ Login</title>
    </Helmet>
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handelValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="type here"
                className="input input-bordered"
                required
              />
              
            </div>

            <div className="form-control mt-6">
              <button disabled={disabled} className="btn bg-[#D1A054] text-white">
                Login
              </button>
            </div>

            <p>
             <small> Now Here?{" "}</small>
              <Link to="/register"
                className="text-[#D1A054]">
                Create a New Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default LoginPage;
