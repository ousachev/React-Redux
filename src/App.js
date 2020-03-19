import React from "react";
import "./App.css";
import Nav from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="wrapper">
        <div className="container">
          <HeaderContainer />
          <Nav />
          <div className="wrapper-content">
            <Redirect from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/news" component={News} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
