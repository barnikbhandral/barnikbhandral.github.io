import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Body from "./components/body/Body";
// import Header from "./components/header/Header";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
