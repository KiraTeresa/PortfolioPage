import './App.scss';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from './pages/Projects/ProjectsPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        {/* <Route path="/contact" element={<ContactPage/>}/> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer/>      
    </div>
  );
}

export default App;
