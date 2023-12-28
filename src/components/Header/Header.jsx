import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function Header() {

    return(
        <header className="header-container">
            <img className="header-container__logo" src={logo} alt="Logo de SportSee, Personne qui court"/>
            <nav className="header-container__nav">
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglages</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </header>
    )
}