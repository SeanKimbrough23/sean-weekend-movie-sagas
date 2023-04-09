import "./App.css";
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
          <Details />
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
