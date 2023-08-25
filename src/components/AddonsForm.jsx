import { data } from "autoprefixer";
import { addonsUrl } from "../constants/api";
import useFetch from "../hooks/useFetch";
import Addon from "./Addon";
import Card from "./Card";

const AddonsForm = ({ formId, onSubmit, isYearly, initData }) => {
  const { data: addons, isLoading, isError } = useFetch("addons", addonsUrl);
  console.log(initData);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const selectedAddons = {};

    formData.forEach((item) => {
      const parsedData = JSON.parse(item);

      selectedAddons[parsedData.id] = {
        id: parsedData.id,
        name: parsedData.name,
        monthly: parsedData.monthly,
        yearly: parsedData.yearly,
      };
    });
    onSubmit(selectedAddons);
  }

  return (
    <Card
      heading="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <form id={formId} onSubmit={handleSubmit}>
        {isLoading && <div>Loading data...</div>}
        {!isLoading &&
          addons?.map((addon, i) => (
            <Addon
              key={addon.id}
              name={addon.name.toLowerCase().replaceAll(" ", "-")}
              value={addon}
              title={addon.name}
              description={addon.description}
              leftText={`${
                isYearly ? `$${addon.yearly}/yr` : `$${addon.monthly}/mo`
              }`}
              defaultChecked={Boolean(initData?.[addon.id])}
            />
          ))}
      </form>
    </Card>
  );
};

export default AddonsForm;
