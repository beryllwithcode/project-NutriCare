// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BMITest from "./pages/BMI_Test";
import Community from "./pages/Community";
import FoodNutrient from "./pages/Food_Nutrient";
import AboutUs from "./pages/About_Us";
import Article from "./pages/Article";
import Layout from "./layout/Index";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bmi-test" element={<BMITest />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/food-nutrient" element={<FoodNutrient />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
