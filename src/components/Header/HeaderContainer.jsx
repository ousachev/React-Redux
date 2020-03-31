import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/authReducer";
class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    let { isAuth, login, logout } = this.props;
    return <Header isAuth={isAuth} login={login} logout={logout} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
