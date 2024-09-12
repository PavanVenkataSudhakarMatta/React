import "./App.css";
import React, { lazy, Suspense, useState } from "react";
import { Home, About, ErrorPage, Career, Contact } from "./components/Site";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Crendering";

//import Course from "./components/Course"

let Course = lazy(() => import("./components/Course"));

function App() {
  // let isDisplay =  false;
  //let a = 0;
  let [a, updateValue] = useState(0);


  return (
    <>
      {a} <br />
      <button
        className="btn btn-danger"
        onClick={() => {
          updateValue(a++);
          console.log(a);
        }}
      >
        {" "}
        Click
      </button>
      {/* { (isDisplay===true) && <Suspense>
      <Contact/>
    </Suspense>
    } */}
      {/* <BrowserRouter>
    <Menu />
    <Suspense  fallback={<div>Loading......</div>}>
      <Routes>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="course" element={<Course />}></Route>
        <Route path="about" element={<About />}>
          <Route path="career" element={<Career />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Suspense>
  </BrowserRouter> */}
    </>
  );
}

export default App;
