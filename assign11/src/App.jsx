import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="web">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Error setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/Admin" element={userLoggedIn ? <Admin /> : <Error setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <nav>
          <NavLink className="navlink" to={"/Home"}>
            Home
          </NavLink>
          <NavLink className="navlink" to={"/About"}>
            About
          </NavLink>
          <NavLink className="navlink" to={"/Contact"}>
            Contact
          </NavLink>
          <NavLink className="navlink" to={"/Profile/213"}>
            Profile
          </NavLink>
          <NavLink className="navlink" to={"/Admin"}>
            For Admin!!
          </NavLink>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;