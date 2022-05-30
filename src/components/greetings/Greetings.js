import './Greetings.css'

export function Greetings(props) {
    const userName = props.name

    return (
        <div className="greetins">
            <h1>Bonjour <span className="username">{userName}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}