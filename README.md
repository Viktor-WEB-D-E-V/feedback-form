# Feedback Form with Local Storage

This project implements a feedback form that saves user input to `localStorage` and restores it upon page reload. 

## Features
- Saves form data to `localStorage` on input (debounced at 500ms).
- Restores input values when the page reloads.
- Clears storage on successful form submission.

## Technologies Used
- HTML, CSS, JavaScript
- `lodash.throttle`
- Local Storage API

## Setup & Usage
1. Clone this repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Open `index.html` in a browser.

## File Structure
```
src/
│-- index.html
│-- css/
│   ├── common.css
│   ├── feedback.css
│-- js/
│   ├── feedback.js
│   ├── storage.js
```

## How It Works
1. The form listens for input events and saves data to `localStorage` every 500ms.
2. Upon page load, the script checks for stored data and pre-fills the form.
3. When submitted, the form validates input fields and then clears `localStorage`.
4. Uses `storage.js` to abstract `localStorage` operations.
