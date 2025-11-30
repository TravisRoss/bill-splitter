export default function BillRow({ value, onChange, inputDisabled, children }) {
  return (
    <div className="bill-row">
      <label>{children}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={inputDisabled}
      />
    </div>
  );
}
