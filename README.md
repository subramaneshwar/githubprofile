# GitHub User Card App

The GitHub User Card App is a simple web application that allows users to enter a GitHub username. Upon submission, it fetches the public information of the user from GitHub's API and displays it in a beautifully designed card with a user-friendly interface.

## Features

- **User Input Form:** Users can input a GitHub username.
- **GitHub API Integration:** The app utilizes the GitHub API to fetch public user information.
- **Nicely Designed User Card:** Displays user information in a visually appealing card format.
- **User Information Displayed:**
  - Avatar Image (avatar_url)
  - Username (login)
  - Name (name)
  - Number of Public Repositories (public_repos)
  - Number of Public Gists (public_gists)
  - Profile Created At (created_at) in YYYY-MM-DD format.
    
![image](https://github.com/subramaneshwar/githubprofile/assets/42493880/1d751155-d138-4eb8-b98c-958bf84ae349)

## Technologies Used

- **React.js:** Used for building the user interface and handling user interactions.
- **Tailwind CSS:** Utilized for styling the application, creating a modern and responsive design.
- **GitHub API:** Used to fetch public user information based on the provided username.

## Usage

1. Enter a valid GitHub username in the input field.
2. Click the "Submit" button.
3. The app will fetch the user's public information and display it in a stylish card format.
4. You can reset or clear the input field to search for another user.

## Installation

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Access the application in your web browser at the provided URL.

Feel free to explore, contribute, and customize the GitHub User Card App to suit your preferences and needs.

## License

This project is licensed under the [MIT License](LICENSE).
