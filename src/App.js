import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./components/Header";

// import { BrowserRouter, Router } from "react-router-dom/cjs/react-router-dom";

import { BrowserRouter ,Router, Route} from "react-router-dom";


// pages

import Home from './Pages/Home';
import Cart from './Pages/Cart';


function App() {
  const [theme] = useThemeHook();

  return (
    <main className={theme ? "bg-black" : "bg-light-2"} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header />
        <Route exact path="/" ><Home /></Route>
        <Route exact path="/cart" > <Cart /> </Route>
        <Route exact path="/home"> <Home/> </Route>
    </main>
  );
}

export default App;