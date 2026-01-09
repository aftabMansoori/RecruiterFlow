import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BoxProvider } from './context/BoxContext';
import Navbar from './components/Navbar';
import AddBox from './pages/AddBox';
import BoxList from './pages/BoxList';
import { ROUTES } from './constants';
import './App.css';

function App() {
    return (
        <BoxProvider>
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
        </BoxProvider>
    );
}

export default App;
