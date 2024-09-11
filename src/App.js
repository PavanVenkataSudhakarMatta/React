import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Menu from "./components/menu/Menu"
import Menu from "./components/Crendering";
import Course from "./components/course/Course";
import Ebinding from "./components/eBinding/Event";
import logo from "./logo.svg"
import {Home, About, Contact, ErrorPage, Career} from "./components/site/Site"


function App() {
  let data = "Full Stack Java Course";
  let img = "logo192.png"
  let courses = [
    { id: 1, name: "Java", fee: "25000" },
    { id: 2, name: "Angular", fee: "15000" },
    { id: 3, name: "React", fee: "10000" },
  ];

  function handleClick(a) {
    console.log("Handle Click Event");
    console.log(a);
  }

  return (
    <>
      <BrowserRouter>
      <Menu />
       <Routes>
       <Route path="/" element={<Home/>} ></Route>


       <Route path="/about" element={<About/>} >
       <Route path="career" element={<Career/>}> </Route>
       </Route>

       <Route path="/contact/:id" element={<Contact/>} ></Route>
       <Route path="*" element={<ErrorPage/>} ></Route>
       </Routes>
      </BrowserRouter>


      {/* <img src={logo}/> */}
      {/* <Ebinding></Ebinding>
      {
       courses.map(
        (c) => {
          return <Course key={c.id} id={c.id} name={c.name} fee={c.fee} handleMyClick={handleClick} >  
         <h1>This is Coding Hub </h1> 
          </Course>
        }
       )
      } */}

      {/* <Menu/>   */}
      {/* <Menu></Menu>
       { Menu()} */}
      {/* <h1 className="App text-primary m-5">Coding Hub</h1>
      <h2>Way to a better future</h2>
      <h3>{data}</h3>
      <h4> {10 + 25}</h4>
      <h5> {sum(10, 20)}</h5>
      <button className="btn btn-primary"> Send</button>
      <label htmlFor="pavan"> Rember me</label>
      <input type="checkbox" id="pavan" /> */}
    </>
  );
}

export function sum(x, y) {
  return x + y;
}

export default App;
