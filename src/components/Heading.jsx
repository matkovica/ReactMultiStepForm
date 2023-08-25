const Heading = ({ heading, description }) => {
  return (
    <div className="mx-3 my-6">
      <h1 className="font-bold text-3xl text-marine-blue mb-2">{heading}</h1>
      <p className="text-cool-gray flex flex-wrap">{description}</p>
    </div>
  );
};

export default Heading;
