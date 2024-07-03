# Building Express Application

## Overview

This project is a simple Express application built as part of the Per Scholas Software Engineering Program. The objective is to practice and demonstrate skills in creating and managing an Express.js application, implementing routes, middleware, and serving static files.

## Features

- **EJS Templating**: Utilizes EJS as the template engine for rendering dynamic HTML pages.
- **Logging**: Integrates Morgan for HTTP request logging and custom logging for all requests.
- **Static Files**: Serves static files from the `public` directory.
- **Form Handling**: Includes routes for form submissions and demonstrates how to handle POST requests.
- **File Download**: Allows users to download a file directly from the server.

## Technologies Used

- **Node.js**
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Morgan**: HTTP request logger middleware for node.js.
- **EJS**: Embedded JavaScript templating.

## Project Structure

- `server.js`: Main server file that sets up the Express app and routes.
- `views/`: Contains EJS templates for rendering responses.
  - `home.ejs`: Template for the home page.
  - `profile.ejs`: Template for the profile page.
  - `user.ejs`: Template that displays user profiles dynamically.
- `public/`: Directory for static files like images, CSS, and JavaScript.

## Installation

To run this project locally:

1. Clone the repository:

```bash
   git clone <repository-url>
```

2. Navigate to the project directory:

```bash
   cd <project-directory>
```

3. Install dependencies:

```bash
   npm install
```

4. Start the server:

```bash
   npm start
```

The server will be available at http://localhost:3000.

## Usage

- Navigate to http://localhost:3000/ to see the home page.
- Go to /profile to view the profile page.
- Visit /user/John to see a dynamic user profile page.
- Submit forms to test POST requests and file downloading.
