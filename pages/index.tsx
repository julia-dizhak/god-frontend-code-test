import React from 'react';
import useSWR from 'swr';
import { Spinner, Spacer } from 'vcc-ui';
import { Car } from '../interfaces/cars';
import { CarsList } from '../src/components/CarsList';
import { Text, Block } from 'vcc-ui';
import { container, title, subTitle } from './home.styles';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: React.FC = () => {
    const { data, error, isLoading } = useSWR<Car[]>('/api/cars', fetcher);

    if (error) return <div>Failed to load</div>;
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
            <CarsList cars={data} />;
        </>
    );
};

export default Home;
