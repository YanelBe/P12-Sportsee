import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

//Représenté par un LineChart, le composant montre la durée moyenne d'une session en minutes pour chaque jour de la semaine
export default function ChartSessionLength({dataSessionDuration}){

    /**
     * Formate le jour de la semaine pour le transformer en sa première lettre
     * @param {number {1-7}} day - Récupère le jour de la semaine
     * @returns Retourne sa première lettre
     */
    function labelFormatter(day) {
        switch(day){
            case 1: 
                return "L";
            case 2: 
                return "M";
            case 3: 
                return "M";
            case 4: 
                return "J";
            case 5: 
                return "V";
            case 6: 
                return "S";
            case 7: 
                return "D";
            default: 
                return "";
        }
    }


    return (
        <div className="session-length__container">
            <h2 className="session-length__container__title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    data={dataSessionDuration}
                    margin={{
                        top:80,
                        right:10,
                        left:10,
                        bottom:40
                    }}
                >
                    <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="#FFFFFF" 
                        dot={false}
                        strokeWidth={2} 
                    />
                    <XAxis 
                        dataKey="day"
                        type="category" 
                        axisLine={false} 
                        tickLine={false}
                        tick={{
							fill: "rgba(255,255,255,0.6)",
							fontSize: 12,
                            fontWeight: 500
						}}
                        padding={{ right: 5, left: 5 }}
                        tickFormatter={labelFormatter} 
                        tickMargin={25}
                    />
                    <YAxis 
                        dataKey="sessionLength"
                        hide="true" 
                    />
                    <Tooltip 
                        content={<CustomTooltip 
                                    format={["min"]} 
                                    className="session-length__container__tooltip" />}
                        cursor={false} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

ChartSessionLength.propTypes={
    dataSessionDuration: PropTypes.array.isRequired
}
