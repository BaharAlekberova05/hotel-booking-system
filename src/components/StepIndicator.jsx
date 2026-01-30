const StepIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Config" },
    { id: 2, name: "Meals" },
    { id: 3, name: "Summary" },
  ];

  return (
    <div className="flex justify-between mb-8 mt-4">
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        return (
          <div key={step.id} className="flex-1 text-center">
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center
                ${isActive ? "bg-blue-500 text-white" : isCompleted ? "bg-green-500 text-white" : "border-2 border-gray-300 text-gray-500"}`}
            >
              {step.id}
            </div>
            <span className="text-sm mt-2 block">{step.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default StepIndicator;
