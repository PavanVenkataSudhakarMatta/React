import './Header.css'

function Header() {
  let s1 = {
    color: 'red',
    background: 'green',
  };

  return (
    <>
      <h1 style={s1}> Menu</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Career</li>
      </ul>
    </>
  );
}

// let Header = () => {
//         return (
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Career</li>
//         </ul>)
// }

// let Header = function() {
//     return (
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Career</li>
//                 </ul>)
// }

export default Header;
