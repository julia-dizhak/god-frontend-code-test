import React, { useContext, useMemo } from 'react';
import { SelectInput, Flex, Block } from 'vcc-ui';
import { CarModelsFilterContext } from '../../../context/CarModelsFilterProvider';
import { Car } from '../../../interfaces/cars';
import { filterContainer, container } from './filterCarModels.styles';

type FilterCarModelsProps = {
    cars: Car[];
};

export const FilterCarModels = ({ cars }: FilterCarModelsProps) => {
    const { filter, setFilter } = useContext(CarModelsFilterContext);

    const carBodyTypes = useMemo(() => cars.map(({ bodyType }) => bodyType), [cars]);
    const bodyTypes = [...new Set(carBodyTypes)];

    return (
        <Flex extend={filterContainer}>
            <Block extend={container}>
                <SelectInput
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    allowEmpty
                    label="Select a body type"
                >
                    {bodyTypes.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </SelectInput>
            </Block>
        </Flex>
    );
};
