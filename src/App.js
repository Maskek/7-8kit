import React from "react";

import "./styles.css";
import UserList from "./components/userlist";
import BestFriendsList from "./components/bestfriendlist";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="mainhead">Соц. Сеть</header>
        <div className="spisok">
          <div className="users">
            <UserList />
          </div>
          <div className="best_friends">
            <BestFriendsList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
