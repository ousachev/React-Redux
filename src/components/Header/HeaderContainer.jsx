import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../../redux/authReducer";
class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    let { isAuth } = this.props;
    return <Header isAuth={isAuth} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
