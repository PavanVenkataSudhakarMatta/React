import "./Crendering.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course  from "../course/Course"
import Event from "../eventbinding/Event"
import  {Link} from 'react-router-dom'
 let isDashboard = true;

function Crendering() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Event/>} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
      {/* {isDashboard ? <Dashboard></Dashboard>: null} */}
      {isDashboard && <Dashboard></Dashboard>}
    </>
  );
}

function Menu() {
  let s = {
    display: "flex",
    gap: "20px",
    backgroundColor: "blue",
    color: "#fff",
    padding: "10px",
    listStyle: "none",
  };
  let isLogin = false;
  return (
    <>
      <ul style={s}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course" >Course</Link></li>
        <li>Contact Us</li>
        <li>Career</li>
        {isLogin ? <li>Logout</li> : <li>Login</li>}
      </ul>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Login Dashboard</h1>
    </>
  );
}

export default Crendering;
