import React from "react";
import { connect } from "react-redux";

import UserCard from "./usercard";

class UsersList extends React.Component {
  state = {
    UINFO: undefined
  };

  getu = async () => {
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      UINFO: data.results
    });
  };

  componentDidMount() {
    this.getu();
  }

  render() {
    return (
      <div>
        <div className="list_title">
          <header className="headrand">Друзья</header>
        </div>

        {this.state.UINFO && this.state.UINFO.map((u) => <UserCard user={u} />)}
      </div>
    );
  }
}

function save(state) {
  return {
    users: state
  };
}

export default connect(save)(UsersList);
