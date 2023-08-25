import { useState } from "react";
import Button from "./components/Button";
import ContainerLeft from "./components/ContainerLeft";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PlanForm from "./components/PlanForm";
import AddonsForm from "./components/AddonsForm";
import FinishForm from "./components/FinishForm";
import ThankYou from "./components/ThankYou";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [allData, setAllData] = useState({});

  const [isFinished, setIsFinished] = useState(false);

  const handleSubmitPersonalInfo = (data) => {
    setAllData((state) => ({ ...state, ...data }));
    setCurrentStep((step) => step + 1);
  };

  const handleSubmitPlan = (data) => {
    setAllData((state) => ({
      ...state,
      plan: data.plan,
      isYearly: data.isYearly,
    }));
    setCurrentStep((step) => step + 1);
  };

  const handleSubmitAddons = (data) => {
    setAllData((state) => ({ ...state, addons: data }));
    setCurrentStep((step) => step + 1);
  };

  console.log(allData);

  return (
    <div className="lg:flex sm:h-[100vh] lg:items-center lg:justify-center">
      <div className="flex flex-col w-full max-w-5xl mb-28 sm:p-4 sm:rounded-lg sm:bg-white sm:flex-row lg:mb-0">
        <ContainerLeft currentStep={currentStep} />
        <div className="sm:mx-auto sm:my-2 sm:flex sm:flex-col w-full sm:justify-between">
          {currentStep === 1 && (
            <PersonalInfoForm
              formId={currentStep}
              onSubmit={handleSubmitPersonalInfo}
              initData={allData}
            />
          )}
          {currentStep === 2 && (
            <PlanForm
              formId={currentStep}
              onSubmit={handleSubmitPlan}
              initData={allData}
            />
          )}
          {currentStep === 3 && (
            <AddonsForm
              formId={currentStep}
              isYearly={allData.isYearly}
              onSubmit={handleSubmitAddons}
              initData={allData.addons}
            />
          )}

          {currentStep === 4 && !isFinished && (
            <FinishForm initData={allData} />
          )}

          {isFinished && <ThankYou />}

          {!isFinished && (
            <div className="w-full fixed bottom-0 p-5 flex bg-white z-10 md:mx-auto md:max-w-lg sm:relative">
              {currentStep > 1 && (
                <Button
                  ghost
                  onClick={() => setCurrentStep((step) => step - 1)}
                >
                  Go back
                </Button>
              )}
              <Button
                form={currentStep}
                onClick={() => {
                  if (currentStep === 4) {
                    setIsFinished(true);
                  }
                }}
                className="ml-auto"
              >
                {currentStep < 4 ? "Next Step" : "Confirm"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
