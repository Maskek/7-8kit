import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UserAvatar from "./useravatar";
import Button from "./addbutton";
import { addToFriends } from "./actions";

const UserCard = (props) => {
  return (
    <div className="userCard">
      <UserAvatar src={props.user.picture.large} width={100} height={100} />
      <div className="information">
        <div>
          {props.user.name.first} {props.user.name.last}
        </div>
        <div>
          From <b>{props.user.location.city}</b>
        </div>
        <div>Phone: {props.user.phone}</div>
        <div>Age: {props.user.dob.age}</div>
      </div>
      <Button
        label={"Добавить"}
        onClick={() => props.addToFriends(props.user)}
      />
    </div>
  );
};

function save(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(save, matchDispatchToProps)(UserCard);
