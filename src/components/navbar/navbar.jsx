import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function NavbarDefault() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log(session);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.error_description || error.message);
    } else {
      navigate("/log-in");
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 pt-1">
      <NavLink to="/" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/" ? "nav-item active" : "nav-item"
          }`}
        >
          Home
        </Typography>
      </NavLink>
      <NavLink to="/bmi-test" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/bmi-test"
              ? "nav-item active"
              : "nav-item"
          }`}
        >
          BMI Calculate
        </Typography>
      </NavLink>
      <NavLink to="/article" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/article"
              ? "nav-item active"
              : "nav-item"
          }`}
        >
          Article
        </Typography>
      </NavLink>
      <NavLink to="/community" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/community"
              ? "nav-item active"
              : "nav-item"
          }`}
        >
          Community
        </Typography>
      </NavLink>
      <NavLink to="/food-nutrient" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/food-nutrient"
              ? "nav-item active"
              : "nav-item"
          }`}
        >
          Food Nutrient
        </Typography>
      </NavLink>
      <NavLink to="/about-us" activeClassName="active">
        <Typography
          as="li"
          variant="small"
          className={`flex items-center gap-x-2 p-1 font-semibold text-nutricare-green hover:text-nutricare-orange border-b-2 border-transparent hover:border-nutricare-orange transition-all duration-200 ${
            window.location.pathname === "/about-us"
              ? "nav-item active"
              : "nav-item"
          }`}
        >
          About Us
        </Typography>
      </NavLink>
    </ul>
  );

  return (
    <Navbar
      fullWidth={true}
      className="mx-auto shadow-none sticky top-0 z-10 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="flex items-center gap-x-3">
          <img
            src="./logo/logo192.png"
            className="h-12 w-auto"
            alt="NutriCare"
          />
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-light text-orange-400 tracking-widest"
            variant="h3"
          >
            Nutri
            <span className="font-semibold text-nutricare-green">Care</span>
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-3">
          {session ? (
            <Menu>
              <MenuHandler>
                <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                  {session.user.email.slice(0, session.user.email.indexOf("@"))
                    .length > 9
                    ? session.user.email
                        .slice(0, session.user.email.indexOf("@"))
                        .slice(0, 9) + "..."
                    : session.user.email.slice(
                        0,
                        session.user.email.indexOf("@")
                      )}
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Link to="/log-in">
                <Button
                  variant="filled"
                  size="sm"
                  className="hidden lg:inline-block bg-nutricare-green hover:bg-nutricare-orange"
                >
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  variant="filled"
                  size="sm"
                  className="hidden lg:inline-block bg-nutricare-green hover:bg-nutricare-orange"
                >
                  <span>Signup</span>
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/log-in">
              <Button variant="filled" size="sm" color="green" fullWidth={true}>
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="filled" size="sm" color="green" fullWidth={true}>
                <span>Signup</span>
              </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;
