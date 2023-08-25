import { useState } from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="flex items-center gap-7 justify-center bg-alabaster h-[50px]">
      <span className="text-base font-medium text-marine-blue">Monthly</span>
      <label className="toggle">
        <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <span />
        <strong>{label}</strong>
      </label>
      <span className="text-base font-medium text-marine-blue">Yearly</span>
    </div>
  );
};

export default ToggleSwitch;
