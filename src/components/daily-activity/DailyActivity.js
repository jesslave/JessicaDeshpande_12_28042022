import { Bar, Tooltip, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import './DailyActivity.css'

/**
 * Function returning a bar chart from given data
 * @param {object} props
 * @returns {object} <div> html object
 */
export function DailyActivity(props) {

    //Calulate of min/max for the kilograms and kilocalories depending the coming data
    const weights = props.data.map((entry) => entry.kilogram);
    const calories = props.data.map((entry) => entry.calories);
    const minKilograms = weights.reduce((previousValue, currentValue) => previousValue <= currentValue ? previousValue : currentValue);
    const maxKilograms = weights.reduce((previousValue, currentValue) => previousValue >= currentValue ? previousValue : currentValue);
    const minCalories = calories.reduce((previousValue, currentValue) => previousValue <= currentValue ? previousValue : currentValue);
    const maxCalories = calories.reduce((previousValue, currentValue) => previousValue >= currentValue ? previousValue : currentValue);

    /**
     * Custom Tooltip to display on a red background the kilograms and kilocalories 
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload) {
            return (
                <div className="tooltip-container">
                    <span className="tooltip-content">
                        {`${payload[0].value} kg`}
                    </span>
                    <span className="tooltip-content">
                        {`${payload[1].value} kCal`}
                    </span>
                </div>
        );
    }
        return null;
    };

    return (
        <div className='daily'>
            <div className='legende'>
                <span className='activity-title'>Activité quotidienne</span>
                <span>
                    <span className='black-circle'></span>
                    <span className='legende-libelle'>Poids (kg)</span>
                </span>
                <span>
                    <span className='red-circle'></span>
                    <span className='legende-libelle'>Calories brûlées (kCal)</span>
                </span>
            </div>
            <BarChart width={1100} height={320} data={props.data} barGap={2} barCategoryGap={65}
                margin={{
                    top: 50
                }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day"
                    tickLine={false}
                    tick={{ fontSize: 14 }}
                    dy={5} />
                <YAxis dataKey="kilogram"
                    yAxisId="left" 
                    orientation="right"
                    interval="number"
                    allowDecimals={false}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 14, fill: '#74798c' }}
                    tickCount={10}
                    //We add and remove 2 to min max to get a better render for the graph
                    domain={[minKilograms -2, maxKilograms + 2]} />
                <YAxis dataKey="calories"
                    hide={true}
                    yAxisId="right"
                    orientation="right"
                    //We add and remove 50 to min max to get a better render for the graph
                    domain={[minCalories -50, maxCalories + 50]} />
                <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[50, 50, 0, 0]} />
                <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsla(0, 0%, 50%, 0.3)'}} />
            </BarChart>
        </div>
    )
}