import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { stripePublicKey } from 'config';

const stripePromise = loadStripe(stripePublicKey);

const App = () => {
    const customization = useSelector((state) => state.customization);

<<<<<<< HEAD
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Elements stripe={stripePromise}>
                        <Routes />
                    </Elements>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
=======
    const appPage = useCallback(() => {
        console.log('token: ', auth.token);
        if (!auth.token) {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={themes(customization)}>
                        <CssBaseline />
                        <NavigationScroll>
                            <Elements stripe={stripePromise}>
                                <Login />
                            </Elements>
                        </NavigationScroll>
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        }

        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Elements stripe={stripePromise}>
                            <Routes />
                        </Elements>
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        );
    }, [auth]);

    return appPage();
>>>>>>> 6f190ac (fix: route)
};

export default App;
