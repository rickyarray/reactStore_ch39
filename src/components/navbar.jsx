import "./navbar.css"
import { Link } from 'react-router-dom';
import GlobalState from '../store/globalState';
import { useContext } from 'react';
import DataContext from '../store/dataContext';

function NavBar(){
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

function getProductCount() {
  let total = 0;
  for(let i=0; i<cart.length; i++) {
    let prod = cart[i];
total += prod.quantity;
  }
  return total;
}

return (
  <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
              <Link className="navbar-brand" to="/">Home</Link>
              <Link className="navbar-brand" to="/Catalog">Catalog</Link>
              <Link className="navbar-brand" to="/About">About</Link>
          </div>

          <div className="d-flex align-items-center">
              <div className="user-info">
                  <label>{user.name}</label>
              </div>
              <Link className="btn btn-outline-success" to="/cart">
                  {getProductCount()}
                  <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
          </div>
      </div>
  </nav>
);
}

export default NavBar;

// test
// test git change