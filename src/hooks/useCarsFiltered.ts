import { CarModelsFilterContext } from '../context/CarModelsFilterProvider';
import { useMemo, useContext } from 'react';
import { Car } from '../interfaces/cars';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCarsFiltered = (cars: Car[] | undefined) => {
    const { filter } = useContext(CarModelsFilterContext);

    const carBodyTypes = useMemo(() => cars && cars.map(({ bodyType }) => bodyType), [cars]);
    const bodyTypes = [...new Set(carBodyTypes)];

    const filteredCars = cars && cars?.length > 0 && cars?.filter((car) => car.bodyType.includes(filter));

    return {
        filteredCars,
        bodyTypes,
    };
};
