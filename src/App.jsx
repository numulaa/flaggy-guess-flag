import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [flag, setFlag] = useState({
    countryName: "Indonesia",
    flagImage: "https://flagcdn.com/w320/id.png",
  });
  const [allFlags, setAllFlags] = useState([]);
  useEffect(() => {
    async function getFlags() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setAllFlags(data);
    }
    getFlags();
  }, []);

  function getFlagData() {
    const randomNum = Math.floor(Math.random() * allFlags.length);
    const flagData = allFlags[randomNum];
    const flagImageUrl = flagData.flags.png;
    const countryNameData = flagData.name.common;
    setFlag((prevFlag) => ({
      ...prevFlag,
      countryName: countryNameData,
      flagImage: flagImageUrl,
    }));
  }

  return (
    <section className="main-app">
      <Header />
      <main>
        <section className="main-section">
          <h1 className="main-title">Guess the Flag</h1>
          <div className="flag-wrapper">
            <div className="flag-image">
              <img src={flag.flagImage} className="flag-image-display" />
            </div>
            <button className="getFlagButton" onClick={getFlagData}>
              &#x2622;
            </button>
          </div>
          <Form flag={flag} />
        </section>
      </main>
    </section>
  );
}

export default App;
