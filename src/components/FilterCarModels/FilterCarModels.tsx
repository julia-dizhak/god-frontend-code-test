import React, { useContext, useMemo } from 'react';
import { SelectInput, Flex, Block } from 'vcc-ui';
import { CarModelsFilterContext } from '../../context/CarModelsFilterProvider';
import { filterContainer, container } from './filterCarModels.styles';

type FilterCarModelsProps = {
    modelsBodyTypes: string[];
};

export const FilterCarModels = ({ modelsBodyTypes }: FilterCarModelsProps) => {
    const { filter, setFilter } = useContext(CarModelsFilterContext);

    return (
        <Flex extend={filterContainer}>
            <Block extend={container}>
                <SelectInput
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    allowEmpty
                    label="Select a body type"
                >
                    {modelsBodyTypes.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </SelectInput>
            </Block>
        </Flex>
    );
};
