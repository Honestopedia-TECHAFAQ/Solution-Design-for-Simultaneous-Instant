# Multi-Tab Screenshot Electron Application

This project is designed to capture full-page screenshots from multiple browser tabs simultaneously using Electron and Puppeteer. The application features a user-friendly GUI to input URLs and trigger the screenshot process.

## Features

* Capture full-page screenshots of multiple URLs at the same time.
* User-friendly GUI for entering URLs and starting the screenshot capture.
* Screenshots include the entire webpage, including parts not currently visible on the screen.
* Capable of handling up to 200 different tabs simultaneously.

## Requirements

* Node.js and npm (Node Package Manager)
* Windows 10 (the project can be adapted for other operating systems)

## Installation and Setup

### 1. Install Node.js and npm

Ensure that Node.js and npm are installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

### 2. Clone the Repository

Create a new directory for your project and navigate into it using the command line. Then, clone the repository into this directory:

cd multi-tab-screenshot-electron


### Initialize the Node.js Project

Within your project directory, initialize the project by creating a `package.json` file:

npm init -y


### . Install Required Packages

To install the necessary dependencies, run the following commands:

npm install puppeteer

npm install electron --save-dev

npm install electron-packager --save-dev


### Project Structure

The main files in the project include:

* **main.js** : Manages the Electron application lifecycle and GUI window.
* **capture_screenshots.js** : Contains the Puppeteer logic to capture screenshots.
* **index.html** : Defines the GUI interface for the user.
* **style.css** : Provides styling for the GUI.
* **renderer.js** : Handles user interaction and triggers the screenshot capture process.
* **package.json** : Configuration file for Node.js, including dependencies and scripts.

### 6. Running the Application

To start the Electron application and launch the GUI, run:

npm start


This command initializes the Electron app, opening the GUI where you can input URLs and trigger the screenshot capture process.

## Using the Application

1. **Enter URLs:** Type or paste the URLs you want to capture into the provided text area, one per line.
2. **Capture Screenshots:** Click the "Capture Screenshots" button to start the process.
3. **View Output:** The application will process each URL, capture the screenshots, and notify you upon completion. The screenshots will be saved in the `screenshots` folder within the project directory.

## Understanding the Code

* **main.js** : Initializes the Electron app, setting up the main window and loading the HTML file for the GUI.
* **capture_screenshots.js** : Uses Puppeteer to open each URL, scroll to capture the full page, and save screenshots to the specified directory.
* **index.html** : Provides the user interface where URLs are entered and the screenshot process is initiated.
* **style.css** : Applies styles to the HTML elements to create a clean and user-friendly interface.
* **renderer.js** : Listens for user actions in the GUI and executes the screenshot capture script when triggered.
