import React, { Component } from "react";
import classNames from "classnames";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";

import "../stylesheets/LoginEvent.css";

export default class LoginEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameBan: false,
      ipBan: false,
      bigBan: false,
      hideDetails: true
    };
  }

  componentDidMount() {
    this.setState({
      usernameBan: this.props.login.internalUsernameBanned,
      ipBan: this.props.login.internalIpBanned
    });
  }

  toggleExtra = () => {
    this.setState({ hideDetails: !this.state.hideDetails });
  }

  render() {
    const collapseClass = classNames({
      extraInfo: true,
      hideDetails: this.state.hideDetails
    });
    return (
      <div className="LoginEventCard">
        <div className="userInfo">
          <p className="username">Username: {this.props.login.username}</p>
          <p className="ip">IP: {this.props.login.ip}</p>
          <p className="usernameBanned">
            Username Banned: {this.state.usernameBan.toString()}
          </p>
          <p className="ipBanned">IP Banned: {this.state.ipBan.toString()}</p>
          <div className="extraContainer">
            <div className="toggleDiv">
              <p>Show details</p>
              <button name="toggleButton" onClick={this.toggleExtra}>{
              this.state.hideDetails ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />}</button>
            </div>
            <div className={collapseClass}>
              <p className="cores">
                Cores: {this.props.login.hardwareConcurrency}
              </p>
              <p className="renderer">Renderer: {this.props.login.renderer}</p>
              <p className="userAgent">
                User Agent: {this.props.login.userAgent}
              </p>
              <p className="width">Width: {this.props.login.width}</p>
              <p className="height">Height: {this.props.login.height}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
