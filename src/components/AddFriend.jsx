/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "./Button";

export default function AddFriend({
  addFriend,
  setAddFriend,
  setShowAddFriend,
}) {
  const [name, SetName] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = { name, image, balance: 0, id };
    setAddFriend([...addFriend, newFriend]);
    setShowAddFriend(false);
    SetName("");
    setImage("");
  };

  return (
    <div>
      <form className="form-add-friend" onClick={handleAdd}>
        <label htmlFor="friend-name">🧑‍🤝‍🧑 Friend name</label>
        <input
          id="friend-name"
          type="text"
          placeholder="Enter friend's name"
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
        <label htmlFor="image-url">🖼️ Image URL</label>
        <input
          id="image-url"
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}
