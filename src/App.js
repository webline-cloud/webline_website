import React, {lazy, Suspense} from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import "./index.css"
import TechNews from "./components/TechNews";


function App() {
  return (
  <div>
   <Router>
   <Suspense fallback={<h1>Loading....</h1>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/services" element={<Services/>}/> */}
      <Route path="/tech-news" element={<TechNews/>}/>
    </Routes>
   </Suspense>
   </Router>
  </div>
  );
}

export default App;
