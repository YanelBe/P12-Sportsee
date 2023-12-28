import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

//Représenté par un RadialBarChart, le composant montre le Score, le pourcentage vers l'objectif
export default function ChartScore({ dataScore }){

    /**
     * convertToPercentage - Transforme le score en pourcentage après avoir normalisé les données
     * @param {number} score - Le score à convertir en pourcentage
     * @returns {number} Le score converti en pourcentage
     */
    function convertToPercentage(score) {
        return Math.round(score * 100);
    }

    //On normalise les données, en changeant dataScore en score
    if (dataScore.todayScore !== undefined) {
        dataScore.score = dataScore.todayScore;
        delete dataScore.todayScore;
    }

    //On calcule le pourcengate à afficher
    const scorePercent = convertToPercentage(Number(dataScore.score));

    return (
        <div className="score-chart__container">
            <h2 className="score-chart__title">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="0%"
					outerRadius="0%"
                    data={[dataScore]} 
                    startAngle={180} 
                    endAngle={-180}
                    >
                    {/*Cette RadialBar affiche le cercle blanc interne, avec un score de 1 pour 100%*/}
                    <RadialBar
						dataKey="score"
						data={[{ score: 1 }]}
						barSize={170}
						fill="#FFF"
						isAnimationActive={false}
					/>
                    {/*Cette RadialBar affiche la barre rouge de progression*/}
                    <RadialBar 
                        dataKey="score" 
                        barSize={10}
                        cornerRadius={100}
                        fill= "#FF0000"
                    />    
                </RadialBarChart>
            </ResponsiveContainer>
            
            <div className="score-chart__objective">
                <p className="score-chart__objective__number">{scorePercent}%</p>
                <p className="score-chart__objective__text">de votre<br/>objectif</p>
            </div>
        </div>
    );
};

ChartScore.propTypes={
    dataScore: PropTypes.object.isRequired
}