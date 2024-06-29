import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y, Scrollbar, Zoom } from 'swiper/modules';
import SwiperArray from '../assets/images/swiper'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss/scrollbar';
import 'swiper/css/zoom';

export function Examples() {
    const slidesPerView = window.innerWidth > 768 ? 2 : 1;

    const EXAMPLES:string[]=SwiperArray;



    return (
        <section className="examples-bg" id="examples">
            <div className="examples wrapper">
                <h2 className="examples__h2">Примеры наших работ</h2>
                <div className="examples__content">
                    <Swiper
                        className="examples-swiper"
                        modules={[Navigation, Keyboard, A11y, Scrollbar, Zoom]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        speed={600}
                        navigation
                        keyboard
                        zoom
                        scrollbar={{
                            hide: true,
                        }}
                        a11y={{
                            prevSlideMessage: 'Previous slide',
                            nextSlideMessage: 'Next slide',
                        }}
                    >
                        {EXAMPLES.map((el, ind) => (
                            <SwiperSlide className="examples-slide" key={ind}>
                                <div className="swiper-zoom-container">
                                    <img
                                        src={el}
                                        alt="work example"
                                        className="examples__img"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="examples__p">
                        Выполняем работы любой сложности и дизайна с учётом
                        Ваших пожеланий.
                    </p>
                </div>
            </div>
        </section>
    );
}
