# Shipping Box App

Simple app to calculate shipping costs for boxes. Add boxes, pick colors, select countries, done.

## What it does

You can add boxes with details like receiver name, weight, color, and destination country. The app calculates the shipping cost based on the weight and the country's rate. All your boxes are saved and you can view them in a list with pagination. Assupmtion 1Kg = 1Box.

## Getting started

First, install the dependencies:

```bash
npm install
npm run start
```

Opens at `http://localhost:3000`

## What it does

- Add boxes with receiver name, weight, color, and destination
- View all boxes in a table (10 per page)
- Calculates shipping cost = weight × country rate
- Saves everything in localStorage

## Countries & Rates

- Sweden: ₹7.35/kg
- China: ₹11.53/kg  
- Brazil: ₹15.63/kg
- Australia: ₹50.09/kg

## Tech Stuff

- React
- Redux Toolkit (state management)
- Material UI (components)
- React Hook Form (forms)
- React Router (navigation)
- localStorage (data persistence)
