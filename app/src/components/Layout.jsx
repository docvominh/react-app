import {Link, Outlet} from "react-router-dom";
import logo from '../logo.svg'

const Layout = () => {

    const links = [
        {
            key: 1,
            name: 'Home',
            url: '/',
        },
        {
            key: 2,
            name: 'Weather',
            url: '/weather',
        },
        {
            key: 3,
            name: 'Complex Form',
            url: '/complex-form',
        },
        {
            key: 4,
            name: 'Chat',
            url: '/chat',
        }
    ];


    const renderLinks = links.map((link, index) => {
        return (
            <Link key={link.key} to={link.url} className="navbar-item">{link.name}</Link>
        );
    })
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="" className="navbar-item">
                            <img src={logo} width="27px"/>
                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>

                        <ul className="navbar-menu">
                            {renderLinks}
                        </ul>
                    </div>
                </div>

            </nav>

            <div className="container" style={{padding: "60px 0 0 0"}}>
                <Outlet/>
            </div>
        </>

    )
}

export default Layout;