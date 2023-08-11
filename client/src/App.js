import Homepage from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Chat from "./pages/chat/ChatA";
import Todo from "./pages/todo/ToDoo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
     <TopBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={user ? <Homepage /> : <Register/>} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        
      </Routes>
    </Router>
  );
}

export default App;