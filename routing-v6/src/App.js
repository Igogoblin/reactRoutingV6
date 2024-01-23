import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>
      <footer>Copyright 2024</footer>
    </>
  );
}

export default App;
