import * as axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer";
class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { login, email, id } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
