import { useState, useEffect } from "react";
import { hotels } from "../data/hotels";
import { meals } from "../data/meals";

const Step2 = ({ config, setConfig, nextStep, prevStep }) => {
  const [dailySelections, setDailySelections] = useState(
    Array.from({ length: config.days }, (_, i) => ({
      day: i + 1,
      hotel: "",
      lunch: "",
      dinner: "",
      total: 0,
    })),
  );

  const destinationHotels = hotels[config.destination] || [];
  const destinationMeals = meals[config.destination] || {
    lunch: [],
    dinner: [],
  };

  useEffect(() => {
    const updated = dailySelections.map((day) => {
      const hotelPrice =
        destinationHotels.find((h) => h.name === day.hotel)?.price || 0;
      const lunchPrice =
        destinationMeals.lunch.find((m) => m.name === day.lunch)?.price || 0;
      const dinnerPrice =
        destinationMeals.dinner.find((m) => m.name === day.dinner)?.price || 0;
      return { ...day, total: hotelPrice + lunchPrice + dinnerPrice };
    });
    setDailySelections(updated);
  }, [
    dailySelections
      .map((d) => [d.hotel, d.lunch, d.dinner])
      .flat()
      .join(","),
  ]);

  const handleNext = () => {
    setConfig({ ...config, dailySelections });
    nextStep();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Select Hotels & Meals
      </h2>

      <div className="space-y-6">
        {dailySelections.map((day, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Day {day.day}</h3>
              <span className="font-semibold text-blue-600 text-lg">
                Total: ${day.total}
              </span>
            </div>

            {/* Hotel Selection */}
            <div className="mb-4 relative">
              <label className="block mb-2 font-medium text-gray-700">
                Hotel
              </label>
              <select
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
                value={day.hotel}
                onChange={(e) => {
                  const updated = [...dailySelections];
                  updated[idx].hotel = e.target.value;
                  setDailySelections(updated);
                }}
              >
                <option value="">Select Hotel</option>
                {destinationHotels.map((h) => (
                  <option key={h.id} value={h.name}>
                    {h.name} (${h.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Meal Selection */}
            <div className="grid grid-cols-2 gap-4">
              {/* Lunch */}
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center justify-between">
                  Lunch
                  {config.boardType === "HB" && (
                    <span className="text-xs text-gray-500 ml-2">
                      Choose only one meal
                    </span>
                  )}
                </label>
                <select
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 transition
                    ${config.boardType === "NB" ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  value={day.lunch}
                  disabled={config.boardType === "NB"}
                  onChange={(e) => {
                    const updated = [...dailySelections];
                    updated[idx].lunch = e.target.value;
                    if (config.boardType === "HB" && e.target.value)
                      updated[idx].dinner = "";
                    setDailySelections(updated);
                  }}
                >
                  <option value="">Select Lunch</option>
                  {destinationMeals.lunch.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name} (${m.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dinner */}
              <div>
                <label className="block mb-2 font-medium text-gray-700 flex items-center justify-between">
                  Dinner
                  {config.boardType === "HB" && (
                    <span className="text-xs text-gray-500 ml-2">
                      Choose only one meal
                    </span>
                  )}
                </label>
                <select
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 transition
                    ${config.boardType === "NB" ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  value={day.dinner}
                  disabled={config.boardType === "NB"}
                  onChange={(e) => {
                    const updated = [...dailySelections];
                    updated[idx].dinner = e.target.value;
                    if (config.boardType === "HB" && e.target.value)
                      updated[idx].lunch = "";
                    setDailySelections(updated);
                  }}
                >
                  <option value="">Select Dinner</option>
                  {destinationMeals.dinner.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name} (${m.price})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 transition-colors font-semibold"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
