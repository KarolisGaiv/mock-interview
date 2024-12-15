import { useState } from "react";

// TASK DESCRIPTION

/* 
Create a React component that toggles between two states (e.g., "ON" and "OFF") using a custom hook.

Create a custom hook useToggle that:
Manages a boolean state (true/false).
Provides a function to toggle between the two states (e.g., from false to true, or true to false).


Implement a component that uses the useToggle hook:
Display a button that toggles between "ON" and "OFF" states.
Display the current state ("ON" or "OFF").
When the button is clicked, it should toggle the state between "ON" and "OFF".

Stretch Task (Optional):
Allow the initial state to be passed as an argument to useToggle (e.g., starting from "ON" or "OFF").
*/

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}

export default useToggle;
