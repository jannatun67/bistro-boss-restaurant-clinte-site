import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const[cart]=UseCart()
  // console.log(user);
  const handelLOgout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const NavOption = (
    <>
      <li>
        <NavLink to="/" className="uppercase mr-3">
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/menu" className="uppercase mr-3 ">
          Our Menu
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/order" className="uppercase mr-3">
          Order Food
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/dashboard/cart" className="uppercase mr-3">
          <button className="flex gap-1 text-xl">
          <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <div className="flex justify-center ">
            <button onClick={handelLOgout} className=" uppercase mr-3">
              logOut
            </button>
            <img
              className="size-8 object-cover rounded-full "
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          <li>
            {" "}
            <NavLink to="/login" className="uppercase mr-3">
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavOption}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl">
            <span>BISTRO BOSS</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
