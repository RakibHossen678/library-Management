import toast from "react-hot-toast";
import { useDeleteBookMutation } from "../redux/api/baseApi";

interface DeleteBookModalProps {
  selectedBookId: string;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteBookModal = ({
  selectedBookId,
  setIsOpenDeleteModal,
}: DeleteBookModalProps) => {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    try {
      const { data } = await deleteBook(id);
      if (data?.success) {
        toast.success("Book deleted successfully");
        setIsOpenDeleteModal(false);
      } else {
        toast.error("Failed to delete the book");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the book");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-semibold text-red-600 text-center mb-4">
          Confirm Deletion
        </h2>

        <p className="text-gray-700 text-center mb-6">
          Are you sure you want to delete this book? This action cannot be undone.
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
            onClick={() => handleDelete(selectedBookId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookModal;
