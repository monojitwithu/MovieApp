import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./screens/movies/Movies";
import Series from "./series/Series";
import Header from "./component/common/header/Header";
import Details from "./screens/detailsScreen/Details";

const Controller = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Movies hello="hello" />} />
          <Route exact path="/series" render={() => <Series />} />
          <Route exact path="/movies/:movieId" render={() => <Details />} />
        </Switch>
      </Router>
    </>
  );
};

export default Controller;
