import { Car } from '../interfaces/cars';

export const filterCars = (cars: Car[] | undefined, queryString: string) => {
    const replacedQueryString = queryString.toLocaleLowerCase().trim();

    if (!cars || queryString === '') return [];

    const filteredCars = cars.filter((car) => car.bodyType.includes(replacedQueryString));

    return filteredCars;
};
