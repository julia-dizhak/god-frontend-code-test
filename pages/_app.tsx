import React from 'react';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';

const HomePage = ({ Component, pageProps }: AppProps) => {
    return (
        <StyleProvider>
            <ThemePicker variant="light">
                <React.StrictMode>
                    <Component {...pageProps} />
                </React.StrictMode>
            </ThemePicker>
        </StyleProvider>
    );
};
export default HomePage;
