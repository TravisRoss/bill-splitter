export default function BillRow({ value, onChange, children }) {
  return (
    <div className="bill-row">
      <label>{children}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
