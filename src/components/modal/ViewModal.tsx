import "../../assets/css/modal.css"; // Assuming the CSS is saved in a separate file

// The customer parameter passed into openModal is from the .map loop,
//  and it’s used to set the state (selectedCustomer),
//  which is then passed to the ViewModal component.

interface Customer {
  id: number;
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer; // We are passing customer details to the modal
}

const ViewModal = ({ isOpen, onClose, customer }: ModalProps) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <>
      <div className="modal-backdrop">
        <div className="modal">
          <div className="modal-header">
            <h5 className="modal-title">Customer Details</h5>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-content">
            <p>
              <strong>ID:</strong> {customer.id}
            </p>
            <p>
              <strong>Name:</strong> {customer.name}
            </p>
            <p>
              <strong>Email:</strong> {customer.email}
            </p>
            <p>
              <strong>Message:</strong> {customer.message}
            </p>
            <p>
              <strong>Phone:</strong> {customer.phone}
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModal;
