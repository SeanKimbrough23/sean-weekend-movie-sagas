import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import AddMovies from "../AddMovies/AddMovies";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>The Movies Saga!</h1>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovies />
        </Route>
      </Router>
    </div>
  );
}

export default App;
