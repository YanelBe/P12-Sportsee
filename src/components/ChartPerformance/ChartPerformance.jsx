import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

//Représenté par un RadarChart, le composant montre la performance avec 6 valeurs (intensité, cardio, energie, vitesse, force, endurance)

export default function ChartPerformance({ dataPerformance }){

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={dataPerformance} outerRadius={90} >
                <PolarGrid 
                    radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 500 }} 
                    stroke="#FFFFFF"
                    strokeWidth={2}/>
                <Radar dataKey="value" fill="#FF0101B2"/>
            </RadarChart> 
        </ResponsiveContainer>
    )
}

ChartPerformance.propTypes={
    dataPerformance: PropTypes.array.isRequired
}
