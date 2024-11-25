import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Rating from "../Stars/Rating";

function ProductPage() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const id = useLocation().pathname.split("/").pop();

  useEffect(() => {
    fetch(`https://671f75cfe7a5792f052e55dd.mockapi.io/items/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <main>
      <div className="product">
        <div className="product-name">{data.title}</div>
        <div className="product-img">
          {/* <img src={data.image} alt="" /> */}
          <div>
            {!loaded && <div className="loading" style={{width: 250 + "px", height: 400 + "px"}}></div>}
            <img
              src={data.image}
              alt=""
              onLoad={handleImageLoad}
              style={{ display: loaded ? "block" : "none" }}
            />
          </div>
        </div>
        <div className="product-price">
          <span>Price:</span> {data.price} $
        </div>
        <div className="product-discription">
          <span>Description:</span> {data.description}
        </div>
        <div className="product-rating">
          <Rating prop={data} />
        </div>
      </div>

      <button
        onClick={() => {
          window.history.back();
        }}
      >
        Назад
      </button>
    </main>
  );
}

export default ProductPage;
