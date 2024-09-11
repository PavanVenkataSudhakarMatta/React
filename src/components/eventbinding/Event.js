function Event() {
  return (
    <>
      <button onClick={alert("Hello")}>Click</button>
      <button onClick={displayMessage}>Click</button>
      <button
        onClick={(e) => {
          test(e);
        }}
      >
        Click
      </button>
    </>
  );
}

function test(e) {
  console.dir(e.target);
}
function displayMessage() {
  alert("This is coding hub");
}

export default Event;
