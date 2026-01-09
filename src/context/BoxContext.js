import React, { createContext, useState, useEffect } from 'react';
import { getBoxes, saveBox } from '../services/boxService';

export const BoxContext = createContext();

export const BoxProvider = ({ children }) => {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        const storedBoxes = getBoxes().reverse();
        setBoxes(storedBoxes);
    }, []);

    const addBox = (boxData) => {
        const newBox = saveBox(boxData);
        setBoxes(prevBoxes => [newBox, ...prevBoxes]);
        return newBox;
    };

    return (
        <BoxContext.Provider value={{ boxes, addBox }}>
            {children}
        </BoxContext.Provider>
    );
};
