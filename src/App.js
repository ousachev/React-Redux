import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Nav from "./components/Navigation/Navigation";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className="container">
          <Nav />
          <div className="wrapper-content">
            <Redirect exact from="/" to="/profile" />
            <Route path="/login" render={() => <Login />} />
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
