import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './Me Myself & I Logo.gif';

export default function Navbar() {
    return <div className="nav-button">
    <Link to="/journal"> <button className="buttonNav">Journal</button></Link>
    <Link to="/calendar"> <button className="buttonNav">Calendar</button></Link>
    <div>  <Link to="/"> <img id="logo" src={logo} alt='logo'></img> </Link> </div>
    </div>
}