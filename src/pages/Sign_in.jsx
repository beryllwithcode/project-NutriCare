import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Alert, Button, Typography } from "@material-tailwind/react";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [signInError, setSignInError] = useState(null);
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    setLoading(true);

    if (email.length > 0) {
      if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email");
        setLoading(false);

        if (!password.length > 0) {
          setPasswordError("Please fill out this field.");
          setLoading(false);
        } else {
          setPasswordError(null);
          setLoading(false);
        }
        setLoading(false);
        setSignInError(null);
      } else {
        setEmailError(null);
        setLoading(false);
        if (!password.length > 0) {
          setPasswordError("Please fill out this field.");
          setLoading(false);
        } else {
          setPasswordError(null);
          setLoading(false);

          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

          if (error) {
            console.error(error.message);
            if (error.message.includes("Invalid login credentials")) {
              setSignInError("Login failed. Please check again!");
              setOpen(true);
            } else {
              setSignInError(null);
              // alert("Email is already registered. Please Sign In!");
            }
          } else {
            navigate("/");
          }
          setLoading(false);
        }
      }
    } else {
      setEmailError("Please fill out this field.");
      if (!password.length > 0) {
        setPasswordError("Please fill out this field.");
      } else {
        setPasswordError(null);
      }
      setLoading(false);
      setSignInError(null);
    }
  };

  return (
    <div className="flex h-screen lg:h-100 flex-1 flex-col justify-center px-10 py-12 pt-0 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-nutricare-green">
          <span className="text-nutricare-orange">Sign in</span> to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleLogin}>
          {signInError && (
            <>
              <Alert
                open={open}
                onClose={() => setOpen(false)}
                variant="ghost"
                color="red"
                className="text-sm"
              >
                {signInError}
              </Alert>
            </>
          )}
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
                type="text"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
            </div>
            {emailError && (
              <p className="text-nutricare-merah text-sm mt-1">{emailError}</p>
            )}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
            </div>
            {passwordError && (
              <p className="text-nutricare-merah text-sm mt-1">
                {passwordError}
              </p>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className="bg-nutricare-green hover:bg-nutricare-orange mt-8"
              fullWidth={true}
              disabled={loading}
            >
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/sign-up"
            className="font-semibold leading-6 text-nutricare-green"
          >
            Sign Up Here!
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

export default SignIn;
