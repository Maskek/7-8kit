import React, { Component } from "react";
import { connect } from "react-redux";

import BestFriendCard from "./bestfriendcard";

class BestFriendsList extends Component {
  render() {
    return (
      <div>
        <div className="list_title">
          <header className="headfriend">Лучшие Друзья</header>
        </div>
        {this.props.friends.map((user) => (
          <BestFriendCard friend={user} />
        ))}
      </div>
    );
  }
}

function save(state) {
  return {
    friends: state.friends
  };
}

export default connect(save)(BestFriendsList);
