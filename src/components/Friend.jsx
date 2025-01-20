/* eslint-disable react/prop-types */

import Button from "./Button";
export default function Friend({
  setShowAddFriend,
  friend,
  selectedFriend,
  setSelectedFriend,
}) {
  const handleSelection = (friend) =>
    setSelectedFriend((selected) => {
      return selected && selected.id === friend.id ? null : friend;
    }, setShowAddFriend(false));

  const isSelected = selectedFriend && selectedFriend.id === friend.id;

  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 ? (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        ) : friend.balance > 0 ? (
          <p className="green">
            {friend.name} owes you {friend.balance}$
          </p>
        ) : (
          <p className="">You and {friend.name} are even</p>
        )}
        <Button onClick={() => handleSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  );
}
