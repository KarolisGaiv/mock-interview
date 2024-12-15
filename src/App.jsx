import "./App.css";
import CodingProblem1 from "./codingProblem/Problem1";
import useToggle from "./codingProblem/Problem2";

// Please see coding problem descriptions in respective files.

function App() {
  const [toggleStatus, toggle] = useToggle(false);
  return (
    <>
      <CodingProblem1 />

      {/* <div>
        <h2>This is Coding Problem 2</h2>
        <h3>The toggle is {toggleStatus ? "ON" : "OFF"}</h3>
        <button onClick={toggle}>
          {toggleStatus ? "Turn OFF" : "Turn ON"}
        </button>
      </div> */}
    </>
  );
}

export default App;
