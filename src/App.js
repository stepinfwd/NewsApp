import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setNews] = useState("");
  const API = "c4cd6616ad5741bcb20037760185c206";
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-09&sortBy=publishedAt&apiKey=c4cd6616ad5741bcb20037760185c206"
      )
      .then((res) => setNews(res.data.articles));
  }, []);
  console.log("data bsdd", data);
  if (data) {
    console.log("data", data);
    return (
      <div className="App">
        <h1 className="head__text">News App 👋</h1>
        <div className="all__news"></div>
        {data.map((news) => (
          <h1>{news.author}</h1>
        ))}
      </div>
    );
  }
  return <li>LOADING .........</li>;
}

export default App;
