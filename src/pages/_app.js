// pages/_app.js

import React from 'react';
import { MantineProvider } from '@mantine/core';
import '../../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
