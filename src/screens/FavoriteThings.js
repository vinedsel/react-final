import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
  <div>
    <h2>FavoriteThings</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Honda`}>Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/Cheeseburger`}>Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/Hausu`}>Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:thingsId`} component={Things} />
    <Route
      exact
      path={match.url}
      render={() => <h3>These are some of my favorite things.</h3>}
    />
  </div>
);

export default FavoriteThings;
