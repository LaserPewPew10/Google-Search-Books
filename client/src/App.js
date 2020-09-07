import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Header />
            <Wrapper>
              <Route exact path="/" component={Search} />
              <Route exact path="/Search" component={Search} />
              <Route exact path="Saved" component={Saved} />
              <Route exact path="NoMatch" component={NoMatch} />
            </Wrapper>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
