## Overview

This project is a To-Do List application developed using React, featuring user authentication. Users can register, log in, and manage their tasks securely and personally.

![Screenshot 2024-3-16 104039](https://github.com/SedrAlex/Simple-To-Do-List-Application/blob/master/src/assets/images/Screen%20Shot%202024-03-16%20at%2012.39.02%20PM.png)


![Screenshot 2024-3-16 104039](https://github.com/SedrAlex/Simple-To-Do-List-Application/blob/master/src/assets/images/Screen%20Shot%202024-03-16%20at%2012.39.55%20PM.png)

![Screenshot 2024-3-16 104039](https://github.com/SedrAlex/Simple-To-Do-List-Application/blob/master/src/assets/images/Screen%20Shot%202024-03-16%20at%2012.38.54%20PM.png)

## Features

- **User Authentication**: Registration and login forms for secure user access.

- **Task Management**: Users can add, view, edit, and delete tasks, with features to toggle task completion status and filter tasks.
- **Frontend Components and State Management**: Utilizes functional components with Hooks and Redux & Redux Toolkit for state management.
- **Styling and Responsiveness**: Styled with MUI for a visually appealing and responsive design.
- **Error Handling and Validation**: Input validation for registration and login forms, with clear error messages

### Prerequisites

- Node.js
- npm or yarn

## Backend Setup

Before using the frontend application, you need to set up and run the backend server. Follow these steps to get the backend server running:

1. **Clone the Repository**: Use `git clone https://github.com/SedrAlex/Task-Manager-API` to clone the repository.
2. **Navigate to Server Directory**: Use `cd server` to navigate to the project directory.
3. **Install Dependencies**: Run `npm install` to install all necessary dependencies.
4. **Configure Environment Variables**: Create a `config.env` file in the `src` directory and set the following environment variables:
   - `MONGO_URI`: Your MongoDB database URL
   - `PORT`: The port number on which your application will run
   - `TOKEN_SECRET_KEY`: Your JSON Web Token (JWT) secret key
5. **Start the Server**: Run `npm start` to start the server.
6. **Verify the Application is Running**: Open your web browser and navigate to `http://localhost:<PORT>`, replacing `<PORT>` with the port number you specified in the `.env` file.

### Frontend Setup

1. Clone the repository: `git clone https://github.com/SedrAlex/Simple-To-Do-List-Application.git`
2. Navigate to the project directory: `cd Simple-To-Do-List-Application`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

### Usage

1. **Register**: Navigate to the registration page and fill in the form with your desired username, email, and password.
2. **Login**: Go to the login page, enter your email and password, and log in.
3. **Manage Tasks**: Once logged in, you can add, view, edit, and delete tasks. Use the task management features to toggle task completion status and filter tasks.

# Technologies Used

  <li>React for building the user interface.</li>
  <li>Javascript</li>
  <li>Redux & Redux Toolkit for state management.</li>
  <li>Material UI for styling</li>
  <li>axios for fetching apis</li>
<li>framer-motion for adding dome animations</li>
<li>yup for form validation</li>
  <li>Vite</li>
  <li>CSS</li>
  <li>HTML</li>
</ul>

# Contact

email: sedra.mhanna313@gmail.com
