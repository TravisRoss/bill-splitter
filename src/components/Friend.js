export default function Friend({
  name,
  image,
  selected,
  onSelect,
  sumOwed,
  billPayer,
  text,
}) {
  console.log(sumOwed);

  if (selected) {
    if (sumOwed === 0) {
      text = `You and ${name} are even`;
    } else if (sumOwed > 0 && billPayer === "you") {
      text = `${name} owes you ${sumOwed}`;
    } else if (sumOwed > 0 && billPayer !== "you") {
      text = `You owe ${name} ${sumOwed}`;
    }
  }

  return (
    <div className={`friend ${selected ? "selected" : ""}`}>
      <div>
        <img src={image} alt="friend-image" />
        <span>{name}</span>
        <span>{text}</span>
      </div>
      <button className="button" onClick={onSelect}>
        {selected ? "close" : " select"}
      </button>
    </div>
  );
}
