# Coding Challenge Project

This is a React project built with Create React App.

## What's Included

- **React 18**
- **Modern build setup** using Create React App
- **CSS modules** for styling

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

First, clone this repository and navigate to the project directory:

`cd coding-challenge`

Then install the project dependencies:

`npm install`

This will install all the necessary packages listed in `package.json`.

### Running the Development Server

To start the development server, run:

`npm start`

This will:

- Start the development server
- Open your browser to [http://localhost:3000](http://localhost:3000)
- Enable hot reloading (the page will automatically refresh when you make changes)

### Building for Production

When you're ready to deploy your app, create a production build:

`npm run build`

This creates an optimized build in the `build` folder that you can deploy to any static hosting service.

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Main application styles
├── index.tsx        # Application entry point
├── index.css        # Global styles
└── components/      # React components (if any)
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production

## env file

Add a .env.local file in the root
