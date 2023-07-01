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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Match password check
    if (password !== confirmPassword) {
      setPasswordMatch(false);
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

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordLength(true);
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
            <img
              src={register1}
              alt=""
              className="relative pointer-events-none"
            />
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
                        <img src={emailIcon} alt="" className="w-5" />
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
                          <img src={passwordIcon} alt="" className="w-5" />
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => handlePasswordChange(e.target.value)}
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
                    {passwordlength && (
                      <p className="mb-1 text-xs sm:text-sm tracking-wide mt-1 text-red-600">
                        {/* Password must contain at least */}
                        {password.length < 8 && (
                          <>
                            <p>Must have at least 8 characters </p>
                          </>
                        )}
                        {!/[A-Z]/.test(password) && (
                          <>
                            <p>Add at least one uppercase letter</p>
                          </>
                        )}
                        {!/[a-z]/.test(password) && (
                          <>
                            <p>Add at least one lowercase letter</p>
                          </>
                        )}
                        {!/\d/.test(password) && (
                          <>
                            <p>Add at least one number</p>
                          </>
                        )}
                      </p>
                    )}
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
                          <img src={passwordIcon} alt="" className="w-5" />
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
            <img
              src={register2}
              alt=""
              className="relative pointer-events-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
