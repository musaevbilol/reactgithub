import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./logout";

function LoginPage() {
  const {currentUser, setCurrentUser } = useContext(AuthContext);
  const [emailInp, setEmailInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  let navigate = useNavigate();

useEffect(()=>{
if(currentUser !=null){
    navigate("/");
}
},[])

  const onPasswordChange = (e) => {
    setPasswordInp(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmailInp(e.target.value);
  };

  const onSign = () => {
    setCurrentUser({
      email: emailInp,
      isAdmin: false,
    });
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    value={emailInp}
                    onChange={onEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e-mail address"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <Link
                      to="/"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    value={passwordInp}
                    onChange={onPasswordChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    onClick={onSign}
                    type="button"
                    className="w-full px-3 py-4 text-white bg-indigo-700 rounded-md hover:bg-gray-100 hover:text-black focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
