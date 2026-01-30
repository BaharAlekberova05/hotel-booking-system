import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { countries } from "../data/countries";
import { boardTypes } from "../data/boardTypes";

const Step1 = ({ config, setConfig, nextStep }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Formik
        initialValues={config}
        validationSchema={Yup.object({
          citizenship: Yup.string().required("Required"),
          startDate: Yup.date().required("Required"),
          days: Yup.number().min(1).required("Required"),
          destination: Yup.string().required("Required"),
          boardType: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          setConfig(values);
          nextStep();
        }}
      >
        <Form className="space-y-6 bg-white p-10 rounded-2xl shadow-xl">
          {/* Citizenship */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Citizenship
            </label>
            <Field
              as="select"
              name="citizenship"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none transition"
            >
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="citizenship"
              component="div"
              className="text-red-500 mt-1 text-sm"
            />
          </div>

          {/* Start Date & Days */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Start Date
              </label>
              <Field
                type="date"
                name="startDate"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none transition"
              />
              <ErrorMessage
                name="startDate"
                component="div"
                className="text-red-500 mt-1 text-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Number of Days
              </label>
              <Field
                type="number"
                name="days"
                min="1"
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none transition"
              />
              <ErrorMessage
                name="days"
                component="div"
                className="text-red-500 mt-1 text-sm"
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Destination
            </label>
            <Field
              as="select"
              name="destination"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none transition"
            >
              <option value="">Select destination</option>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="destination"
              component="div"
              className="text-red-500 mt-1 text-sm"
            />
          </div>

          {/* Board Type */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Board Type
            </label>
            <div className="flex gap-3">
              {boardTypes.map((b) => (
                <Field name="boardType" key={b.code}>
                  {({ field, form }) => {
                    const isSelected = form.values.boardType === b.code;
                    return (
                      <label
                        className={`
                          flex-1 cursor-pointer p-4 border rounded-xl text-center transition-all transform
                          ${isSelected ? "bg-blue-500 text-white scale-105 border-blue-500 shadow-lg" : "bg-white hover:scale-105 hover:bg-blue-50"}
                        `}
                      >
                        <input
                          type="radio"
                          {...field}
                          value={b.code}
                          className="hidden"
                        />
                        <div className="text-lg font-medium">{b.name}</div>
                      </label>
                    );
                  }}
                </Field>
              ))}
            </div>
            <ErrorMessage
              name="boardType"
              component="div"
              className="text-red-500 mt-1 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl shadow-xl hover:scale-95 hover:brightness-110 transition-transform font-semibold cursor-pointer"
          >
            Next Step
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step1;
