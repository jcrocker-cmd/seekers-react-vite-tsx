import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define form input types
type FormInputs = {
  name: string;
  email: string;
  age: number;
};

const App: React.FC = () => {
  const {
    register: submit, // Registers input fields
    handleSubmit, // Handles form submission
    formState: { errors }, // Contains validation errors
  } = useForm<FormInputs>();

  // Define what happens on form submit
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-md mx-auto mt-40"
    >
      {/* Name Input */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...submit("name", { required: "Name is required" })}
          className="border rounded p-2 w-full"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...submit("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          className="border rounded p-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      {/* Age Input */}
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          {...submit("age", {
            required: "Age is required",
            min: { value: 18, message: "You must be at least 18" },
          })}
          className="border rounded p-2 w-full"
        />
        {errors.age && (
          <span className="text-red-500">{errors.age.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default App;
