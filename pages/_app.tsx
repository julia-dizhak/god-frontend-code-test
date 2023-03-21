import React from 'react';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../src/css/styles.css';
import { CarModelsFilterProvider } from '../src/context/CarModelsFilterProvider';

const HomePage = ({ Component, pageProps }: AppProps) => {
    return (
        <StyleProvider>
            <ThemePicker variant="light">
                <React.StrictMode>
                    <CarModelsFilterProvider>
                        <Component {...pageProps} />
                    </CarModelsFilterProvider>
                </React.StrictMode>
            </ThemePicker>
        </StyleProvider>
    );
};
export default HomePage;
