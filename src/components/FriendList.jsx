/* eslint-disable react/prop-types */
// import { initialFriends } from "../data";

import Friend from "./Friend";

export default function FriendList({ addFriend }) {
  return (
    <ul>
      {addFriend.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
