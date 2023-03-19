import React from 'react'
import {AppProps} from 'next/app'
import {StyleProvider, ThemePicker} from 'vcc-ui';

export default function HomePage({Component, pageProps}: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}
