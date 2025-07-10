import toast from "react-hot-toast";
import { useDeleteBookMutation } from "../redux/api/baseApi";

const DeleteBookModal = ({ selectedBookId, setIsOpenDeleteModal }) => {
  const [deleteBook] = useDeleteBookMutation(undefined);
  const handleDelete = async (id: string) => {
    console.log(id);
    await deleteBook(id);
    toast.success("Book deleted successfully");
    setIsOpenDeleteModal(false);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-semibold text-red-600 text-center mb-4">
          Confirm Deletion
        </h2>

        <p className="text-gray-700 text-center mb-6">
          Are you sure you want to delete This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            onClick={() => setIsOpenDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 transition"
            onClick={() => {
              handleDelete(selectedBookId);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookModal;
