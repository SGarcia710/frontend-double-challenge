## Movies Search

## Requirements
- The application should have two views: one for searching (/) and one for displaying details of the selected movie /{imdbID}.
- Do an onHover effect in the search movies.
- The search button should be disabled with 2 or fewer characters.
- The movie details screen should have a back button and display the previous search.
- The found movies should be sorted from newest to oldest.
- The search view should allow users to enter the title of a movie and display the search results. The results should include the movie's title, poster, and year.
- Clicking on a search result should take the user to the movie details view. This view should display the poster, movie's title, year, description(plot), genre, director, runtime, ratings (all the array).
- The application should use the OMDB API (http://www.omdbapi.com/) to obtain movie information.
- The application should be responsive and adapt to different screen sizes.

## Misc

- For the first view should use this mockup: [URL](https://www.figma.com/file/liOfbMmLYJYVzljGVe1wka/Untitled?node-id=0%3A1&t=GKy10V5RJMrrZgFV-1) or use the image saved in /mockup.
- The icon is in /assets.
- For the second screen (movie details) use your own design.
- Do not use frameworks for components or css.


## API Examples:

###### API Key: efe569de

#### Search movie:

```
GET http://www.omdbapi.com/?apikey=efe569de&s=star wars
```

example result:
```
{
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }
  ]
}
```

#### Search by imdbID

```
GET http://www.omdbapi.com/?apikey=efe569de&i=tt0076759
```

example result:
```
{
  "Title": "Star Wars: Episode IV - A New Hope",
  "Year": "1977",
  "Rated": "PG",
  "Released": "25 May 1977",
  "Runtime": "121 min",
  "Genre": "Action, Adventure, Fantasy",
  "Director": "George Lucas",
  "Writer": "George Lucas",
  "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
  "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
  "Language": "English",
  "Country": "United States",
  "Awards": "Won 6 Oscars. 64 wins & 30 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "93%"
    },
    {
      "Source": "Metacritic",
      "Value": "90/100"
    }
  ],
  "Metascore": "90",
  "imdbRating": "8.6",
  "imdbVotes": "1,382,501",
  "imdbID": "tt0076759",
  "Type": "movie",
  "DVD": "06 Dec 2005",
  "BoxOffice": "$460,998,507",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```
