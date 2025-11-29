import "./App.css";
import { useState } from "react";

const initialFriends = [
  { id: 1, name: "John", image: "https://i.pravatar.cc/48?u=118836" },
  { id: 2, name: "Bale", image: "https://i.pravatar.cc/48?u=933372" },
  { id: 3, name: "Ramsey", image: "https://i.pravatar.cc/48?u=499476" },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);

  return (
    <div>
      <FriendsList friends={friends} onSetFriends={setFriends} />
    </div>
  );
}

function FriendsList({ friends, onSetFriends }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectFriend(friendId) {
    setSelectedId(friendId === selectedId ? null : friendId);
  }

  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          image={friend.image}
          selected={selectedId === friend.id}
          onSelect={() => handleSelectFriend(friend.id)}
          key={friend.id}
        />
      ))}
      <AddFriendButton friends={friends} onSetFriends={onSetFriends}>
        Add friend
      </AddFriendButton>
    </div>
  );
}

function Friend({ name, image, selected, onSelect }) {
  return (
    <div className={`friend ${selected ? "selected" : ""}`}>
      <img src={image} />
      <span>{name}</span>
      <button className="button" onClick={onSelect}>
        {selected ? "close" : " select"}
      </button>
    </div>
  );
}

function AddFriendButton({ friends, onSetFriends, children }) {
  const [showForm, setShowForm] = useState(false);

  function handleOpenForm() {
    setShowForm(true);
  }

  return showForm ? (
    <AddFriendForm friends={friends} onSetFriends={onSetFriends} />
  ) : (
    <Button onClick={handleOpenForm}>Add friend</Button>
  );
}

function AddFriendForm({ friends, onSetFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || image === "") {
      return;
    }

    const newId = Math.max(friends.map((f) => f.id) + 1);
    onSetFriends([...friends, { id: newId, name: name, image: image }]);
  }

  return (
    <form onSubmit={handleSubmit} className="add-friend-form">
      <div className="friend-info">
        <p>👨</p>
        <label>Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="friend-info">
        <p>🖼️</p>
        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div class="right">
        <Button>Add</Button>
      </div>
    </form>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
