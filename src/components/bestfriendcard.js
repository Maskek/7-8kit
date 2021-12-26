import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeFromFriends } from "./actions";
import Button from "./removebutton";
import UserAvatar from "./useravatar";

const BestFriendCard = (props) => {
  return (
    <div className="friendCard">
      <UserAvatar src={props.friend.imgpic} width={100} height={100} />
      <div className="information">
        <div>{props.friend.name}</div>
        <div>
          From <b>{props.friend.location}</b>
        </div>
        <div>Phone: {props.friend.phone}</div>
        <div>Age: {props.friend.age}</div>
      </div>
      <Button
        onClick={() => props.removeFromFriends(props.friend)}
        label="Удалить"
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
  return bindActionCreators({ removeFromFriends }, dispatch);
}

export default connect(save, matchDispatchToProps)(BestFriendCard);
