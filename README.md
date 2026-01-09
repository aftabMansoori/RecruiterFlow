# Shipping Box

A simple app to calculate shipping costs for boxes being sent from India to different countries.

## What it does

You can add boxes with details like receiver name, weight, color, and destination country. The app calculates the shipping cost based on the weight and the country's rate. All your boxes are saved and you can view them in a list with pagination. Assupmtion 1Kg = 1Box.

## Getting started

First, install the dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run start
```

The app will open at `http://localhost:3000`.

## Features

- Add new boxes with receiver details, weight, color picker, and destination country
- View all boxes in a table with pagination (10 items per page)
- Shipping cost is calculated as weight × country rate
- Data is saved in your browser's local storage
- Responsive design that works on mobile and desktop

## Available countries

- Sweden: ₹7.35 per kg
- China: ₹11.53 per kg
- Brazil: ₹15.63 per kg
- Australia: ₹50.09 per kg

## Tech stack

Built with React, React Router for navigation, and CSS Modules for styling. State management is handled with React Context API.
