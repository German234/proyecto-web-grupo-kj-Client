
const InputComponent = ({ value, onChange }) => {
  return (
    <input
      className="rounded-full w-full border-2 border-gray-300 bg-white px-2 py-2 mb-3 pl-3"
      type="text"
      placeholder="Ingrese su texto aquí"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
