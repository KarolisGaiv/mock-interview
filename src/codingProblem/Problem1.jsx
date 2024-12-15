import { useState } from "react";

// TASK DESCRIPTION
/* 
You are given a list of items (e.g., a list of fruits: ["apple", "banana", "orange", "grape", "mango"]) and a simple React component that displays the list. The goal is to add a search bar that filters the list based on the user's input.


Basic functionality (Easy):
Create an input field above the list.
When the user types in the input field, update the displayed list to show only the items that match the input.
The filtering should be case-insensitive.

Intermediate functionality (Moderate):
If the input field is empty, display the entire list.
Show a message like "No items found" if there are no matches for the search.

Advanced functionality (Optional):
Add a "Clear" button next to the search bar that clears the input and resets the list.
*/

function CodingProblem1() {
  const data = ["apple", "banana", "orange", "grape", "mango"];
  const [searchQuery, setSearchQuery] = useState("");
  const [fruitsList, setFruitsList] = useState(data);

  function filterFruits(phrase) {
    setSearchQuery(phrase);
    let filteredList = data.filter((fruit) =>
      fruit.toLowerCase().includes(phrase.toLowerCase())
    );
    phrase.length > 0 ? setFruitsList(filteredList) : setFruitsList(data);
  }

  function resetSearch() {
    setSearchQuery("");
    setFruitsList(data);
  }

  const FruitList = () => {
    if (fruitsList.length === 0) {
      return <h3>No items found</h3>;
    }

    return (
      <ul>
        {fruitsList.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    );
  };

  return (
    <>
      <div>
        <h1>This is Problem 1</h1>
        <h2>Available fruits</h2>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => filterFruits(e.target.value)}
        />

        <button onClick={() => resetSearch()}>Clear</button>

        <FruitList />
      </div>
    </>
  );
}

export default CodingProblem1;
