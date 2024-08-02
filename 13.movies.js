const MOVIE_API = process.env.MOVIE_API;
fetch(`${MOVIE_API}&t=one piece`)
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Something went wrong:", err));

// write you own functions
// normal promises using fetch
// async await
