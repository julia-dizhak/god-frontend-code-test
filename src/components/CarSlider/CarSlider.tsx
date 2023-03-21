import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Car } from '../../interfaces/cars';
import CarItem from '../CarItem/CarItem';
import { useMediaQuery } from 'usehooks-ts';
import { Block, Flex, Spacer } from 'vcc-ui';
import { sliderContainer, navigationContainer } from './carSlider.styles';
import SwiperClass, { Pagination } from 'swiper';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

import 'swiper/css';
import 'swiper/css/pagination';

type CarSliderProps = {
    cars: Car[];
};

const SLIDES_SHOW_DEFAULT = 4;

const CarSlider = ({ cars }: CarSliderProps) => {
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    const isTablet = useMediaQuery('only screen and (min-width : 480px)');
    const isDesktop = useMediaQuery('only screen and (min-width : 1024px)');

    const slidesPerView = isDesktop ? 4 : isTablet ? 2.3 : 1.3;
    const showNavigation = isDesktop && (swiperRef?.slides?.length || 0) > SLIDES_SHOW_DEFAULT;

    swiperRef?.on('slideChange', (swiper) => {
        if (swiper.activeIndex === 0) {
            setPrevDisabled(true);
        } else if (swiper.activeIndex === (cars.length || 0) - SLIDES_SHOW_DEFAULT) {
            setNextDisabled(true);
        } else if (prevDisabled || nextDisabled) {
            setPrevDisabled(false);
            setNextDisabled(false);
        }
    });

    return (
        <Block extend={sliderContainer}>
            <Swiper
                className="mySwiper"
                onSwiper={setSwiperRef}
                spaceBetween={14}
                modules={[Pagination]}
                pagination={!showNavigation}
                speed={400}
                navigation={true}
                slidesPerView={slidesPerView}
            >
                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <CarItem car={car} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <Flex extend={navigationContainer}>
                    <PrevButton disabled={prevDisabled} onClick={() => swiperRef?.slidePrev()} />
                    <Spacer size={2} />
                    <NextButton disabled={nextDisabled} onClick={() => swiperRef?.slideNext()} />
                </Flex>
            )}
        </Block>
    );
};

export default CarSlider;
