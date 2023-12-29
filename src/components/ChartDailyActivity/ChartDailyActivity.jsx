import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import CustomTooltip from "../CustomTooltip/CustomTooltip"

//Représenté par un BarChart, le composant montre l'Activité Quotidienne, avec le poids et les calories brûlées chaque jour
export default function ChartDailyActivity({dataActivity}){

    /**
     * xAxisTickFormatter - Récupère le jour d'une date complète
     * @param {string} value - La date complète au format YYYY-MM-DD, par exemple 2020-07-01
     * @returns {number {1-31}} Le jour de la date
     */
    function xAxisTickFormatter(value) {
        const valueDay = value.split('-')
        return (Number(valueDay[2]))
    }

    return(
        <div className="activity-chart__container">
            <h2 className="activity-chart__title">Activité quotidienne</h2>

            <ResponsiveContainer width="100%" height="100%" >
                <BarChart 
                    data={dataActivity}
                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                    barGap={10}
                    >
                    {/*CartesianGrid contrôle les pointillés à chaque valeur du YAxis*/}
                    <CartesianGrid 
                        strokeDasharray="2" 
                        height={1} 
                        horizontalPoints={[90, 160]} />
                    {/*XAxis contrôle les données de l'axe horizontal pour chaque jour*/}
                    <XAxis 
                        className="activity-chart__XAxis" 
                        dataKey="day" 
                        tickFormatter={xAxisTickFormatter} 
                        interval="preserveStartEnd"
                        tickSize="0" 
                        tickMargin="25" 
                        stroke="#9B9EAC" />
                    {/*Le premier YAxis, à droite, avec les valeurs du poids*/}
                    <YAxis className="activity-chart__YAxis"
                        dataKey="kilogram"
                        yAxisId="right"
                        orientation="right"
                        type="number"
                        domain={["dataMin -1", "dataMax"]}
                        tickCount="3"
                        tickSize="0"
                        axisLine={false}
                        tickMargin="30"
                        width={45} 
                        stroke="#9B9EAC" />
                    {/*Le second YAxis, à gauche, avec les valeurs des calories, est caché*/}  
                    <YAxis 
                        dataKey="calories" 
                        yAxisId="left" 
                        orientation="left" 
                        hide="true" />
                    {/*Tooltip utilise le composant CustomTooltip pour afficher les bonnes données et attribuer une classe*/}
                    <Tooltip content={<CustomTooltip format={["kg", "Kcal"]} className="activity-chart__tooltip" />} />
                    {/*Legend affiche la légende en haut du graphique, avec les noms des barres indiquées plus bas*/}
                    <Legend 
                        verticalAlign="top"
                        align="right"
                        height={80} 
                        iconType="circle"
                        iconSize={8} 
                        formatter={(value) => (
                            <span className="activity-chart__legend">{value}</span>
                            )}/>
                    <Bar name="Poids (kg)"
                        dataKey="kilogram" 
                        yAxisId="right"
                        fill="#282D30"
                        radius={[25, 25, 0, 0]} 
                        barSize={7}/>
                    <Bar name="Calories brûlées (kCal)"
                        dataKey="calories"
                        yAxisId="left" 
                        fill="#E60000" 
                        radius={[25, 25, 0, 0]} 
                        barSize={7}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ChartDailyActivity.propTypes={
    dataActivity: PropTypes.array.isRequired
}