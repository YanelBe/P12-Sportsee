import { Link } from "react-router-dom"


export default function Home() {
    return(
        <ul className="list-users">
            <Link to="user/12">Utilisateur : Karl</Link>
            <Link to="user/18">Utilisateur : Cecilia </Link>
        </ul>
    )
}