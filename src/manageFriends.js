export function manageFriends(state, action) {
  // your code here

  //initialState = { friends: []}

  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };
    case "friends/remove":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };
    default:
      return state;
  }
}

//{"friends": [{"hometown": "NYC", "id": 100, "name": "Avi"}]}
