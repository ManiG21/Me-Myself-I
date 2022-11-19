import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './Me Myself & I Logo.gif';

export default function Navbar() {
    return <div className="nav-background">
        <div className="nav-links">
    <Link className="logo" to="/"> <img id="logo" src={logo} alt='logo'></img> </Link>
    <div>
    <Link to="/journal"> <button id="paths" className="buttonNav button">Journal</button></Link>
    <Link to="/pie-chart"> <button id="paths" className="buttonNav button">Pie Chart</button></Link>
    </div>
    </div>
    </div>
}