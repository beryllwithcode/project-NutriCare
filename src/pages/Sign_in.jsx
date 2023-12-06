import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Button, Typography } from "@material-tailwind/react";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Login Success!");
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-nutricare-green">
          <span className="text-nutricare-orange">Sign in</span> to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-nutricare-green"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              <div className="text-sm">
                <a href="#" className="font-semibold text-nutricare-green">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-nutricare-green sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {/* <button
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-nutricare-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-nutricare-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign In
            </button> */}
            <Button
              type="submit"
              className="bg-nutricare-green hover:bg-nutricare-orange"
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
