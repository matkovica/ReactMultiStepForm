import StepItem from "./StepItem";

const stepArray = ["your info", "select plan", "add-ons", "summary"];

const ContainerLeft = ({ currentStep }) => {
  return (
    // <div className="rounded-md max-md:bg-[url('/images/bg-sidebar-mobile.svg')] max-md:bg-cover bg-[url('/images/bg-sidebar-desktop.svg')]">
    //   <div className="my-12 max-md:flex max-md:flex-row max-md:justify-center">
    //     <StepItem step={1} text={"your info"} />
    //     <StepItem step={2} text={"select plan"} />
    //     <StepItem step={3} text={"add-ons"} />
    //     <StepItem step={4} text={"summary"} />
    //   </div>
    // </div>

    <div className="relative sm:w-[275px] sm:h-[568px] sm:min-w-[275px] sm:min-h-[568px]">
      <img
        className="absolute object-cover w-full sm:hidden z-0"
        src="/images/bg-sidebar-mobile.svg"
        alt=""
      />
      <img
        className="absolute hidden sm:block z-0"
        src="/images/bg-sidebar-desktop.svg"
        alt=""
      />
      <div className="relative py-8 flex justify-center gap-5 sm:flex-col sm:px-8 sm:gap-6">
        {stepArray.map((item, index) => {
          return (
            <StepItem
              key={item}
              text={item}
              step={index + 1}
              active={currentStep === index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerLeft;
