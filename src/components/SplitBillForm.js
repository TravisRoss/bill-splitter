import { useState } from "react";
import BillRow from "./BillRow";
import Button from "./Button";

export default function SplitBillForm({ friends, selectedId }) {
  const [bill, setBill] = useState(0);
  const [usersExpense, setUsersExpense] = useState(0);
  const [friendsExpense, setFriendsExpense] = useState(0);
  const [personPaying, setPersonPaying] = useState(null);

  let friend = friends.find((f) => f.id === selectedId);
  let friendName = friend?.name || "X";

  return (
    <div className="split-bill">
      <h5>SPLIT A BILL WITH {friendName}</h5>
      <form className="split-bill-form">
        <BillRow value={bill} onChange={setBill}>
          🤑 Bill value
        </BillRow>
        <BillRow value={usersExpense} onChange={setUsersExpense}>
          🧑 Your expense
        </BillRow>
        <BillRow value={friendsExpense} onChange={setFriendsExpense}>
          🧑‍🤝‍🧑 {friendName ? `${friendName}'s` : "X's"} expense
        </BillRow>

        <div className="bill-row">
          <label>💵 Who's paying the bill?</label>
          <select
            value={personPaying}
            onChange={(e) => setPersonPaying(e.target.value)}
          >
            <option value="you">you</option>
            {friends.map((friend) => (
              <option value={friend.name}>{friend.name}</option>
            ))}
          </select>
        </div>

        <div className="right">
          <Button>Split bill</Button>
        </div>
      </form>
    </div>
  );
}
