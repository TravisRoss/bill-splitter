import { useState } from "react";
import BillRow from "./BillRow";
import Button from "./Button";

export default function SplitBillForm({
  friends,
  selectedId,
  billPayer,
  onSetBillPayer,
  sumOwed,
  onSetSumOwed,
}) {
  const [bill, setBill] = useState("");
  const [usersExpense, setUsersExpense] = useState("");

  let friend = friends.find((f) => f.id === selectedId);
  let friendName = friend?.name || "X";

  function handleOnSubmit(e) {
    e.preventDefault();

    if (!bill || !usersExpense) {
      return;
    }

    if (billPayer === "you") {
      onSetSumOwed(bill - usersExpense);
      onSetBillPayer("you");
    } else {
      onSetSumOwed(usersExpense);
      onSetBillPayer(billPayer);
    }
  }

  return (
    <div className="split-bill">
      <h5>SPLIT A BILL WITH {friendName}</h5>
      <form className="split-bill-form" onSubmit={(e) => handleOnSubmit(e)}>
        <BillRow value={bill} onChange={setBill}>
          🤑 Bill value
        </BillRow>
        <BillRow value={usersExpense} onChange={setUsersExpense}>
          🧑 Your expense
        </BillRow>
        <BillRow value={bill - usersExpense} inputDisabled={true}>
          🧑‍🤝‍🧑 {friendName ? `${friendName}'s` : "X's"} expense
        </BillRow>

        <div className="bill-row">
          <label>💵 Who's paying the bill?</label>
          <select
            value={billPayer}
            onChange={(e) => onSetBillPayer(e.target.value)}
          >
            <option value="you">you</option>
            <option value={friendName}>{friendName}</option>
          </select>
        </div>

        <div className="right">
          <Button>Split bill</Button>
        </div>
      </form>
    </div>
  );
}
