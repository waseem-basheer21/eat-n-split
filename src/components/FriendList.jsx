/* eslint-disable react/prop-types */
// import { initialFriends } from "../data";

import Friend from "./Friend";

export default function FriendList({
  setShowAddFriend,
  addFriend,
  setSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {addFriend.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          setShowAddFriend={setShowAddFriend}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
