import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../Stars/Rating";
import { Link } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className="main-cards">
      {data.map((item) => (
        <Link to={`/product/${item.id}`} className="linkkk" key={item.id}>
          <div className="main-card" key={item.id}>
          <div className="main-card-title">
            {data && data.length > 0 ? item.title : "Загрузка..."}
          </div>
          <div
            className="main-card-rating"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {data && data.length > 0 ? <Rating prop={item} /> : "Загрузка..."}
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
