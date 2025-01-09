import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for dropdowns and other JS components
import Header from "./components/Header";
import Posts from "./components/Posts";
import Page from './components/Page'; // Import the Page component
import HomePage from './templates/HomeTemplate';  // Import the HomePage component
import AboutPage from './templates/AboutTemplate'; // Import the AboutPage component


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/:slug" element={<Page />} /> {/* Dynamic route for pages */}
      </Routes>
      <Posts/>
    </Router>
  );
};

export default App;
