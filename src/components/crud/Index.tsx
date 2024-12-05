import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../state/loading/loadingSlice";
import { RootState } from "../state/store";
import Swal from "sweetalert2";

// Define the type for customer data
interface Customer {
  id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
}

function View() {
  const [customers, setCustomers] = useState<Customer[]>([]); // State with type
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading.loading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true)); // Set loading to true before fetching data
      try {
        const response = await axios.get<{ customer: Customer[] }>(
          "http://localhost:8000/api/customers"
        );
        setCustomers(response.data.customer);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading(false)); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, [dispatch]);

  // Delete a customer
  const handleDelete = async (id: number) => {
    // Show the SweetAlert2 confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // If user confirms, proceed with delete
    if (result.isConfirmed) {
      try {
        // Make DELETE request to your API
        const response = await axios.delete(
          `http://localhost:8000/api/customers/${id}/delete`
        );

        // Show success alert
        Swal.fire("Deleted!", response.data.message, "success");
        console.log(response.data);

        // Optionally: Fetch the updated list of customers
        const updatedList = await axios.get(
          "http://localhost:8000/api/customers"
        );
        setCustomers(updatedList.data.customer);
      } catch (error) {
        console.error("Error deleting customer:", error);
        Swal.fire("Error!", "Failed to delete customer.", "error");
      }
    } else {
      // User canceled the action
      console.log("User canceled the deletion.");
    }
  };

  // Handle loading state
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">View Table</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Message
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className={customer.id % 2 === 0 ? "bg-gray-200" : ""}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {customer.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {customer.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex text-sm gap-2">
                  <Link to={`/customers/${customer.id}/view`}>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                      View
                    </button>
                  </Link>

                  <Link to={`/customers/${customer.id}/edit`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>

                  {/* <button
                    onClick={() => deleteALert()}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Swal
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
