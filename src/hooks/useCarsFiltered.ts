import { CarModelsFilterContext } from '../context/CarModelsFilterProvider';
import { useMemo, useContext } from 'react';
import { Car } from '../interfaces/cars';
import { filterCars } from '../utils/filterCars';

export const useCarsFiltered = (cars: Car[] | undefined) => {
    const { filter } = useContext(CarModelsFilterContext);

    const carBodyTypes = useMemo(() => cars && cars.map(({ bodyType }) => bodyType), [cars]);
    const bodyTypes = [...new Set(carBodyTypes)];

    const filteredCars = filterCars(cars, filter);

    return {
        filteredCars,
        bodyTypes,
    };
};
