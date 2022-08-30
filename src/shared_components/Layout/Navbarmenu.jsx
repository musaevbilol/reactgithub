import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../pages/login/logout";

const Navbarmenu = () => {
  const [nav, setNav] = useState(false);
  const { currenUser, logout } = useContext(AuthContext);
  let navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center max-w-[1350px] mx-auto px-6 bg-black text-white sticky top-0 z-50 w-full h-14">
      <h1 className="w-full text-3xl font-semibold text-white">Jaguar</h1>
      <ul className="hidden md:flex">
        <li className="mx-2 hover:bg-slate-600 pt-3 pb-3 pr-2 pl-2">
          <Link to="/">HOME</Link>
        </li>
        <li className="mx-2 hover:bg-slate-600 pt-3 pb-3 pr-2 pl-2">
          {" "}
          <Link to="/vehicles">VEHICLES</Link>
        </li>
        <li className="mx-2 hover:bg-slate-600 pt-3 pb-3 pr-2 pl-2">
          <Link to="/purchase">PURCHASE</Link>
        </li>
        <li className="mx-2 hover:bg-slate-600 pt-3 pb-3 pr-2 pl-2">
          <Link to="/owners">OWNERS</Link>
        </li>
        <li className="mx-2 hover:bg-slate-600 pt-3 pb-3 pr-2 pl-2">
          <Link to="/explore">EXPLORE</Link>
        </li>
        <span className="bg-blue-900 hover:bg-white hover:text-black">
          <li className="mx-2  pt-3  pr-2 pl-2 font-bold  ">
            {currenUser != null ? (
              <button onClick={onLogout} className="">
                Logout
              </button>
            ) : (
              <Link to="/login" className="flex rounded-lg">
                Login
              </Link>
            )}
          </li>
        </span>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden text-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">Jaguar</h1>
        <ul className="p-4">
          <li className="px-4 py-2 border-b border-gray-600">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 py-2 border-b border-gray-600">
            <Link to="/vehicles">VEHICLES</Link>
          </li>
          <li className="px-4 py-2 border-b border-gray-600">
            <Link to="/purchase">PURCHASE</Link>
          </li>
          <li className="px-4 py-2 border-b border-gray-600">
            <Link to="/owners">OWNERS</Link>
          </li>
          <li className="px-4 py-2 border-b border-gray-600">
            <Link to="/explore">EXPLORE</Link>
          </li>
          <li className="px-4 py-2 border-b border-gray-600 font-bold  ">
            <Link to="/login" className="flex rounded-lg">
              Sign<span className="px-1">in</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbarmenu;
