import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { convertToPercentage } from "../../utils/dataFormat.js"
import PropTypes from "prop-types";

//Représenté par un RadialBarChart, le composant montre le Score, le pourcentage vers l'objectif
export default function ChartScore({ dataScore }){

    const score = dataScore || 0;

    //On créé un tableau d'objets avec la clé "score" pour que Recharts puisse traiter les données dans un objet
    const data = [{ score: score }];

    //On calcule le pourcengate à afficher
    const scorePercent = convertToPercentage(Number(score));


    return (
        <div className="score-chart__container">
            <h2 className="score-chart__title">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="0%"
					outerRadius="0%"
                    data={data} 
                    startAngle={180} 
                    endAngle={-180}
                    >
                    {/*Cette RadialBar affiche le cercle blanc interne, avec un score de 1 pour 100%*/}
                    <RadialBar
						dataKey="score"
						data={[{ score: 1 }]}
						barSize={170}
						fill="#FFFFFF"
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
    dataScore: PropTypes.number.isRequired
}