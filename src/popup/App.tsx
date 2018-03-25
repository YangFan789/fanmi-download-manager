import { Button, Table } from "antd";
import * as React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Content } from "./Content";
import Navbar from "./Navbar";

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path="/"
              component={() => <Redirect to="/home" />}
            />
            <Route key="/home" path="/home" component={Content} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export { App };
