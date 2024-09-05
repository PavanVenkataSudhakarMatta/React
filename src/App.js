import "./App.css";
// import Header from './components/header/Header';
import User from "./components/user/User";

function App() {
  let data = "Full Stack Java Course";
  let users = [
    { id: 1, name: "pavan", age: 32, location: "Hyderabad" },
    { id: 2, name: "pavan1", age: 33, location: "MTM" },
    { id: 3, name: "pavan2", age: 34, location: "Banglore" },
    { id: 4, name: "pavan3", age: 35, location: "Chennai" },
    { id: 5, name: "pavan4", age: 36, location: "Pune" },
  ];

  return (
    <>
      {users.map((user) => {
        return (
          <User
            id={user.id}
            name={user.name}
            age={user.age}
            location={user.location}
          >
            PavanMano
          </User>
        );
      })}

      {/* <Header></Header> */}
      <h1 className="App text-primary m-5">Coding Hub</h1>
      <h2>Way to a better future</h2>
      <h3>{data}</h3>
      <h4> {10 + 25}</h4>
      <h5> {sum(10, 20)}</h5>
      <button className="btn btn-primary"> Send</button>
      <label htmlFor="pavan"> Rember me</label>
      <input type="checkbox" id="pavan" />
    </>
  );
}

function sum(x, y) {
  return x + y;
}

export default App;
