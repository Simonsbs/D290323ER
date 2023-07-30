1. Build a user managment application
2. a user object will have the following fields: First name, Last name, email, password
3. build 5 components:
   a. Login - asks the user for his email and password, if correct alows access to the rest of the app. if not, notifies the user that info is wrong
   b. UserList - Lists all the users in the application. with the Edit and delete buttons. also includes a link/button to add a user
   c. UserForm - displays the form to add and/or edit a user. with a save and cancel button.
   d. RouterControl - a routing component that allows navigation between the different parts of the application.
   e. ** BONUS ** - Navigation - display a top navigation bar, that shows the application mae, the current logged in user (if any) and logo (if wanted).
4. all data needs to be saved in state only (will disapear if refreshed)
5. ** BONUS (R&D) ** - save the users to the "local storage" instead of just state (will stay in memory after refresh)
6. use bootstrap to design and format the site - (recomended CDN)
7. validate inputs, so that email is correct format, first name and last name are between 4-20 chars. and password is between 8-20 chars.
8. add seed data (inital data) make sure site has at least 1 user so you can login :)
