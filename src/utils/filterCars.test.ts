import { filterCars } from './filterCars';

const mockCars = [
    {
        id: 'xc90-recharge',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '',
    },
    {
        id: 'xc60-recharge-1',
        modelName: 'XC100000 Recharge',
        bodyType: 'estate',
        modelType: '',
        imageUrl: '',
    },
    {
        id: 's60-recharge-2',
        modelName: 'S60 Recharge',
        bodyType: 'sedan',
        modelType: 'plug-in hybrid',
        imageUrl: '',
    },
    {
        id: 's60-recharge-3',
        modelName: 'S60 Recharge',
        bodyType: '',
        modelType: 'plug-in hybrid',
        imageUrl: '',
    },
    {
        id: 'xc90-recharge-2',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: '',
        imageUrl: '',
    },
];

describe('filteredCars', () => {
    // success cases
    test('capitalized body type', () => {
        const query = 'SUV';
        const filteredCars = filterCars(mockCars, query);

        expect(filteredCars.length).toEqual(2);
    });

    test('query consist empty space', () => {
        const query = '  sedan    ';

        const filteredCars = filterCars(mockCars, query);

        expect(filteredCars.length).toStrictEqual(1);
    });

    // edge cases
    test('cars are empty', () => {
        const query = 'SUV';
        const filteredCars = filterCars([], query);

        expect(filteredCars).toStrictEqual([]);
    });

    test('query is empty', () => {
        const query = '';
        const filteredCars = filterCars([], query);

        expect(filteredCars).toStrictEqual([]);
    });
});
