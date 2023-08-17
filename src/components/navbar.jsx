
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <Link className='btn btn-outline-success' to="/cart">
              Cart
            </Link>
          </form>
      

            </div>
          </div>
        </nav>

      
    );
}

export default NavBar;

