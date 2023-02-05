# Ghibli films

[README in russian](README_RUS.md)

## About this project

This is a training project that was created as part of a first introduction to React, [Create React App](https://github.com/facebook/create-react-app) and the React hooks useState and useEffect.

This app shows a list of Studio Ghibli films with the ability to learn more about them.

![app work demo](readme-assets/ghibli-films.gif)

## Information about the API used and how to run the application

The application retrieves information from a third-party API - [Studio Ghibli API](https://ghibliapi.herokuapp.com).

This API was previously hosted by Heroku, but is no longer available.

Therefore, for the application to work correctly you need to clone the [API repository](https://github.com/janaipakos/ghibliapi) and make the following change to the index.js file:
change the port number from 3000 to 3080.
![change in the index.js file](readme-assets/edit-index-js.png)

In the Ghibli films application itself, the necessary changes have already been made:
- in the [FilmList.js] file (src/components//FilmList.jsx), line 13 has been commented out, which sent fetch to the previously working API address - 'https://ghibliapi.herokuapp.com/films',
- and added line 14, which sends fetch to the new address - 'http://localhost:3080/films' (for both applications to work correctly on one machine).

After that you need to start the API with the command `npm start` and then start this application with the same command.

## More about how the application works

The list of films is presented in accordion format ([Accordion](src/components/Accordion.jsx)) - clicking on the film of interest will open its section and provide detailed information about the selected film, such as
- poster;
- description
- original title
- director of the film;
- producer of the film;
- the release date;
- the length of the film in minutes.

![displaying information about the selected film](readme-assets/one%20film%20info.png)

[Accordion](src/components/Accordion.jsx) is implemented with the useState hook.
The state of the component changes by clicking on it. Depending on the state more or less information is displayed.

![change the display of film information by clicking on it](readme-assets/ghibli-films.gif)

The film list itself is loaded by using the useEffect hook with an empty dependency array when the component is first rendered, and saved to the component state using the useState hook.
![Start of film list](readme-assets/film%20list.png)
![End of film list](readme-assets/film%20list%20end.png)

The film posters are stored in [public/img](public/img) and named after each film.

The default state of the component contains 3 films with no additional information about them:
- 'Castle in the Sky';
- 'My Neighbor Tororo';
- 'Grave of the Fireflies'.

Therefore, if you run only the Ghibli films application (without the API), only 3 films will be listed, and the information about the selected film will only show the poster, the rest of the items will be blank.

![Displaying the application without API](readme-assets/without%20API.png)
![Displaying information about one film without the API](readme-assets/one%20film%20without%20API.png)
