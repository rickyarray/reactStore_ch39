import "./footer.css";

function Footer(){
    return(
        <div className="footer-bottom">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Catalog</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
            </ul>
            <p>2023 Fly Merch. All rights reserved.</p>
        </div>
    );
}

export default Footer;

