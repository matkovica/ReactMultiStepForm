import { useState } from "react";

const Input = ({
  placeholder,
  label,
  type,
  pattern,
  required,
  name,
  defaultValue,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  function handleInvalidated(event) {
    event.preventDefault();
    setErrorMsg(
      event.target.validationMessage.includes("@")
        ? "Invalid email"
        : event.target.validationMessage
    );
  }

  function handleChange() {
    setErrorMsg("");
  }

  return (
    <div className="flex flex-col p-3">
      <label className="text-marine-blue capitalize py-1 flex justify-between w-full">
        <span>{label}</span>
        {errorMsg && (
          <span className="font-medium text-strawberry-red">{errorMsg}</span>
        )}
      </label>
      <input
        name={name}
        onInvalid={handleInvalidated}
        onChange={handleChange}
        type={type}
        pattern={pattern}
        required={required}
        className={`border w-full p-2 rounded-md ${
          errorMsg ? "border-strawberry-red" : " border-cool-gray"
        }`}
        placeholder={`e.g. ${placeholder}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
