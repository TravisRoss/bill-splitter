export default function Friend({ name, image, selected, onSelect }) {
  return (
    <div className={`friend ${selected ? "selected" : ""}`}>
      <img src={image} alt="friend-image" />
      <span>{name}</span>
      <button className="button" onClick={onSelect}>
        {selected ? "close" : " select"}
      </button>
    </div>
  );
}
