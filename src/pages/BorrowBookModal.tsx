import { FaTimesCircle } from "react-icons/fa";
import { useBorrowBookMutation } from "../redux/api/baseApi";
import toast from "react-hot-toast";
import type { IBook } from "../types";

interface BorrowBookModalProps {
  book: IBook;
  setIsBorrowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BorrowBookModal = ({ book, setIsBorrowModal }: BorrowBookModalProps) => {
  const [borrowBook] = useBorrowBookMutation();

  const handleBorrowBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const quantity = form.elements.namedItem("copies") as HTMLInputElement;
    const dueDate = form.elements.namedItem("dueDate") as HTMLInputElement;

    if (!quantity.value || !dueDate.value) {
      toast.error("Please fill all the fields");
      return;
    }

    const { data } = await borrowBook({
      book: book._id,
      quantity: quantity.value,
      dueDate: dueDate.value,
    });

    if (data?.success) {
      toast.success("Book borrowed successfully");
      setIsBorrowModal(false);
    } else {
      toast.error("Failed to borrow book");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/10 flex justify-center items-center px-4">
      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={() => setIsBorrowModal(false)}
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
        >
          <FaTimesCircle size={22} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Borrow Book
        </h2>

        {/* Borrow Form */}
        <form onSubmit={handleBorrowBook} className="space-y-5">
          <div>
            <label htmlFor="copies" className="block text-sm text-gray-700 mb-1">
              Number of Copies
            </label>
            <input
              type="number"
              id="copies"
              name="copies"
              min={1}
              max={book?.copies}
              placeholder="Enter number of copies to borrow"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-sm text-gray-700 mb-1">
              Select Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-blue-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Borrow Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowBookModal;
