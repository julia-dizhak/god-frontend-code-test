import React from 'react';
import useSWR from 'swr';
import { Spinner } from 'vcc-ui';
import { Car } from '../interfaces/cars';
import { CarsList } from '../src/components/CarsList';

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

    return <CarsList cars={data} />;
};

export default Home;
