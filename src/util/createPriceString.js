export function createPricseString(price, isYearly) {
  return `$${price}/${isYearly ? "yr" : "mo"}`;
}

export function formatPlanPrice(plan, isYearly) {
  if (!plan?.yearly || !plan?.monthly) return "";

  return createPricseString(isYearly ? plan.yearly : plan?.monthly, isYearly);
}
