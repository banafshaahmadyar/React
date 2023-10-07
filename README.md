 # Students managment system 

## Project description

1: Student Information Management System.<br>

2: Store the First name of the student.

3: Store the Last name of the student.

4: Store the unique Roll number for every student.

5: Store the Email Address of every student.

6: Store the courses registered by the student.

## site veiw 

![Alt text](image.png)


## User stories

| Category  | as      | I want to                      | so that I can                                                                                    | 
| --------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| App name      | site user    | can see app name         | So that is Students managment system                                                           |
| Logo      | Site user    | can see logo in this app        | that is before app name                                                               |
| Background color of header      | Site user    | can see background color of header        | That the color is black                                                                                     |
| Content of header     | Site user | view LOGO , App name            | That is all content in header                                                                   |
| Navigation bar     | visitor | view the navgation bar         | so that is in right side of this app                                                  |
| Navigation bar content     | visitor | I can see Home, Students list , manage student and Registration page          | That is all content of navgation bar                                                      |
| Home     | site user | I can see home in navgation  | so that I added thre images here                                                                  |
| Images in home page     | site user    | can change the image that I added in home page        | the image showing like slaid show                                                                     |
| Students list     | site user    | see student list on navigation bar                  | o that on here we can see all details of students that we submit in add student bottom                                                                     |
| Student list page content ID     | site user    | see list of ID              | so that added for each students                                                              |
| Student list page content First name     | Site user    |  can see First Name of student     | so that Entered for each student                                                         |
| Student list page content Last Name     | Site user    | can see Last Name of student                     | so that That added before                                                   |
| Student list page content Registration No     | Site user    | can see registration no of students                   | that entered before                               |
| Student list page content Email  | Site user    | can see Email of each students               | so that entered before                                                      | 
| Student list page content Course  | Site user    | can see Course details of students     | that entered before                                                                     | 
| Manage students  | Site user    | can see manage students in navigation bar that is the main page                 | that add, edit,delete and store all details of students                                | 
| Manage student page content  | Site user    |  can see all details of students                | that will store in our database also                                                                   |
| Manage student page content Add student | Site user    | can add student all details of student              |  that will stored and view in student list page also                                                         | 
| Add student bottom content | Site user    | see some details of student            | that we want to enter it in this app |
| Add student page content First Name | Site user    | can add First Name of student              | that will stored and views in student list page alsot                                                         | 
| Add student page content Last Name | Site user    | can add Last Name of student              | that will stored and view in student list page also                                                         | 
| Add student page list content RegistrationNO | Site user    | can add registration no for student                | that will store and view in student list page also                                                         | 
| Add student page content Email | Site user    | can add student email              | that stored and view in student list page aslo                                                        | 
| Add student page content Course | site user    | can add any course for user that want               | that show in student list page also                                                         | 
| Add student page content Submit bottom | Site user    | can submit all details of student               | that is done for this page                                                         | 
| Manage student page content ID | Site user    | can see ID of student              |  that will add automatically                                                        | 
| Manage student page content FIst Name | Site user    | can see First name of student                | that entered before in Add student page                                                         | 
| Manage student page content Last Name | Site user    | can see Last Name of Student              |  that entered before in Add student page                                                         | 
| Manage student page content RegistrationNo | Site user    | can see registration No of studen               | that entered before in Add student page                                                         | 
| Manage student page content Email | Site user    | can see email of student               | that entered in Add student page                                                         | 
| Manage student page content Course | Site user    | can see course details              | that entered in Add student page before                                                         | 
| Manage student page content Action | Site user    | can see Action part on this details list             | that the user cant Edit or Delete any student details                                                         | 
| Manage student page Action Delete bottom | Site user    | can see delete bottom              | that can remove any student details                                                         | 
| Manage student page content Action Edit Icon | Site user    | can see edit ico              | that user can edit any information of the student                                                        | 
| Edit Icon page content | Site user    | can edit First Name of student             | that entered before in Add student page                                                         | 
| Edit Icon Last Name | Site user    | can edit last name of student               | that entered before in Add student page                                                         | 
| Edit Icon page RegistrationNO | Site user    | can edit registration no of student              | that entered before in Add student paget                                                         | 
| Edit icon page content Email | Site user    | can edit Email of student              | that entered before in Add student page                                                        | 
| Edit icon page content Course | Site user    | can edit course details             | so that entered in Add student page before                                                         | 
| At the end | Site user    | can use this app if we want to store edit delete and update any information for our students               | 👍 (:                                                       | 




## Most reused components:

- PostsPage:
  - Home, Feed, Liked
- Post:
  - PostsPage
- Profile:
  - PopularProfiles, PopularProfiles (mobile)
- DropdownMenus:
  - Post, ProfilePage, Comment
- InfiniteScrollComponent:
  - PostPage (loading Comment components)
  - PostsPage (loading all, feed or liked Post components)
  - ProfilePage (loading Post components that belong to the profile)

## Deployment steps

- add prebuild script
- add Procfile
- remove all console.logs
- use Bootstrap default imports to minimize the build
- deploy to Heroku

## Tests:

### Automated:

- used the msw library to mock user and logout endpoints
- tested the NavBar component:
  - renders without a problem
  - renders the link to a user profile for a logged in user
  - renders the sign in and sign up buttons again on logout

### Manual:

- every other feature tested extensively

## Libraries, contexts and hooks:

- react-infinite-scroll-component
  - introduced to replace traditional pagination with lazy loading instead of pagination to make the application more performant and seem more snappy/ engaging
- react-bootstrap:
  - introduced
- contexts:
  - CurrentUserContext exposes the user state to the entire app. Relevant components can subscribe to its changes
  - ProfileDataContext exposes the profile state to the entire app. Enables the PopularProfiles component to be in sync with the ProfilePage contents
- custom hooks written to reduce repeatable state logic:
  - useClickOutsideToggle: enable toggle on the burger menu
  - useRedirect: enable redirect for users who are either logged in or logged out, depending on the use case

---
