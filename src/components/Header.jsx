import logo from "./../assets/world.svg"

export default function Header() {
    return (
        <header>
            <a href="#" className="header--logo">
               <img src={logo} alt=""/>
            </a>
            <p>my travel journal</p>
        </header>
    )
}