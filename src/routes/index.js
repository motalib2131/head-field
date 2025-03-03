import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "../pages/About";
import Resource from "../pages/Resource";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/resource", element: <Resource /> },
];

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
