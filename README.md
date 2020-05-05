# Mix-tape

Contributors: [Karla Gardiner](https://github.com/KG700), [Lila Walker](https://github.com/lilawalker), [Jara Santamaria Martinez](https://github.com/jarasmar), [Sophia Bell](https://github.com/Kittaru87)

[Specification](#Specification) | [Planning](#Planning) | [Installation instructions](#Installation-instructions) | [Running tests](#Running-tests) | | [Tech stack](#Tech-stack) | [Challenges](#challenges) | [Further development](#Further-development)

## Specification
To build an app using React and Rails that combines selected users' top tracks in Spotify to create a new playlist that then plays in the browser. Potentially a chat function.

## User Stories

```
As a user
So that I can collaborate my music with friends
I would like to sign up to Mix Tape with my Spotify account

As a user
So that I can mix my top songs with my friends' top songs
I would like to select my friends from a list of users

As a user
So that I can reshuffle our collaborated playlist
I would like to mix until I am happy with my playlist

As a user
So that I can listen our collaborated songs
I would like to play to the playlist in the Spotify player

As a user
So that I can generate a new playlist
I would like to go back to select new friends

As a user
So that I can be sure my account is secure
I would like to log out using my Spotify account
```

## Planning



## Installation instructions

### To install dependencies

On the root of the project, run:

```
$ bundle install
```
this will install our dependencies

### To set up DataBase

If you do not have Postgresql installed

On the root of the project create the database by running:

```
$ rails db:create
```
this will create the database

Next we will need to create the tables.

On the root of the project, run:

```
$ rails db:migrate
```

Congratulations! Your database is now setup!

### `Running the application`

To run the application, run the following command in the root of the project and enjoy :)

```
$ puma
```

## Running tests

To run the tests, make sure you are in the root of the project and run:

```
$ rspec
```

## Tech stack
Ruby on Rails

Javascript

React

PostgrSQL

Rspec

Simplecov

Rubocop




## Challenges

* Spotify authentication and scopes
* Rails environmental variables
* Generating a playlist shows the previous playlist generated because of get/post request order issue.
* Deployment to Heroku - adding environmental variables to Heroku and changing the procfile to profile.dev

## Further development
