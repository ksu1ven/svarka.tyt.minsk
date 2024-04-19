import { Link } from 'react-router-dom';
import logo from '@assets/images/logo.png';
import viber from '@assets/images/viber.png';
import telegram from '@assets/images/telegram.png';

export function Greeting() {
    return (
        <section className="greeting-bg">
            <div className="greeting wrapper">
                <div className="greeting__img-container">
                    <img src={logo} alt="welding" className="greeting__img" />
                </div>
                <div className="greeting__content">
                    <div className="contacts">
                        <Link to="https://t.me/anna_osechkina">
                            <img
                                src={telegram}
                                alt="telegram"
                                className="contacts__icon"
                            />
                        </Link>
                        <Link
                            to="viber://chat?number=%2B375445547883"
                            className="contacts__icon"
                        >
                            <img src={viber} alt="viber" />
                        </Link>
                        <Link to="tel:+375445547883">+375 (44) 554-78-83</Link>
                    </div>
                    <h1 className="greeting__h1">
                        Сварочные работы <span>в г. Минске</span>
                    </h1>
                    <p className="greeting__p">
                        Добро пожаловать в svarka.tyt.minsk, где мы сочетаем
                        качество сварки с функциональностью и надёжностью.
                        Многолетний опыт работы с металлом.
                    </p>
                </div>
            </div>
        </section>
    );
}
