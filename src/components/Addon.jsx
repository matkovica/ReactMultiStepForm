import { useId, useState } from "react";

const Addon = ({
  title,
  description,
  leftText,
  value,
  name,
  defaultChecked = false,
}) => {
  const id = useId();
  const [checked, setChecked] = useState(Boolean(defaultChecked));

  return (
    <label
      htmlFor={id}
      className={`flex w-full h-20 gap-5 my-4 items-center p-5 border border-marine-blue hover:bg-alabaster hover:border-purplish-blue rounded-md checked::bg-marine-blue
      ${checked ? "border-purplish-blue bg-alabaster" : "border-cool-gray"}`}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        value={JSON.stringify(value)}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="accent-purplish-blue w-4 h-4"
      />
      <div className="flex flex-col">
        <span className="font-medium text-base text-marine-blue">{title}</span>
        <span className="font-normal text-sm text-cool-gray">
          {description}
        </span>
      </div>
      <span className="ml-auto font-light text-sm text-purplish-blue">
        {leftText}
      </span>
    </label>
  );
};

export default Addon;
