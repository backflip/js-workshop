# Workshop

## Prerequisites

- Docker
- Node

## Setup

1. `npm install`: Install dependencies for static frontend and build process
2. `npm run wordpress`: See below
3. Open `http://localhost:8080`
4. Create WordPress user
5. Install `Twenty Nineteen` theme via admin UI
6. Enable `Workshop` child theme via admin UI
7. `npm run build`: See below

## Run

`npm start`

- Runs `npm run wordpress` (see below)
- Runs `npm run frontend` (see below)

## Run WordPress only

`npm run wordpress`

- Creates a docker setup with WordPress and MySQL, expose WordPress on `http://localhost:8080`. See configuration in `./stack.yml`.

## Run static frontend only

`npm run frontend`

- Starts a static webserver on `http://localhost:5000`, serving `./frontend`.

## Build JavaScript with Webpack and Babel

`npm run build`

- Reads `./frontend/src/script.js` and generates `./frontend/dist/script.js`.
