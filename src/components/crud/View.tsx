import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import hooks for routing

interface Customer {
  id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
}

function ViewSpecificCustomer() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>(); // Get customer ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Fetch specific customer data
  useEffect(() => {
    axios
      .get<{ customer: Customer }>(
        `http://localhost:8000/api/customers/${id}/view`
      )
      .then((response) => {
        setCustomer(response.data.customer);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
        setLoading(false);
      });
  }, [id]);

  // Loading state
  if (loading) {
    return <div>Loading customer details...</div>;
  }

  // If customer not found, show a message
  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <div>
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Message:</strong> {customer.message}
        </p>
        {/* Back to Customers button */}
        <button onClick={() => navigate("/")}>Back to Customers</button>
      </div>
    </div>
  );
}

export default ViewSpecificCustomer;
