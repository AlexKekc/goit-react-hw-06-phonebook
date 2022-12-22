# Contact book

Refactored the "Contact Book" application code by adding state control using the
[Redux Toolkit] library (https://redux-toolkit.js.org/). The Redux state look
like this:

``hell { contacts: [], filter: "" }

- Created a repository with `configureStore()`
- Used `createSlice()`
- Created actions to save and delete a contact, and update the filter
- Linked React-components to Redux-logic with bibliothec hooks
  [react-redux](https://react-redux.js.org/)
- Used the Redux Persist library to save an array of contacts to local storage
