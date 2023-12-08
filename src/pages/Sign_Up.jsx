import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Alert, Button, Typography } from "@material-tailwind/react";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [open, setOpen] = React.useState(true);

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Validate password length
    if (password.length < 6) {
      setPasswordLengthError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordLengthError("");
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error(error);
        if (error.message.includes("Is the email not registered yet?")) {
          setSignupError("");
        } else {
          // alert("Email is already registered. Please Sign In!");
          setSignupError("Email is already registered. Please Sign In!");
        }
      } else {
        await supabase.from("profiles").upsert([
          {
            id: data.user.id,
            full_name: fullName,
          },
        ]);
        alert("Registration successful!.");
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  return (
    <div className="flex h-screen lg:h-100 flex-1 flex-col justify-center px-10 py-12 pt-0 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-nutricare-green">
          <span className="text-nutricare-orange">Register</span> your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSignUp}>
          {signupError && (
            <>
              <Alert
                open={open}
                onClose={() => setOpen(false)}
                variant="ghost"
                color="red"
                className="text-sm"
              >
                {signupError}
              </Alert>
            </>
          )}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-nutricare-green"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-nutricare-green"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-nutricare-green"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
              {passwordLengthError && (
                <p className="text-red-500 text-sm mt-1">
                  {passwordLengthError}
                </p>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="bg-nutricare-green hover:bg-nutricare-orange mt-8"
              fullWidth={true}
            >
              Sign Up
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Are you a member?{" "}
          <Link
            to="/log-in"
            className="font-semibold leading-6 text-nutricare-green"
          >
            Sign In Here!
          </Link>
        </p>
        <Link to="/">
          <Typography
            variant="small"
            className="mt-2 text-center font-semibold text-nutricare-green"
          >
            {"<"} Back To Home
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
