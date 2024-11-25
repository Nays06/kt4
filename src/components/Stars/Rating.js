import "./style.css";

function Rating(prop) {
  // console.log(`${(prop && prop.length > 0) ? prop : "Загрузка..."}`);
  // console.log(prop.prop.rating.rate);
  
  
  let rating = Math.round(prop.prop.rating?.rate);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="fa fa-star active" key={`r${i}`}></span>);
  }

  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<span className="fa fa-star" key={`r${i +5}`}></span>);
  }

  return <div className="ratingStars" style={{width: 110 + 'px', display: "flex", justifyContent: "space-between"}}>{stars}</div>;
}

export default Rating;
