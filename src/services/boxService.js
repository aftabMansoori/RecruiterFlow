import { STORAGE_KEY, SHIPPING_RATES } from '../constants';

export const getBoxes = () => {
    const boxes = localStorage.getItem(STORAGE_KEY);
    if (boxes) {
        return JSON.parse(boxes);
    }
    return [];
};

export const saveBox = (boxData) => {
    const boxes = getBoxes();

    const newBox = {
        id: Date.now(),
        receiverName: boxData.receiverName,
        weight: boxData.weight,
        boxColour: boxData.boxColour,
        destinationCountry: boxData.destinationCountry,
        shippingCost: calculateShippingCost(boxData.weight, boxData.destinationCountry)
    };

    boxes.push(newBox);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boxes));

    return newBox;
};

export const calculateShippingCost = (weight, country) => {
    const countryData = SHIPPING_RATES[country];
    if (countryData && weight > 0) {
        return weight * countryData.rate;
    }
    return 0;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
};

export const getPaginatedBoxes = (boxes, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return boxes.slice(startIndex, endIndex);
};

export const getTotalPages = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems / itemsPerPage);
};
