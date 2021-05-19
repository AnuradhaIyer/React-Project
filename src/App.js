import logo from './logo.svg';
import './App.css';
import Listing from './Components/Listing'
import SavedListing from './Components/SavedListing'
import Home from './Components/Home'
import Error from './Components/Error'
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import SimplyRets from './API/SimplyRets';
function App() {
  const allTabs = ['/', '/PropertyListing', '/SavedListings'];

  return (
    <BrowserRouter>
      <div className="App">
      <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home"  value="/" component={Link} to={allTabs[0]} />
                <Tab label="Property Listings" value="/PropertListings" component={Link} to={allTabs[1]} />
                <Tab label="Saved Listings" value="/SavedListings" component={Link} to={allTabs[2]} />
              </Tabs>
              <Switch>
                <Route path={allTabs[0]} component={Home} exact />
                <Route path={allTabs[1]} component={Listing}  />
                <Route path={allTabs[2]} component={SavedListing}  />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
