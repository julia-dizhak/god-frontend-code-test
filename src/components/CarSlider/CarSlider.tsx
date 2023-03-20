import { Swiper, SwiperSlide } from 'swiper/react';
import { Car } from '../../../interfaces/cars';
import { CarItem } from '../CarItem/CarItem';

import 'swiper/css';


type CarSliderProps = {
    cars: Car[];
};

const CarSlider = ({ cars }: CarSliderProps) => {
    return (
        <>
            <Swiper spaceBetween={0} speed={400} navigation={true}>
                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <CarItem car={car} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CarSlider;
