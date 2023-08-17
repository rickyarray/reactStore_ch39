import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <h1>Stand out in style!</h1>

    <Link to="/catalog">
        check out our catalog
    </Link>

    </div>
  );
}

export default Home;
