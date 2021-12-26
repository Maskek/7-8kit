export const addToFriends = (user) => {
  return {
    type: "addF",
    payload: {
      name: user.name.first + " " + user.name.last,
      location: user.location.city,
      age: user.dob.age,
      phone: user.phone,
      imgpic: user.picture.large
    }
  };
};
export const removeFromFriends = (friend) => {
  return {
    type: "remF",
    payload: friend
  };
};
