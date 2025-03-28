import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import BottomTab from "./components/BottomTab";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArtriclePage";
import NotFound from "./pages/NotFound";
import SpecificArticles from "./pages/SpecificArticles";
import "font-awesome/css/font-awesome.min.css";
import FlipBookPage from "./pages/FlipBookPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<AboutPage />} />
        <Route path="/school news" element={<SpecificArticles />} />
        <Route path="/student profiles" element={<SpecificArticles />} />
        <Route path="/special segments" element={<SpecificArticles />} />
        <Route path="/flipbook" element={<FlipBookPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomTab />
    </Router>
  );
}

export default App;
