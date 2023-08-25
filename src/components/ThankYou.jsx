import Heading from "./Heading";

const ThankYou = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col w-4/6">
        <img src="images/icon-thank-you.svg" width="50px" alt="" />
        <div className="text-center">
          <Heading
            heading="Thank you"
            description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
