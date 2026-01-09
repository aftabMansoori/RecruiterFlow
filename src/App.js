import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { loadBoxes } from './store/boxSlice';
import Navbar from './components/Navbar';
import AddBox from './pages/AddBox';
import BoxList from './pages/BoxList';
import { ROUTES } from './constants';
import './App.css';

function AppContent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBoxes());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path={ROUTES.ADD_BOX} element={<AddBox />} />
                        <Route path={ROUTES.BOX_LIST} element={<BoxList />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
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
