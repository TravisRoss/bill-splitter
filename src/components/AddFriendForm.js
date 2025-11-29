import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ friends, onSetFriends }) {
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
