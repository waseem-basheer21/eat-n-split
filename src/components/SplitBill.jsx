/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ selectedFriend, setAddFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    const balanceChange = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    handleSplitBill(balanceChange);

    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  };

  const handleSplitBill = (value) => {
    setAddFriend((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{`Split a bill with ${selectedFriend.name}`}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="your-expense">🙋 Your expense</label>
      <input
        type="number"
        id="your-expense"
        value={paidByUser}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (value <= bill) setPaidByUser(value);
        }}
      />

      <label htmlFor="friend-expense">
        🧑‍🤝‍🧑 {`${selectedFriend.name}'s expense`}
      </label>
      <input type="number" id="friend-expense" disabled value={paidByFriend} />

      <label htmlFor="who-is-paying">🤑 Who is paying the bill?</label>
      <select
        id="who-is-paying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}
