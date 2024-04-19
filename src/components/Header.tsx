import { NavLink } from 'react-router-dom';

export function Header() {
    const handleChange = (el: HTMLInputElement) => {
        if (el.checked) document.body.style.setProperty('overflow', 'hidden');
        else document.body.style.removeProperty('overflow');
    };

    return (
        <header className="header-bg">
            <nav className="nav wrapper">
                {window.innerWidth <= 768 && (
                    <>
                        <input
                            id="menu__toggle"
                            type="checkbox"
                            onChange={(e) => handleChange(e.target)}
                        />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <div />
                            <div />
                            <div />
                        </label>
                    </>
                )}
                <ul className="nav__list">
                    <li>
                        <NavLink to="#" className="nav__link">
                            Услуги
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="nav__link">
                            Примеры работ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="nav__link">
                            Форма для связи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className="nav__link">
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
