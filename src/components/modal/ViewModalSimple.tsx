import "../../assets/css/modal.css"; // Assuming the CSS is saved in a separate file

// The customer parameter passed into openModal is from the .map loop,
//  and it’s used to set the state (selectedCustomer),
//  which is then passed to the ViewModal component.

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ViewModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <>
      <div className="modal-backdrop">
        <div className="modal">
          <div className="modal-header">
            <h5 className="modal-title">Simple Modal</h5>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-content">{children}</div>
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
