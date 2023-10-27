import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    const fetchNewAdvice = () => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => {
          const { advice } = res.data.slip;
          setAdvice(advice);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  return (
    <div className="app">
      <div className="card">
        <h2 className="text">{advice}</h2>
        <button className="button" onClick={fetchNewAdvice}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;

