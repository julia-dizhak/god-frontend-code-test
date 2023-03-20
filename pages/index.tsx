import React from 'react';
import useSWR from 'swr';
import { Spinner, Spacer } from 'vcc-ui';
import { Car } from '../interfaces/cars';
import { Text, Block, View } from 'vcc-ui';
import { container, title, subTitle } from './home.styles';
import CarSlider from '../src/components/CarSlider/CarSlider';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: React.FC = () => {
    const { data, error, isLoading } = useSWR<Car[]>('/api/cars', fetcher);

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
        <>
            <Block extend={container}>
                <Text subStyle="emphasis" as="h1" extend={title}>
                    Volvo Cars launches pure electric concept Recharge!
                </Text>
                <Text variant="bates" as="h2" extend={subTitle}>
                    Below the latest and greatest models:
                </Text>
            </Block>
            <Spacer size={10} />
            <CarSlider cars={data} />
        </>
    );
};

export default Home;
