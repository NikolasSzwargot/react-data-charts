# Prerequisites

Before running the pproject makke sure you have installed:

- [Node.js](https://nodejs.org/en/download)
- Yarn

After installing Node.js install Yarn:

```bash
npm install --global yarn
```

# Project setup

## Install dependencies

To install dependencies go to `data-charts` directory

```bash
cd data-charts
```

Once in `data-charts` directory run:

```bash
yarn install
```

# Running the app

To run the app after installing dependencies, in `data-charts` directory run:

```bash
yarn dev
```

Now the project should run on `http://localhost:5173/`

# About the project

## About tech

The project uses React framework with Tailwindcss, to make styling the components easier and Highcharts for displaying charts.

## About app

The web application shows dashboard with three charts, representing data from given `data.json`.

### First chart - revenue by day
The first chart is a line chart, which shows revenue by day. The motivation for aggregating this data was quite simple: I wanted to show the user how much revenue was generated from orders each day and how the trend changes over time, which is important for sales management.

### Second chart - orders by category
The second chart focuses on showing the user how many products were ordered from each category, displayed as a sorted column chart. It shows the client which product categories sell the most or the least compared to the others.

### Third chart - Orders by country on map
The third chart focuses on the number of orders by country. I used a map chart with a topological map of Europe because the dataset contains only orders from EU countries. This visualization helps indicate which countries the company should focus on when introducing new solutions and increasing sales.