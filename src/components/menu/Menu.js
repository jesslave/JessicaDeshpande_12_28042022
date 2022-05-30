import './Menu.css'

export function Menu() {
    return (
        <div className="menu">
            <div>
                <img src="/logo.png" alt="leLogo" className='logo'></img>
            </div>
            <a href="/">Accueil</a>
            <a href="/">Profil</a>
            <a href="/">Réglage</a>
            <a href="/">Communauté</a>
        </div>
    )
}