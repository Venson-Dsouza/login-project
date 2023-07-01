import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import userIcon from "../../src/assets/images/user.svg";
import emailIcon from "../../src/assets/images/email.svg";
import passwordIcon from "../../src/assets/images/password.svg";
import showIcon from "../../src/assets/images/show.svg";
import hideIcon from "../../src/assets/images/hide.svg";
import register1 from "../../src/assets/images/register1.svg";
import register2 from "../../src/assets/images/register2.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordlength, setPasswordLength] = useState(false);
  const [login, setlogin] = useState(false);

  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // password character check
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Match password check
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    // password character check
    if (!validatePassword(password)) {
      setPasswordLength(true);
      return;
    }
    registerUser({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordMatch(true);
    setlogin(true);
  };

  // Match password check
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (password !== value) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  // Function handler for Hide/Show password input
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {passwordlength && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">
            Password must contain at least 8 characters, one uppercase letter,
            one lowercase letter, and one number.
          </span>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => {
              setPasswordLength(false);
            }}
          >
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {login ? (
        <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 p-2">
            <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
              <div class="w-full">
                <div class="m-8 my-20 max-w-[400px] mx-auto">
                  <div class="mb-8">
                    <h1 class="mb-4 text-3xl text-purple-900 font-extrabold flex justify-center">
                      Registration Successful..!
                    </h1>
                  </div>
                  <div class="space-y-4 flex justify-center">
                    <button
                      onClick={() => {
                        navigate("/login");
                      }}
                      class="p-3 pl-10 pr-10 bg-purple-900 rounded-full text-white width: fit-content font-semibold "
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-row items-center justify-around">
          <div className="w-96 hidden lg:block animate-trans-down">
            <img src={register1} alt="" className="relative" />
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
                Sign Up
              </div>
              <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your credentials to get an account
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col mb-5">
                    <label className="mb-1 text-xs tracking-wide text-gray-600">
                      Name:
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
                        <img src={userIcon} alt="" className="w-6" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        id="name"
                        name="name"
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
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
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
                        <img src={emailIcon} alt="" className="w-6" />
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
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
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
                          <img src={passwordIcon} alt="" className="w-6" />
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                            className="w-6 cursor-pointer"
                            onClick={handleTogglePassword}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-6">
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                      Confirm Password:
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
                          <img src={passwordIcon} alt="" className="w-6" />
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) =>
                          handleConfirmPasswordChange(e.target.value)
                        }
                        required
                        id="confirmPassword"
                        name="confirmPassword"
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
                        placeholder="Re-Enter your password"
                      />
                    </div>
                    {!passwordMatch && (
                      <p className="mb-1 text-xs sm:text-sm tracking-wide mt-1 text-red-600">
                        Passwords do not match!
                      </p>
                    )}
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
                      <span className="mr-2 uppercase">Sign Up</span>
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
          <div className="w-96 hidden sm:block animate-trans-down">
            <img src={register2} alt="" className="relative" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
