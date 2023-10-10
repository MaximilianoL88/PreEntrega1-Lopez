import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    let contador =10
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid menu">
            <a className="navbar-brand" href="#">
            <img src="img/logo papas.png" alt="Logo" width="75" height="75"/>
            Papas para todos
            </a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Tienda</a>
            </li>
        </ul>
        <div>
            <CartWidget/>
            <label>{contador}</label>
        </div>
    </div>
</nav>
    )
}

export default NavBar