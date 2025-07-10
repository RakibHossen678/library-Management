import toast from "react-hot-toast";
import { useAddBookMutation } from "../redux/api/baseApi";
import { useNavigate } from "react-router";
const AddBooks = () => {
  const [addBook] = useAddBookMutation(undefined);
  const naivigate = useNavigate();

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

    const book = {
      title,
      author,
      genre,
      isbn,
      copies: parseInt(copies),
      description,
      available: true,
    };
    const { data } = await addBook(book);

    if (data?.success) {
      toast.success("Book added successfully");
      naivigate("/books");
      form.reset();
    }
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto min-h-[calc(100vh-60px)] px-5 py-10">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Add New Book
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Fill in the details below to add a new book to the collection.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmitForm} className="bg-white p-8 rounded-xl">
        <div className="grid gap-6">
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1 text-sm text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter book title"
              className="border border-gray-300 rounded px-4 py-2 outline-none  "
            />
          </div>

          {/* Author */}
          <div className="flex flex-col">
            <label htmlFor="author" className="mb-1 text-sm text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              placeholder="Enter author's name"
              className="border border-gray-300 rounded px-4 py-2 outline-none  "
            />
          </div>

          {/* Genre */}
          <div className="flex flex-col">
            <label htmlFor="genre" className="mb-1 text-sm text-gray-700">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              required
              placeholder="Enter book genre"
              className="border border-gray-300 rounded px-4 py-2 outline-none  "
            />
          </div>

          {/* ISBN */}
          <div className="flex flex-col">
            <label htmlFor="isbn" className="mb-1 text-sm text-gray-700">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              required
              placeholder="Enter ISBN number"
              className="border border-gray-300 rounded px-4 py-2 outline-none  "
            />
          </div>

          {/* Copies */}
          <div className="flex flex-col">
            <label htmlFor="copies" className="mb-1 text-sm text-gray-700">
              Copies
            </label>
            <input
              type="number"
              id="copies"
              name="copies"
              min={0}
              required
              placeholder="Number of copies"
              className="border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 "
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 text-sm text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Brief description of the book"
              className="border border-gray-300 rounded px-4 py-2 outline-none   resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-[#3B9DF8]  transition-colors text-white font-semibold px-6 py-2 rounded-lg"
          >
            Save Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
