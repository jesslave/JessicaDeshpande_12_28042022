import './Icon.css'

export function Icon(props) {
    return (
        <div className="background">
            <img src={props.url} alt="icon"></img>
        </div>
    )
}