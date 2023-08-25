import Card from "./Card";
import Input from "./Input";

const PersonalInfoForm = ({ formId, onSubmit, initData }) => {
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  }

  return (
    <div>
      <Card
        heading="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <form onSubmit={handleSubmit} id={formId} className="flex flex-col">
          <Input
            label="Name"
            name="name"
            placeholder="Stephen King"
            required
            defaultValue={initData.name}
          />
          <Input
            label="Email adress"
            placeholder="stephenking@lorem.com"
            required
            name="email"
            type="email"
            defaultValue={initData.email}
          />
          <Input
            label="Phone Number"
            placeholder="+1 234 567 890"
            required
            name="phone"
            defaultValue={initData.phone}
          />
        </form>
      </Card>
    </div>
  );
};

export default PersonalInfoForm;
