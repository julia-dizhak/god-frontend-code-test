import React, { useContext } from 'react';
import { SelectInput, Flex, Block, useTheme } from 'vcc-ui';
import { CarModelsFilterContext } from '../../context/CarModelsFilterProvider';
import { filterContainer } from './filterCarModels.styles';

type FilterCarModelsProps = {
    modelsBodyTypes: string[];
};

const FilterCarModels = ({ modelsBodyTypes }: FilterCarModelsProps) => {
    const { breakpoints } = useTheme();
    const { filter, setFilter } = useContext(CarModelsFilterContext);

    return (
        <Flex extend={filterContainer}>
            <Block
                extend={{
                    [breakpoints.untilM]: {
                        width: '100%',
                    },
                    width: '40%',
                }}
            >
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

export default FilterCarModels;
