import viber from '@assets/images/viber.png';
import telegram from '@assets/images/telegram.png';
import { Link } from 'react-router-dom';

export function Phone({ className }: Record<'className', string>) {
    return (
        <div className={`phone phone_${className}`}>
        <div className="phone__icons">
                <Link
            to="https://t.me/svarkatytminsk"
            target="_blank"
                    rel="nofollow"
          >
            <img src={telegram} alt="telegram" className="icon" />
          </Link>
                <Link
            to="viber://chat?number=%2B375445547883"
            target="_blank"
                    rel="nofollow"
          >
            <img src={viber} alt="viber" className="icon" />
          </Link>
            </div>

        <Link to="tel:+375445547883" rel="nofollow">
              +375 (44) 554-78-83
            </Link>
      </div>
    );
}
