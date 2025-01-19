import { useState } from "react";

import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import SplitBill from "./components/SplitBill";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => setShowAddFriend((prev) => !prev);

  const [addFriend, setAddFriend] = useState([]);
  // const [addImage, setAddImage] = useState([]);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList addFriend={addFriend} />
        {showAddFriend && (
          <AddFriend
            setShowAddFriend={setShowAddFriend}
            addFriend={addFriend}
            setAddFriend={setAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <SplitBill />
    </div>
  );
}

export default App;
