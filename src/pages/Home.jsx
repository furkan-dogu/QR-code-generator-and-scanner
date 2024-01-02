import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>QR Code Scanner and Generator</h1>
      <div className="buttons">
        <button type="button" onClick={() => navigate("/scanner")}>
          Scanner
        </button>
        <button type="button" onClick={() => navigate("/generator")}>
          Generator
        </button>
      </div>
    </div>
  );
};

export default Home;
