import React from 'react';
import useSWR from 'swr';
import { Spinner } from 'vcc-ui';
import { Car } from '../src/interfaces/cars';
import { Text, Block, View } from 'vcc-ui';
import { container, title, subTitle, filterContainer } from './home.styles';
import CarSlider from '../src/components/CarSlider/CarSlider';
import { FilterCarModels } from '../src/components/FilterCarModels/FilterCarModels';
import { fetcher, useCarsFiltered } from '../src/hooks/useCarsFiltered';

const Home: React.FC = () => {
    const { data, error, isLoading } = useSWR<Car[]>('/api/cars', fetcher);
    const { filteredCars, bodyTypes: modelsBodyTypes } = useCarsFiltered(data);

    if (error) {
        return (
            <View>
                <Text>
                    Sorry, something went wrong when trying to display our latest recharge cars. Please try again.
                </Text>
            </View>
        );
    }

    if (isLoading)
        return (
            <div className="spinner-wrapper">
                <Spinner size={24} />
            </div>
        );

    if (!data) return null;

    return (
        <section>
            <Block extend={container}>
                <Text subStyle="emphasis" as="h1" extend={title}>
                    Volvo Cars launches pure electric concept Recharge!
                </Text>
            </Block>

            <Block extend={filterContainer}>
                <Text variant="bates" as="h2" extend={subTitle}>
                    Below the latest and greatest models:
                </Text>
                <FilterCarModels modelsBodyTypes={modelsBodyTypes} />
                {filteredCars && <CarSlider cars={filteredCars} />}
            </Block>
        </section>
    );
};

export default Home;
