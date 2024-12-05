import Swal from "sweetalert2";

const DeleteAlert = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    console.log("User confirmed the action");
    // Perform the action
  } else {
    console.log("User canceled the action");
  }
};

export default DeleteAlert;
