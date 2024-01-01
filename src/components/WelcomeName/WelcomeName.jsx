import PropTypes from "prop-types"

//Composant du nom de l'utilisateur et de la phrase de présentation
export default function WelcomeName({ id, firstname }) {

    return (
        <div className="welcome">
            <p className="welcome__container">Bonjour<span key={id} className="welcome__container__name">&nbsp;{firstname}</span></p>
            <p className="welcome__container__congrats">Félicitations ! Vous avez explosé vos objectifs hier &#128079;</p>
        </div>
    )
}

WelcomeName.propTypes = {
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired
}