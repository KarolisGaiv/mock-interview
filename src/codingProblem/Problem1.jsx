import { useState } from "react";

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
        <h1>Available fruits</h1>

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
