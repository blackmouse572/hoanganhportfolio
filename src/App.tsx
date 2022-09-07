import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./views";
import About from "./views/about";

function App() {
  return (
    <BrowserRouter>
      <header>
        <link rel="stylesheet" href="/fonts/Emilea.otf" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cantata+One&display=swap" rel="stylesheet"></link>
        <title className="title">Hoang Anh Portfolio</title>
        {/* Icon */}
        <link rel="icon" href="assets/painting/snail.jpg" />
      </header>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
