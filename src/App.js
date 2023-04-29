import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Addblog from "./components/Addblog/Addblog";
import Blog from "./components/Blogs/Blog";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/addblog" element={<Addblog />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
