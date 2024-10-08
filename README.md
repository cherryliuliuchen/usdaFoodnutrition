﻿# Technical Project Description for food nutrition analysis application
[![Node.js Version](https://img.shields.io/badge/node.js-14%2B-brightgreen.svg)](https://nodejs.org/)

> The food nutrition analysis application is a web-based tool designed to provide users with detailed nutrition information and advice on healthy eating. It is built using Node.js for the backend and integrates with the [USDA API](https://api.nal.usda.gov/) for food nutrition data. The frontend will be developed using React.

> The application comprises several key modules, each serving a specific purpose for users. These modules include food search, user-selected foods, and user registration/login. Additionally, there will be a module for users to create customized food lists.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cherryliuliuchen/usdaFoodnutrition.git
   ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Create a .env file in the root directory and configure the environment variables:
    ```bash
    PORT=3000
    DATABASE_URL=your-database-url
    JWT_SECRET=your-jwt-secret
    ```

2. Start the server:
    ``` bash
    npm start
    ```
    The server will run on http://localhost:3000.

3. For development, you can use:
    ```bash
    npm run dev
    ```

## Features
The application comprises several key modules, each serving a specific purpose for users. These modules include food search, user-selected foods, and user registration/login. Additionally, there will be a module for users to create customized food lists.

## API Endpoints
Below is an overview of the API endpoints available in this project:

| Method | Endpoint                                               | Description                                            |
|--------|--------------------------------------------------------|--------------------------------------------------------|
| GET    | http://localhost:5000/api/food/search?query={search}   | Retrieves a list of foods based on the search query.   |
| POST   | http://localhost:5000/api/food/{fdcId}                 | Retrieves specific food nutrition details by `fdcId`.  |
| POST   | http://localhost:5000/api/user/register                | Registers a new user with name, email, and password.   |
| POST   | http://localhost:5000/api/user/login                   | Authenticates a user and provides a login token.       |


## Contact
If you have any questions or feedback, feel free to contact me:

> Email: cherryliuliuchen@gmail.com

