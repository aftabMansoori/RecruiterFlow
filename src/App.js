import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from 'store/store';
import { loadBoxes } from 'store/boxSlice';
import { theme } from './theme';
import Navbar from 'components/Navbar';
import AddBox from 'pages/AddBox';
import BoxList from 'pages/BoxList';
import { ToastProvider } from 'components/Toast';
import { ROUTES } from 'constants';

function AppContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBoxes());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastProvider>
                <BrowserRouter>
                    <section>
                        <Navbar />
                        <div>
                            <Routes>
                                <Route path={ROUTES.ADD_BOX} element={<AddBox />} />
                                <Route path={ROUTES.BOX_LIST} element={<BoxList />} />
                            </Routes>
                        </div>
                    </section>
                </BrowserRouter>
            </ToastProvider>
        </ThemeProvider>
    );
}

function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
