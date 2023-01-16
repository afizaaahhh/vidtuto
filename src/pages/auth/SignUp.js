import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TestSignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // eslint-disable-next-line no-use-before-define
    validateInput(e);
  };

  const validateInput = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj.confirmPassword =
              "Password and Confirm Password does not match.";
          } else {
            stateObj.confirmPassword = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", input.email);
    console.log("Password:", input.password);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-14 m-auto bg-white rounded-md shadow-xl shadow-grey-600/40 ring ring-black-900 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Sign Up
        </h1>
        <form className="mt-6 text-left" onSubmit={handleSubmit}>
          <div className="mb-2 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="email"
              placeholder="Enter Email"
              value={input.email}
              onChange={onInputChange}
              onBlur={validateInput}
            />
            {error.email && <span className="text-red-600">{error.email}</span>}
          </div>
          <div className="mb-2 text-left relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
            />
            <div
              className="absolute right-4 top-8 cursor-pointer"
              onClick={togglePassword}
            >
              {passwordShown ? (
                <FaEye className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </div>
            {error.password && (
              <span className="text-red-600">{error.password}</span>
            )}
          </div>
          <div className="mb-2 text-left relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type={confirmPasswordShown ? "text" : "password"}
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
            />
            <div
              className="absolute right-4 top-8 cursor-pointer"
              onClick={toggleConfirmPassword}
            >
              {confirmPasswordShown ? (
                <FaEye className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </div>
            {error.confirmPassword && (
              <span className="text-red-600">{error.confirmPassword}</span>
            )}
          </div>

          <div className="mt-6">
            <a href="/" className="font-medium text-blue-600 hover:underline">
              <button
                type="button"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-purple-500 hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Sign Up
              </button>
            </a>
          </div>
          <div className="flex justify-center w-full mt-4">
            <span className=""> Already have an account?</span>&nbsp;
            <a
              href="/"
              className="hover:text-blue-500 hover:underline hover:underline-offset-4"
            >
              Login
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestSignUp;
