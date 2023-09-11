# Students managment system 

## Project description

1: Student Information Management System.<br>

2: Store the First name of the student.

3: Store the Last name of the student.

4: Store the unique Roll number for every student.

5: Store the Email Address of every student.

6: Store the courses registered by the student.


## User stories

| Category  | as      | I want to                      | so that I can                                                                                    | 
| --------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| App name      | site user    | can see app name         | So that is Students managment system                                                           |
| Logo      | Site user    | can see logo in this app        | that is before app name                                                               |
| Background color of header      | Site user    | can see background color of header        | That the color is black                                                                                     |
| Content of header     | Site user | view LOGO , App name            | That is all content in header                                                                   |
| Navigation bar     | visitor | view the navgation bar         | so that is in right side of this app                                                  |
| Navigation bar content     | visitor | I can see Home, Students list , manage student and Registration page          | That is all content of navgation bar                                                      |
| posts     | visitor | scroll through a list of posts | browse the site more comfortably                                                                 |
| posts     | user    | edit and delete my post        | correct or hide any mistakes                                                                     |
| posts     | user    | create a post                  | share my moments with others                                                                     |
| posts     | user    | view liked posts               | go back often to my favourite posts                                                              |
| posts     | user    | view followed users' posts     | keep up with my favourite users' moments                                                         |
| likes     | user    | like a post                    | express my interest in someone's shared moment                                                   |
| likes     | user    | unlike a post                  | express that my interest in someone's shared moment has faded away                               |
| comments  | user    | create a comment               | share my thoughts on other people's content                                                      | 
| comments  | user    | edit and delete my comment     | correct or hide any mistakes                                                                     | 
| profiles  | user    | view a profile                 | see a user's recent posts + post, followers, following count data                                | 
| profiles  | user    | edit a profile                 | update my profile information                                                                    |
| followers | user    | follow a profile               | express my interest in someone's content                                                         | 
| followers | user    | unfollow a profile             | express that my interest in someone's content has faded away and remove their posts from my feed | 

## Detailed page and component breakdown:

![lucidchart](https://res.cloudinary.com/dgjrrvdbl/image/upload/v1649155000/moments-component-map_rfth6q.png)

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
