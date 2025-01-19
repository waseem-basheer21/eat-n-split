import Button from "./Button";

export default function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label htmlFor="">💰 Bill value</label>
      <input type="text" />
      <label htmlFor="">🙋 Your expense</label>
      <input type="text" />
      <label htmlFor="">🧑‍🤝‍🧑 X&apos;s expense</label>
      <input type="text" disabled />
      <label htmlFor="">🤑 Who  is paying the bill?</label>
      <select name="" id="">
        <option value="">You</option>
        <option value="">X</option>
      </select>
      <Button>Split</Button>
    </form>
  );
}
