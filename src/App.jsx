import { useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCharacter = async () => {
    setLoading(true);

    let attempts = 0;

    while (attempts < 100) {
      attempts++;

      const randomId = Math.floor(Math.random() * 826) + 1;

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );

      const data = await response.json();

      if (
        !banList.includes(data.species) &&
        !banList.includes(data.status) &&
        !banList.includes(data.gender)
      ) {
        setCharacter(data);

        setHistory((prevHistory) => {
          const exists = prevHistory.some(
            (item) => item.id === data.id
          );

          if (exists) return prevHistory;

          return [data, ...prevHistory];
        });

        setLoading(false);
        return;
      }
    }

    alert("Too many attributes are banned! Remove one and try again.");
    setLoading(false);
  };

  const handleBan = (value) => {
    if (banList.includes(value)) {
      setBanList(
        banList.filter((item) => item !== value)
      );
    } else {
      setBanList([...banList, value]);
    }
  };

  return (
    <div className="app">

      <h1>Veni Vici!</h1>

      <p className="subtitle">
        Discover Random Rick and Morty Characters
      </p>

      <button
        className="discover-btn"
        onClick={getCharacter}
      >
        Discover Character
      </button>

      {loading && <p className="loading">Loading...</p>}

      <div className="content">

        <div className="panel">

          <h2>Ban List</h2>

          {banList.length === 0 ? (
            <p>Click an attribute to ban it.</p>
          ) : (
            banList.map((item) => (
              <button
                key={item}
                className="ban-button"
                onClick={() => handleBan(item)}
              >
                {item}
              </button>
            ))
          )}

        </div>

        <div className="panel">

          {character ? (
            <>
              <img
                src={character.image}
                alt={character.name}
              />

              <h2>{character.name}</h2>

              <p>
                <strong>Species:</strong>{" "}
                <span
                  className="attribute"
                  onClick={() => handleBan(character.species)}
                >
                  {character.species}
                </span>
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className="attribute"
                  onClick={() => handleBan(character.status)}
                >
                  {character.status}
                </span>
              </p>

              <p>
                <strong>Gender:</strong>{" "}
                <span
                  className="attribute"
                  onClick={() => handleBan(character.gender)}
                >
                  {character.gender}
                </span>
              </p>
            </>
          ) : (
            <p>Click Discover Character to begin.</p>
          )}

        </div>

        <div className="panel">

          <h2>History</h2>

          {history.length === 0 ? (
            <p>No history yet.</p>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="history-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <p>{item.name}</p>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default App;