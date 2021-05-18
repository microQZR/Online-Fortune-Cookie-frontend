# Online Fortune Cookie (frontend)

## Description
* This project is the frontend part of a fullstack MERN application and is built with React using "Create-React-App".

* It is a virtual fortune cookie dispenser which rewards the user with virtual fortune cookies for correctly answering trivia questions.

* Trivia questions are fetched from a MongoDB database through a backend application built using Express.js and user submitted answers are validated the same way.

* An all-time top scorers/cookie-earners record list is also stored on a MongoDB database and that list is viewable to all users.

## Live Demo
Try a running demo of the full application [here](https://online-fortune-cookie.netlify.app).

## Installation, build and deployment
See the file ["Create-React-App-README.md"](./Create-React-App-README.md).

The network origin used to fetch backend API resources is defined in an environment variable named: _REACT_APP_BACKEND_URL_\
This variable has a default value of: http://localhost:5000 \
If it is desired to fetch resources from another origin, the value of this variable may be changed for example in the file [".env"](./.env).

## Attributions
This project makes use of:
* [React](https://github.com/facebook/react)
* [Create-react-app](https://github.com/facebook/create-react-app) (and its dependencies)

Graphical assets in the folder ["./src/graphic-assets/vecteezy/"](./src/graphic-assets/vecteezy/) are obtained from "https://www.vecteezy.com/vector-art/90544-free-fortune-cookie-vectors" under the "Free License" of the ["Vecteezy License Agreement"](https://www.vecteezy.com/licensing-agreement).

## Important
Contents in the folder ["./src/graphic-assets/vecteezy/"](./src/graphic-assets/vecteezy/) are excluded from and NOT covered under the GPLv3 license of the current project. They are under the copyright of the original owner and are subject to the ["Vecteezy License Agreement"](https://www.vecteezy.com/licensing-agreement). They are listed in this project only for demonstration purposes. If you need them, please download them explicitly from "https://www.vecteezy.com/vector-art/90544-free-fortune-cookie-vectors" and read their licensing terms and agreement before using such contents. DO NOT download or use such contents originating from this project's repository.
