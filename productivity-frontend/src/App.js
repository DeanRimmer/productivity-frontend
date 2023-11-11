import HomePage from "./pages/HomePage";
import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Navbar from "./components/Navbar";
import {
  NotAuthenticated,
  NotAuthorized,
  Authenticating,
  CallbackComponentOverride,
  SessionExpired,
} from "./components/sso";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/order/:id" component={OrderDetailsPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
