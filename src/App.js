import React from "react";
import { DataProvider } from "./context/DataContext";
import NavBar from "./NavBar/NavBar";
import MovieDetails from "./Movies/MovieDetails";
import MovieWatch from "./Movies/MovieWatch";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <DataProvider>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/movie/watch/:id">
            <MovieWatch videoUrl="https://vk.com/video_ext.php?oid=720493913&id=456240908&hash=06295e997e79717b" />
          </Route>
        </Switch>
      </div>
    </DataProvider>
  );
}

export default App;
