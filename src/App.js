import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import OurBlog from "./pages/ourBlog/OurBlog";
import FAQ from "./pages/faq/FAQ";
import AboutUs from "./pages/aboutUs/AboutUs";

import { Mood, AI, Base, Detection } from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/blog" element={<OurBlog/>}/>
        <Route path="/products/mood" element={<Mood/>}/>
        <Route path="/products/detection" element={<Detection/>}/>
        <Route path="/products/ai" element={<AI/>}/>
        <Route path="/products/base" element={<Base/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
