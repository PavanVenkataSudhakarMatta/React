 function Ebinding() {
  return <button onClick={(e)=> {test("123",e)}}> Send</button>;
}

function test(value, e) {
    alert(value);
    console.dir(e);
}




// export function y() {
//     return <button> Send</button>;
//   }
  

export default Ebinding
