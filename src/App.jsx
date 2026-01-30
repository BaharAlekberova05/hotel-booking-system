import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import StepIndicator from "./components/StepIndicator";

const App = () => {
  const [step, setStep] = useState(1);

  const [config, setConfig] = useState({
    citizenship: "",
    startDate: "",
    days: 1,
    destination: "",
    boardType: "FB",
    dailySelections: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <StepIndicator currentStep={step} />

      {step === 1 && (
        <Step1
          config={config}
          setConfig={setConfig}
          nextStep={nextStep}
          currentStep={step}
        />
      )}
      {step === 2 && (
        <Step2
          config={config}
          setConfig={setConfig}
          nextStep={nextStep}
          currentStep={step}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          config={config}
          setConfig={setConfig}
          currentStep={step}
          prevStep={prevStep}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default App;
