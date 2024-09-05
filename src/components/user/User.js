
import React from 'react'
// function User(props) {

//     return (
//         <>
//          <p>user Id is {props.id}</p> 
//          <p>user name is {props.name}</p> 
//          <p>user location is {props.location}</p> 
//          <p>user age is {props.age}</p> 
//         </>
//     )
// }

class User extends React.Component{

    render() {
        return (
                    <>
                     <p>user Id is {this.props.id}</p> 
                     <p>user name is {this.props.name}</p> 
                     <p>user location is {this.props.location}</p> 
                     <p>user age is {this.props.age}</p> 
                     {/* <p> {this.props.children}</p> */}
                    </>
                )
    }


}

export default User

