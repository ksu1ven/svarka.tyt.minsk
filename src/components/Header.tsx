import logo from '@assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header-bg">
            <div className="header wrapper">
                <div className="header__contacts">
                    <img src={logo} alt="logo" className="header__logo" />
                    <Link to="tel:+375291963728">+375 (29) 196-37-28</Link>
                </div>
                <nav className="nav">
                    {window.innerWidth <= 768 && (
                        <figure className="burger-icon">
                            <div />
                            <div />
                            <div />
                        </figure>
                    )}
                    <ul className="nav__list">
                        <li>
                            <NavLink to="#">Услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Примеры работ</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Форма для связи</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
