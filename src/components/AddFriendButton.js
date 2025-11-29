import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";

export default function AddFriendButton({ friends, onSetFriends }) {
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
