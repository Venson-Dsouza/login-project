import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import emailIcon from "../../src/assets/images/email.svg";
import passwordIcon from "../../src/assets/images/password.svg";
import showIcon from "../../src/assets/images/show.svg";
import hideIcon from "../../src/assets/images/hide.svg";
import login2 from "../../src/assets/images/login2.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = loginUser(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      setLoginError(false);
      navigate("/dashboard");
    } else {
      setLoginError(true);
    }
  };

  // Function handler for Hide/Show password input
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-row items-center justify-around">
        <div className="w-64 hidden sm:block animate-trans-down">
          <img src={login2} alt="" className="relative pointer-events-none" />
        </div>
        <div className="min-h-screen p-5 flex flex-col items-center justify-center">
          <div
            className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-5
          rounded-3xl
          w-50
          max-w-md
        "
          >
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Sign In
            </div>
            <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
              Enter your credentials and log into your account
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                {loginError && (
                  <p className="mb-1 text-md tracking-wide text-red-600">
                    Invalid email or password!
                  </p>
                )}
                <div className="flex flex-col mb-5">
                  <label className="mb-1 text-xs tracking-wide text-gray-600">
                    E-Mail Address:
                  </label>
                  <div className="relative">
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                    >
                      <img src={emailIcon} alt="" className="w-7" />
                    </div>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      id="email"
                      name="email"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    for="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                    >
                      <span>
                        <img src={passwordIcon} alt="" className="w-7" />
                      </span>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="Enter your password"
                    />
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    right-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                    >
                      <span>
                        <img
                          src={showPassword ? showIcon : hideIcon}
                          alt=""
                          className="w-7 cursor-pointer"
                          onClick={handleTogglePassword}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <button
                    type="submit"
                    className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  >
                    <span className="mr-2 uppercase">Sign In</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
