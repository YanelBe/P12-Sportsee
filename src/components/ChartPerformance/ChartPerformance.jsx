import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

//Représenté par un RadarChart, le composant montre la performance avec 6 valeurs (intensité, cardio, energie, vitesse, force, endurance)

export default function ChartPerformance({ dataPerformance }){

    //On inverse les données du tableau pour correspondre à la maquette
    const invertedData = dataPerformance.slice().reverse();

    /**
     * performanceKindFormatter - Formate en français les valeurs de l'axe X pour le RadarChart
     * @param {number} kind - Représente le type de performance en anglais
     * @returns {string|null} - Renvoie la traduction en français
     */
    function performanceKindFormatter(kind) {
        
        switch (kind){
            case 1: 
                return "Cardio";
            case 2: 
                return "Energie";
            case 3: 
                return "Endurance";
            case 4: 
                return "Force";
            case 5: 
                return "Vitesse";
            case 6: 
                return "Intensité";
            default: 
                return null;
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={invertedData} outerRadius={90} >
                <PolarGrid 
                    radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 500 }} 
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    tickFormatter={performanceKindFormatter}/>
                <Radar dataKey="value" fill="#FF0101B2"/>
            </RadarChart> 
        </ResponsiveContainer>
    )
}

ChartPerformance.propTypes={
    dataPerformance: PropTypes.array.isRequired
}
