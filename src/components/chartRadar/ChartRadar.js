import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'
import './ChartRadar.css'

/**
 * Function returning a chart radar from given data
 * @param {object} props
 * @returns {object} <div> html object
 */
export function ChartRadar(props) {
    const kinds = props.data.kind
    const data = buildData(props, kinds)
    
    return (
        <div className='radar'>
            <RadarChart cx="49%" cy="50%" outerRadius="65%" width={258} height={263} data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="stat" stroke="white" tickLine={false}   />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

/**
 * Function returning an object with maped kinds
 * @param {object} props
 * @returns {object} maped kinds with coming data
 */
function buildData(props, kinds) {
    return props.data.data.map((entry) => {
        return {
            stat: kinds[entry.kind],
            value: entry.value
        }
    })
}
