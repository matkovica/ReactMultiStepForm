const StepItem = ({ text, step, active }) => {
  return (
    <div className="flex gap-3 items-center justify-start">
      <div
        className={`rounded-full font-bold flex items-center justify-center w-7 h-7
        ${
          active
            ? "bg-light-blue text-marine-blue"
            : " text-white border border-white border-solid"
        }`}
      >
        {step}
      </div>
      <div className="flex-col items-start justify-center hidden sm:flex">
        <span className="uppercase text-cool-gray text-sm leading-none">
          Step {step}
        </span>
        <span className="text-white uppercase font-bold">{text}</span>
      </div>
    </div>
  );
};

export default StepItem;
