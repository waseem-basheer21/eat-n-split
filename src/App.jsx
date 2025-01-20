import { useState } from "react";

import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import SplitBill from "./components/SplitBill";
import { initialFriends } from "./data";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const [addFriend, setAddFriend] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => setShowAddFriend((prev) => !prev);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          setShowAddFriend={setShowAddFriend}
          addFriend={addFriend}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
        />
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
      {selectedFriend && (
        <SplitBill selectedFriend={selectedFriend} addFriend={addFriend} setAddFriend={setAddFriend} />
      )}
    </div>
  );
}

export default App;
