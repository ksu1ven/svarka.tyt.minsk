import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y, Scrollbar, Zoom } from 'swiper/modules';
import SwiperArray from '@assets/images/swiper/index.ts';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss/scrollbar';
import 'swiper/css/zoom';

export function Examples() {
    const EXAMPLES = SwiperArray;

    return (
        <section className="examples-bg" id="examples">
            <div className="examples wrapper">
                <h2 className="examples__h2">Примеры наших работ</h2>
                <div className="examples__content">
                    <Swiper
                        className="examples-swiper"
                        modules={[Navigation, Keyboard, A11y, Scrollbar, Zoom]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        lazyPreloadPrevNext={1}
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
                        {EXAMPLES.map((el: string, ind: number) => (
                            <SwiperSlide className="examples-slide" key={ind}>
                                <div className="swiper-zoom-container">
                                    <img
                                        src={el}
                                        alt="work example"
                                        className="examples__img"
                                        loading="lazy"
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
