import { PieChart, Pie } from 'recharts'
import './ChartPie.css'

/**
 * Function returning a pie chart from given data
 * @param {object} props
 * @returns {object} <div> html object
 */
export function ChartPie(props) {
    //First data is the userScore
    //Second data is what is needed to be removed to obtain only the user score in red color
    //Third data is the color, red for the score, transparent for the rest
    const data = [
        {
            name: "Score",
            value: props.value * 100,
            fill:"#FF0000"
          },
          {
            name: "Rest",
            value: 100 - props.value * 100,
            fill:"transparent"
          }
        ]

    return (
        <div className='pie'>
            <span className='score-title'>Score</span>
            <PieChart width={258} height={263}>
                <Pie 
                    innerRadius={70}
                    outerRadius={80}
                    data={data} 
                    dataKey="value" 
                    nameKey="name" 
                    startAngle={90}
                    endAngle={455}>
                </Pie>
            </PieChart>
            <span className='score'>{data[0].value}%</span>
            <span className='score-txt'>de votre objectif</span>
        </div>
    )
}