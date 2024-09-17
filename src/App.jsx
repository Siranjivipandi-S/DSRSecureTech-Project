import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Elearning from "./pages/Elearning.jsx";
import Project from "./pages/Project.jsx";
// import ContactForm from "./Component/Contact/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/elearning" element={<Elearning />} />
      <Route path="/api/project" element={<Project />} />
      {/* <Route path="/api/contact" element={<ContactForm />} /> */}
    </Routes>
  );
}

export default App;
