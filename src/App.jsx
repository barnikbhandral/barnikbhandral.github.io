import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Body from "./components/body/Body";
// import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Header from "./components/header/Header";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
