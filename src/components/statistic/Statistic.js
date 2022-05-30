import './Statistic.css'

export function Statistic(props) {
    return (
        <div className="stat-background">
            <img className='stat-icon' src={props.url} alt="icon"></img>
            <div className='stat-stats'>
                <span className='stat-quantity'>{props.quantity}</span>
                <span className='stat-type'>{props.type}</span>
            </div>
        </div>
    )
}