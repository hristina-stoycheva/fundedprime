import React from "react";
import { BrowserRouter as Router, Routes, Route , useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for dropdowns and other JS components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import NewPosts from "./components/NewPosts";
import Page from './components/Page'; // Import the Page component
import HomePage from './templates/HomeTemplate';  // Import the HomePage component
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';


const App = () => {
  const { slug } = useParams(); 
   return (
    <ApolloProvider client={client}>
  <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/:slug" element={<Page />} /> {/* Dynamic route for pages */}
      </Routes>
      <NewPosts/>
      <Footer/>
    </Router>
    </ApolloProvider>
);
};

export default App;
