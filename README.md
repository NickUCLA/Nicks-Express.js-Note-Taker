# Nicks-Express.js-Note-Taker

## Description:

The Note Taker application allows users to write, save, and manage notes. The application utilizes an Express.js back end to store and retrieve note data from a JSON file. Users can organize their thoughts, keep track of tasks, and access their notes easily through this application.

## Table of Contents:

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage Instructions](#usage-instructions)
- [Screenshots](#screenshots)
- [Installation Process](#installation-process)
- [Built With](#built-with)
- [Author](#author)

## User Story:

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria:

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Usage Instructions:

1. Open your terminal and navigate to the project directory.

2. Run the following command to install the required dependencies:
   ```
   npm install
   ```
3. Start the application by running the following command:
   ```
   node server.js
   ```
4. Open your web browser and navigate to http://localhost:3001 to access the Note Taker application.

5. On the landing page, click on the "Get Started" button to access the notes page.

6. In the notes page, you can view existing notes on the left-hand column and create new notes on the right-hand column. Fill in the note title and note text, and then click the "Save" icon in the navigation to save the note.

7. Click on an existing note in the left-hand column to view its content on the right-hand column.

8. To create a new note, click on the "Write" icon in the navigation to clear the fields and enter new content.

## Screenshots

Landing Page with Link to Notes Page
Landing Page

Notes Page with Existing Notes
Notes Page

Creating and Saving a New Note
Create and Save Note

## Installation Process

1. Clone the repository:

```
git clone https://github.com/your-username/note-taker.git
```

2. Navigate to the project directory:

```
cd note-taker
```

3. Install dependencies:

```
npm i
```

4. Start the application:

```
node server.js
```

## Built With

- JavaScript
- Node.js
- Express.js
- UUID (for generating unique IDs)
- HTML
- CSS

## Author

Follow me on GitHub at NickUCLA. Feel free to email me at nheal179@gmail.com with any questions or comments.

© YEAR NickUCLA. Confidential and Proprietary. All Rights Reserved.
