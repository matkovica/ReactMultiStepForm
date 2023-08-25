import Heading from "./Heading";

const Card = ({ heading, description, children }) => {
  return (
    <div>
      <div className="relative z-10 bg-white rounded-lg px-6 py-8 mx-4 md:max-w-lg md:mx-auto">
        <Heading heading={heading} description={description} />
        {children}
      </div>
    </div>
  );
};

export default Card;
