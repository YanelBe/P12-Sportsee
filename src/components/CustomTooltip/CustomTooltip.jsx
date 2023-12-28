import PropTypes from "prop-types";

//Fonction pour créer un custom tooltip réutilisable pour les graphiques d'activité quotidienne et de durée moyenne des sessions
export default function CustomTooltip({ payload, active, format, className }) {
    if (active && payload && payload.length) {
        return (
            <div className={className}>
                {payload.map((entry, index) => (
                    <div key={`tooltip-${index}`}>
                        {`${entry.value}${format[index]}`}
                    </div>
                ))}
            </div>
        );
    }
    return null;
}

CustomTooltip.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
    format: PropTypes.array,
    className: PropTypes.string,
};
