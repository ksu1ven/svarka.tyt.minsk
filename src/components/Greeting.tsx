import logo from '@assets/images/logo.avif';
import { Phone } from './small/Phone';

export function Greeting() {
    return (
        <section className="greeting-bg">
        <div className="greeting wrapper">
                <div className="greeting__img-container">
                    <img src={logo} alt="welding" className="greeting__img" />
          </div>
            <div className="greeting__content">
                  <Phone className="" />

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
