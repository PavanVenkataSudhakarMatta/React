// function Course(props) {

import React from "react";

// console.log(props)
//  return (
//     <>
//     <p>Course id is: {props.id }</p>
//     <p>Course name is: {props.name }</p>
//     <p>Course fee is: {props.fee }</p>
//     <p>Course fee is: {props. handleMyClick("10")}</p>

//     </>
//  )

// }

class Course extends React.Component {

  render() {
 //  console.log(this.x);
   let a =10;

    return (
      <>
        <p> {this.props.children} </p>
        <p>Course id is: {this.props.id}</p>
        <p>Course name is: {this.props.name}</p>
        <p>Course fee is: {this.props.fee}</p>
        <button onClick={() => this.props.handleMyClick(a)}>Pass Data</button>
      </>
    );
  }
}

export default Course;
