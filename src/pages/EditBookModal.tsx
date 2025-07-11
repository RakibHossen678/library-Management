import toast from "react-hot-toast";
import { useUpdateBookMutation } from "../redux/api/baseApi";
import type { IBook } from "../types";

interface EditBookModalProps {
  book: IBook;
  setIsOpenBookEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditBookModal = ({
  book,
  setIsOpenBookEditModal,
}: EditBookModalProps) => {
  const [updateBook] = useUpdateBookMutation();

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const author = (form.elements.namedItem("author") as HTMLInputElement)
      .value;
    const genre = (form.elements.namedItem("genre") as HTMLInputElement).value;
    const isbn = (form.elements.namedItem("isbn") as HTMLInputElement).value;
    const copies = (form.elements.namedItem("copies") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    const UpdateBook = {
      title: title || book.title,
      author: author || book.author,
      genre: genre || book.genre,
      isbn: isbn || book.isbn,
      copies: copies ? parseInt(copies) : book.copies,
      description: description || book.description,
    };

    const { data: result } = await updateBook({
      id: book._id,
      data: UpdateBook,
    });

    if (!result?.success) {
      toast.error("Book update failed");
      return;
    }

    toast.success("Book updated successfully");
    setIsOpenBookEditModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/10 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmitForm}
        className="bg-white w-full max-w-3xl rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Edit Book
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={book.title}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>

          <div>
            <label htmlFor="author" className="text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={book.author}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>

          <div>
            <label htmlFor="genre" className="text-sm font-medium text-gray-700">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              defaultValue={book.genre}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>

          <div>
            <label htmlFor="isbn" className="text-sm font-medium text-gray-700">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              defaultValue={book.isbn}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>

          <div>
            <label htmlFor="copies" className="text-sm font-medium text-gray-700">
              Copies
            </label>
            <input
              type="number"
              id="copies"
              name="copies"
              defaultValue={book.copies}
              min={0}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={book.description}
              rows={4}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md outline-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-4">
          <button
            type="button"
            onClick={() => setIsOpenBookEditModal(false)}
            className="px-5 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookModal;
