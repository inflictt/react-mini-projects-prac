export default function CurrencyBox1() {
  return (
    <div className="bg-white rounded-xl p-4 w-full max-w-xl flex justify-between items-start shadow-md">
      
      {/* Left Side */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-500">To</label>
        <input
          type="number"
          placeholder="0"
          className=" cursor-pointer outline-none text-2xl w-32"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-2 items-end">
        <label className="text-gray-500">Currency Type</label>
        <select className="bg-gray-100 cursor-pointer rounded-lg px-3 py-2 outline-none">
          <option>USD</option>
          <option>CAD</option>
          <option>MXN</option>
        </select>
      </div>
    </div>
  );
}