import { Link } from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/logo.png'

export default function Navbar() {

    return (
        <nav id="nav" className="nav">
            <div id="wideNav">
                <Link to="/">
                    <span className="wide nav-link">home</span>
                </Link>
                <Link to="/about" >
                    <span className="wide nav-link">about</span>
                </Link>
                <Link to="/" >
                    <img height="50px" src={logo} />
                </Link>
                <Link to="/projects" >
                    <span className="wide nav-link">projects</span>
                </Link>
                <Link to="/resume" >
                    <span className="wide nav-link">resume</span>
                </Link>
            </div>
            <div id="mobile">
                <Link to="/">
                    <span className="nav-link">home</span>
                </Link>
                <Link to="/about" >
                    <span className="nav-link">about</span>
                </Link>      
                <Link to="/projects" >
                    <span className="nav-link">projects</span>
                </Link>
                <Link to="/resume" >
                    <span className="nav-link">resume</span>
                </Link>
            </div>
        </nav>
    )
}