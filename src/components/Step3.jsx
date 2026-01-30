import { useState } from "react";

const Step3 = ({ config, setConfig, prevStep, setStep }) => {
  // Ümumi total
  const grandTotal = config.dailySelections?.reduce(
    (acc, day) => acc + day.total,
    0,
  );

  const handleConfirm = () => {
    alert("Booking Confirmed! ✅");

    // Reset config
    setConfig({
      citizenship: "",
      startDate: "",
      days: 1,
      destination: "",
      boardType: "FB",
      dailySelections: [],
    });

    // Back to Step 1
    setStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Booking Summary
      </h2>

      <div className="space-y-6">
        {config.dailySelections?.map((day, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">Day {day.day}</h3>
              <span className="font-semibold text-blue-600">${day.total}</span>
            </div>
            <ul className="text-gray-700">
              <li>Hotel: {day.hotel || "-"}</li>
              <li>Lunch: {day.lunch || "-"}</li>
              <li>Dinner: {day.dinner || "-"}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-xl font-semibold">
        Grand Total: ${grandTotal || 0}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 transition-colors font-semibold"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Step3;
