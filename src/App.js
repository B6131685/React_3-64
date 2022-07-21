// import logo from './logo.svg';
// import './App.css';  //children component with style css but when I comment codes it work ?
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/sidebar";
// import Menu from "./components/menu";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footerv2 from "./components/Footerv2";
import ProductPage from './pages/ProductPage';
import Detail from './pages/Detail'
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        {/* ต้องใส่ exact กับหน้าแรก */}
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route path='/about'>
          <AboutPage></AboutPage>
        </Route>
        <Route path='/product'>
          <ProductPage></ProductPage>
        </Route>
        <Route path='/detail/:id/title/:title'>
          <Detail></Detail>
        </Route>
      </Switch>
      <Footerv2></Footerv2>
    </Router>
  );
}

export default App;
