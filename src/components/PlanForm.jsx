import { useState } from "react";
import Card from "./Card";
import { billingPlan } from "../constants/api";
import SelectableCard from "./SelectableCard";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { formatPlanPrice } from "../util/createPriceString";
import useFetch from "../hooks/useFetch";

const PlanForm = ({ formId, onSubmit, initData }) => {
  const {
    data: billingPlans,
    isLoading,
    isError,
  } = useFetch("billing-plan", billingPlan);
  const [isYearly, setIsYearly] = useState(Boolean(initData?.isYearly));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    onSubmit({ plan: JSON.parse(data.plan), isYearly });
  }

  const logState = (state) => {
    setIsYearly(state);
  };

  return (
    <Card
      heading="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <form id={formId} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:flex-row mb-8">
          {isLoading && <div>Loading data...</div>}
          {!isLoading &&
            billingPlans?.map((plan, i) => (
              <SelectableCard
                defaultChecked={
                  initData?.plan?.id ? initData.plan.id === plan.id : i === 0
                }
                key={plan.id}
                name="plan"
                value={plan}
                title={plan.name}
                subTitle={formatPlanPrice(plan, isYearly)}
                description={`${
                  isYearly ? `${plan.yearlyFreePeriod} months free` : ""
                }`}
                imgSrc={`images/icon-${plan.name}.svg`}
              />
            ))}

          {isError && <span>Something is wrong.</span>}
        </div>
        <ToggleSwitch toggled={false} onClick={logState} />
      </form>
    </Card>
  );
};

export default PlanForm;
