# Assignment_5  - Translator
## Description
This project is an online sign language translator that allows users to translate English words and short sentences into American sign language. It is a Single Page Application built using the React framework. The application has three main pages: the startup/login page, the translation page, and the profile page.
## Installation
To run this project on your local machine, follow the steps below:
Clone the repository: git clone https://github.com/your-username/online-sign-language-translator.git.
Navigate to the project directory: cd online-sign-language-translator.
Install the dependencies: npm install.
Start the development server: npm start.
## Usage
### Startup/Login Page
The first page the user sees is the startup/login page. Here, the user can enter their name and save it to the Translation API. The app will check if the user already exists, and if they do, they will automatically be redirected to the profile page. The browser's local storage is used to manage the session.
### Translation Page
Once the user is logged in, they will be taken to the profile page. In the navigation bar you can acess the translation page.
There, the user can type in the input box at the top of the page and click the "translate" button to trigger the translation. The translation will be stored using the API, and the sign language characters will appear in the "translated" box.
Special characters will trigger a Joker image in order to differenciate from normal characters.
### Profile Page
The profile page displays the last 10 translations for the current user. There is a button to clear the translations, which deletes the records from the API and no longer displays them on the profile page.
### Navigation Bar
The navigation bar gives the user the acess to Profile and Translation pages. By clicking the icon on the far right corner give, the logout option appears. The logout button returns the user to the start page.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
## Acknowledgements
This project was created as part of an assignment by Andrea Lorenzoni and Pedro Ferreira and is based on the requirements provided. The images for the sign language characters were provided as well.
