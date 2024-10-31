import "./App.css"
import Home from "./assets/components/Home";
import Shop from "./assets/components/Shop";
import Men from "./assets/components/Men";
import Women from "./assets/components/Women";
import Kids from "./assets/components/Kids";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Details from "./assets/components/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
