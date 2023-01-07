import './App.scss';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from './pages/Projects/ProjectsPage';
import ContactPage from './pages/Contact/ContactPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import ProjectsDetail from './pages/Projects/ProjectsDetail';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes className="shape">
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/projects/:slug" element={<ProjectsDetail/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/legal-notice" element={<LegalNotice/>}/>

        <Route path="/loader" element={<Loading/>}/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer/>      
    </div>
  );
}

export default App;
