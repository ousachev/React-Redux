import React, { Component } from "react";
import classes from "./ProfileItem.module.css";

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  onStatusHandler = () => {
    this.setState({
      editMode: true
    });
  };

  offStatusHandler = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onKeySetStatus = e => {
    if (e.keyCode === 13) {
      this.offStatusHandler();
    }
  };

  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status === !this.state.status) {
      this.setState({
        status: this.props.status
      });
    }
  }
  render() {
    const { editMode, status } = this.state;
    const { profileStatus } = classes;
    return (
      <div>
        {!editMode ? (
          <span className={profileStatus} onClick={this.onStatusHandler}>
            {status || "No Status"}
          </span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.offStatusHandler}
            onKeyDown={this.onKeySetStatus}
            value={status}
            onChange={this.onStatusChange}
          />
        )}
      </div>
    );
  }
}
