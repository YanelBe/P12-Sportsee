import PropTypes from "prop-types"

//Composant pour représenter les valeurs à droite des graphiques : les calories, protéines, glucides et lipides
export default function KeyDataCard({id, icon, keyDataUnit, keyDataType}){

    const altText = `Icône ${keyDataType}`;
    
    return(
        <div className="key-data-container__card" key={id}>
            <img src={icon} alt={altText} />
            <div className="key-data-container__text">
                <div className="key-data-container__data">{keyDataUnit}</div>
                <div className="key-data-container__type">{keyDataType}</div>
            </div>
        </div>
    )
}

KeyDataCard.propTypes={
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    keyDataUnit: PropTypes.array.isRequired,
    keyDataType: PropTypes.string.isRequired,
    
}