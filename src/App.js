import "./App.css";
import { useState } from "react";

let friends = [
  { id: 1, name: "John", emoji: "🤩", selected: false },
  { id: 2, name: "Bale", emoji: "👶", selected: false },
  { id: 3, name: "Ramsey", emoji: "🕶️", selected: false },
];

function App() {
  return (
    <div>
      <FriendsList />
    </div>
  );
}

function FriendsList() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectFriend(friendId) {
    setSelectedId(friendId === selectedId ? null : friendId);
  }

  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          emoji={friend.emoji}
          selected={selectedId === friend.id}
          onSelect={() => handleSelectFriend(friend.id)}
        />
      ))}
      <AddFriendButton>Add friend</AddFriendButton>
    </div>
  );
}

function Friend({ name, emoji, selected, onSelect }) {
  return (
    <div className={`friend ${selected ? "selected" : ""}`}>
      <span>{emoji}</span>
      <span>{name}</span>
      <span>SOME TEXT</span>
      <button className="button" onClick={onSelect}>
        {selected ? "close" : " select"}
      </button>
    </div>
  );
}

export default App;
