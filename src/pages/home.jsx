import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <div className="hero-section"></div>
      <header className="home-header">
      
        <h1>Stand out in style!</h1>
      </header>
      <div className="content">
        <div className="product">
          <h2> Fall '23</h2>
          <p>TOP PICKS FOR FALL</p>
          <p>Shop our fall collection! Shop our new looks!</p>
          <Link to="/catalog" className="shop-now-link">Shop Now</Link>

        </div>
        <div className="product">
          <h2>Customer Reviews</h2>
          <p>I Love the 49ers over-sized shirt in a beige from the material to the overall design! I always get me complimented!</p>
          <p>49ers Oversized Tee</p>
          <h3> - Trent W.</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;

