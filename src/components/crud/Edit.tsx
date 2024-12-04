import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Add useNavigate for navigation
import { useDispatch, useSelector } from "react-redux";
import { setFormData, resetFormData } from "../state/form/formSlice";
import { setLoading } from "../state/loading/loadingSlice";
import { RootState } from "../state/store";

interface Customer {
  id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
}

function Edit() {
  const { id } = useParams<{ id: string }>(); // Get customer ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add useNavigate to redirect after submission

  // Access form data from the Redux store
  const formData = useSelector((state: RootState) => state.form);

  const [customer, setCustomer] = useState<Customer | null>(null);
  const loading = useSelector((state: RootState) => state.loading.loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true)); // Set loading to true before fetching data
        const response = await axios.get<{ customer: Customer }>(
          `http://localhost:8000/api/customers/${id}/edit`
        );
        setCustomer(response.data.customer);
        // Dispatch the customer data to the Redux store
        dispatch(
          setFormData({
            name: response.data.customer.name,
            email: response.data.customer.email,
            phone: response.data.customer.phone,
            message: response.data.customer.message,
          })
        );
      } catch (error) {
        console.error("Error fetching customer details:", error);
      } finally {
        dispatch(setLoading(false)); // Set loading to false whether the request succeeds or fails
      }
    };

    fetchData(); // Call the async function
  }, [id, dispatch]); // Re-run effect whenever `id` changes

  // Input Change with State
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Update the Redux state when input changes
    dispatch(setFormData({ ...formData, [e.target.id]: e.target.value }));
  };

  // Update Data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/customers/${id}/update`,
        formData
      ); // Use PUT for updating data

      console.log("Customer updated:", response.data.message);
      alert("Customer updated successfully!");
      navigate("/index");
    } catch (error) {
      console.error("Error updating customer:", error);
      alert("Failed to update customer.");
    }
  };

  if (loading) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Customer</h2>
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
            placeholder="Enter name"
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
            placeholder="Enter email"
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
            placeholder="Enter phone number"
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
            placeholder="Enter message"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Edit;