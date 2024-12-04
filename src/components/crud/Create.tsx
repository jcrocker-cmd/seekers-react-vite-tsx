import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, resetFormData } from "../state/form/formSlice";
import { RootState } from "../state/store";
import View from "./Index";

function Create() {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form); // Accessing form data from Redux

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setFormData({ ...formData, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/create-customer", formData)
      .then((response) => {
        console.log("Data saved:", response.data);
        alert("Data submitted successfully!");
        dispatch(resetFormData()); // Reset form data after submission
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to submit data.");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm"
          >
            Submit
          </button>
        </form>
      </div>
      <View></View>
    </>
  );
}

export default Create;
