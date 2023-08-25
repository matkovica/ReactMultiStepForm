import { useId, useState } from "react";

const SelectableCard = ({
  title,
  description,
  subTitle,
  imgSrc,
  name,
  defaultChecked = false,
  value,
}) => {
  const id = useId();
  //const [checked, setChecked] = useState(defaultChecked);

  //value, onchange

  return (
    <div className="flex">
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden peer"
        value={JSON.stringify(value)}
        defaultChecked={defaultChecked}
        // checked={checked}
        // onChange={(e) => setChecked(e.target.checked)}
      />
      <label
        htmlFor={id}
        className={`flex md:flex-col md:w-[140px] md:h-[170px] bg-white border-light-gray gap-4 w-full rounded-lg border peer-checked:bg-magnolia peer-checked:border-purplish-blue p-4 border-solid hover:border-purplish-blue`}
      >
        <img src={imgSrc} alt="" className="w-min" />
        <div className="md:mt-6 flex flex-col">
          <span className="font-bold capitalize">{title}</span>
          <span className="text-cool-gray text-sm">{subTitle}</span>
          {description && (
            <p className="text-xs font-medium text-marine-blue">
              {description}
            </p>
          )}
        </div>
      </label>
    </div>
  );
};

export default SelectableCard;
