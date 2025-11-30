import "./App.css";
import { useState } from "react";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 1,
    name: "John",
    image: "https://i.pravatar.cc/48?u=118836",
    text: "You and John are even",
  },
  {
    id: 2,
    name: "Bale",
    image: "https://i.pravatar.cc/48?u=933372",
    text: "You and Bale are even",
  },
  {
    id: 3,
    name: "Ramsey",
    image: "https://i.pravatar.cc/48?u=499476",
    text: "You and Ramsey are even",
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedId, setSelectedId] = useState(null);
  const [billPayer, setBillPayer] = useState("you");
  const [sumOwed, setSumOwed] = useState(0);

  return (
    <div className="app">
      <FriendsList
        friends={friends}
        onSetFriends={setFriends}
        onSelectFriend={setSelectedId}
        selectedId={selectedId}
        billPayer={billPayer}
        sumOwed={sumOwed}
      />
      <SplitBillForm
        friends={friends}
        selectedId={selectedId}
        billPayer={billPayer}
        onSetBillPayer={setBillPayer}
        sumOwed={sumOwed}
        onSetSumOwed={setSumOwed}
      />
    </div>
  );
}

export default App;
