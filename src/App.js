import "./App.css";
import { useState } from "react";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  { id: 1, name: "John", image: "https://i.pravatar.cc/48?u=118836" },
  { id: 2, name: "Bale", image: "https://i.pravatar.cc/48?u=933372" },
  { id: 3, name: "Ramsey", image: "https://i.pravatar.cc/48?u=499476" },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="app">
      <FriendsList
        friends={friends}
        onSetFriends={setFriends}
        onSelectFriend={setSelectedId}
        selectedId={selectedId}
      />
      <SplitBillForm friends={friends} selectedId={selectedId} />
    </div>
  );
}

export default App;
