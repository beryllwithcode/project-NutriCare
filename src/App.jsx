import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BMITest from "./pages/BMI_Test";
import Community from "./pages/Community";
import FoodNutrient from "./pages/Food_Nutrient";
import AboutUs from "./pages/About_Us";
import Article from "./pages/Article";
import Layout from "./layout/Index";
import SignIn from "./pages/Sign_in";
import SignUp from "./pages/Sign_Up";
import DiscussionDetail from "./pages/Disscusion_Detail";

function App() {
  const location = useLocation();
  const isSignInOrSignUpPage =
    location.pathname === "/log-in" || location.pathname === "/sign-up";

  return (
    <>
      <Layout showNavbarAndFooter={!isSignInOrSignUpPage}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bmi-test" element={<BMITest />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route
            path="/discussion-detail"
            element={<DiscussionDetail />}
          ></Route>
          <Route path="/food-nutrient" element={<FoodNutrient />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/log-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
