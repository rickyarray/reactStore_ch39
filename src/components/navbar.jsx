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

    return(
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          </div>

        <li className='nav-item'>
          <Link className='nav-link active' aria-current="page" to="/admin">
            Admin
          </Link>
        </li>
        
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Catalog">
            Catelog
          </Link>

          <div className="container-fluid">
          <Link className="navbar-brand" to="/About">
            About
          </Link>

          <form className="d-flex" role="search">
            <div className="user-info">
            <label>{user.name}</label>
            </div>
            <Link className='btn btn-outline-success' to="/cart">
              {getProductCount()}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </form>
      

            </div>
          </div>
        </nav>

      
    );
}

export default NavBar;

// test
// test git change