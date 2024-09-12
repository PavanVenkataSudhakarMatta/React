// import  './Crendering.css'

import { Link } from "react-router-dom";



function Crendering() {
 let isAdmin= false;
  return (
    <>
    
    <Menu></Menu>
    {/* {isAdmin ? <Admin></Admin>: null } */}
    { isAdmin && <Admin></Admin>}
    </>
  )
}

function Admin() {
  return (
    <>
         <p>This is Admin Dashboard</p>
    </>
  )
}



function Menu() {

let isLogin = false;

let a = {
  display: "flex",
    gap:"20px",
    listStyle: "none",
    color: "white",
    backgroundColor: "red",
    padding: "10px",
}

  return (
    
    <ul style={a}>
       <Link to="/">Home</Link> 
       <Link to="/about">About Us</Link> 
       <Link to="/contact">Contact Us</Link> 
       <Link to="/course">Course</Link> 
       <Link to="about/career">Career</Link> 

       {/* <li to="about/career">Career</li> */}

      { isLogin ? <li>Login</li>: <li>Logout</li> }  
       {/* <li>Logout</li>  */}
       {/* <li>Career</li>  */}
    </ul>
  )

}

export default Crendering