import "./style.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="main">
      <div className="error">
        <div className="error-title">404</div>
        <div className="error-txt">
          Данная страница не найдена, предлагаю перейти к каталогу товаров:
        </div>
        <div className="error-btn">
          <Link to="/">
            <button>Каталог товаров</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
