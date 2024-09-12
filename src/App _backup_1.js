import "./App.css";
import React, { useState } from "react";

// function App() {
//   let [a, updateValue] = useState(0);

//   return(
//     <>
//     {a} <br/>
//     <button onClick={() => {
//         updateValue(++a);
//     }}> Send </button>
//     </>
//   )
// }

class App extends React.Component {
    state = {
        counter:0
    }
     render() {
        return(
            <>
            {this.state.counter} <br/>
            <button onClick={() =>{
                this.setState({
                    counter:this.state.counter+1
                })
            }}> Click</button>
            </>
        )
     }
}

export default App;
