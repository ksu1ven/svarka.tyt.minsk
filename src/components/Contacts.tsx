import phone from '@assets/images/phone.png';
import media from '@assets/images/network.png';
import email from '@assets/images/email.png';
import instagram from '@assets/images/instagram.png';
import telegram from '@assets/images/telegram.png';
import { Link } from 'react-router-dom';
import { Phone } from './small/Phone';

export function Contacts() {
    return (
        <section className="contacts wrapper" id="contacts">
            <h2 className="contacts__h2">Свяжитесь с нами</h2>
        <div className="contacts__blocks">
                <div className="contacts__block">
            <div className="contacts__img-container">
                        <img src={phone} alt="phone icon" className="phone" />
                    </div>
                    <h3 className="contacts__h3">Телефон</h3>
                    <Phone className="small" />
          </div>
            <div className="contacts__block">
                  <div className="contacts__img-container">
                      <img src={media} alt="media icon" className="media" />
                    </div>
                    <h3 className="contacts__h3">Социальные сети</h3>
                  <Link
                        to="https://www.instagram.com/svarka.tyt.minsk/"
                target="blank"
                        className="contacts__link contacts__link_media"
                        rel="nofollow"
              >
                <img src={instagram} alt="instagram" className="icon" />
                <span>
                          Мы в Instagram
                            <br />
                          svarka.tyt.minsk
                        </span>
              </Link>
                  <Link
                      to="https://t.me/+vjQYB387bY5lZTZi"
                      target="blank"
                        className="contacts__link contacts__link_media"
                      rel="nofollow"
                    >
                        <img src={telegram} alt="telegram" className="icon" />
                      <span>Группа в Telegram</span>
                    </Link>
                </div>
                <div className="contacts__block">
            <div className="contacts__img-container">
                      <img src={email} alt="email icon" className="email" />
                    </div>
                    <h3 className="contacts__h3">Email</h3>
            <Link
                        to="mailto:igorosechkin2407@gmail.com"
                        target="blank"
                      className="contacts__link"
                        rel="nofollow"
                    >
                        igorosechkin2407@gmail.com
                    </Link>
          </div>
          </div>
      </section>
    );
}
