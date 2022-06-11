import { Line, Tooltip, LineChart, XAxis, YAxis } from 'recharts'
import './Average.css'

/**
 * Days week enumeration
 */
const dayAsString = new Map([
    [1, "L"],
    [2, "M"],
    [3, "M"],
    [4, "J"],
    [5, "V"],
    [6, "S"],
    [7, "D"]
]);

/**
 * Custom Tooltip to display only the time
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className="tooltip-container">
                <span className="avg-tooltip-content">
                    {`${payload[0].value} min`}
                </span>
            </div>
    );
}
    return null;
};

/**
 * Function returning a line chart from given data
 * @param {object} props
 * @returns {object} <div> html object
 */
export function Average(props) {
    const data = formatDaysAsString(props)

    return (
        <div className='avg'>
            <span className='avg-title'>Durée moyenne des sessions</span>
            <LineChart width={258} height={263} data={data}
                margin={{ top: 50, right: 10, bottom: 15, left: 10 }}>
                <XAxis dataKey="day"
                tick={{
                    fill : "#FF8181",
                    fontSize: 12,
                    fontWeight: 500,
                }}
                axisLine={false}
                tickLine={false}
                />
                <YAxis dataKey="min"
                hide={true}/>
                <Tooltip content={<CustomTooltip />} />
                <Line 
                    type="monotone" 
                    dataKey="min" 
                    stroke="#FF8181"
                    strokeWidth={2}
                    dot={false} />
            </LineChart>
        </div>
    )
}

/**
 * Function that will match the day with its value from the coming datas
 * @param {object} props
 * @returns {object} maped data
 */
function formatDaysAsString(props) {
    return props.data.map((entry) => {
        return { day: dayAsString.get(entry.day), min: entry.sessionLength };
    });
}
