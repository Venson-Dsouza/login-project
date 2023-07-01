import React, { useContext } from "react";
import { AuthContext } from "./../components/AuthContext";
import dashboard from "../assets/images/dashboard.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout handle function
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 p-2">
        <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div class="w-full">
            <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 bg-gray-900">
              <img
                src={dashboard}
                alt=""
                class="flex-shrink-0 object-cover object-center btn- flex w-40 h-40 mr-auto -mb-8 ml-auto shadow-xl"
              />
              <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                WELCOME
              </p>
              <p class="mt-3 text-base leading-relaxed text-center text-gray-200">
                {currentUser?.name}
              </p>
              <div class="width: fit-content mt-6">
                <button
                  onClick={handleLogout}
                  class="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
  font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
