import { useRef } from 'react';

export function Header() {
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const handleChange = (el: HTMLInputElement) => {
        if (el.checked) document.body.style.setProperty('overflow', 'hidden');
        else document.body.style.removeProperty('overflow');
    };

    const handleClick = () => {
        if (inputRef.current && listRef.current) {
            inputRef.current.checked = false;
            document.body.style.removeProperty('overflow');
        }
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
                        ref={inputRef}
                      />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="menu__btn" htmlFor="menu__toggle">
                        <div />
                        <div />
                        <div />
                        </label>
                </>
          )}
                <ul className="nav__list" ref={listRef}>
            <li>
                        <a
                href="#services"
                            className="nav__link"
                onClick={handleClick}
              >
                            Услуги
              </a>
                    </li>
                    <li>
                    <a
                          href="#examples"
                            className="nav__link"
                            onClick={handleClick}
                        >
                            Примеры работ
                        </a>
                  </li>
                    <li>
                    <a
                          href="#price"
                            className="nav__link"
                          onClick={handleClick}
                        >
                            Расчёт цены
                        </a>
                  </li>
            <li>
                        <a
                href="#contacts"
                className="nav__link"
                onClick={handleClick}
              >
                            Контакты
              </a>
                    </li>
          </ul>
          </nav>
      </header>
    );
}
