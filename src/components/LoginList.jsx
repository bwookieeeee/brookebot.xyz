import React, { Component } from "react";
import Axios from "axios";

import LoginEvent from "./LoginEvent";

export default class LoginList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logins: []
    }
  }

  componentDidMount = async () => {
    await Axios.get("http://localhost:5000/cachedLogins").then ( res => {
      this.setState({ logins: res.data.loginCache})
    })
  }

  render() {
    return (
      <div className="LoginList">
        {this.state.logins.map ((login) => {
          return <LoginEvent login={login} key={login.cacheId} />
        })}
      </div>
    )
  }
}
