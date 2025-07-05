import {
  FiEye,
  FiEdit2,
  FiTrash2,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

// Fake data to simulate backend/database
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    isbn: "9780743273565",
    copies: 5,
    available: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    isbn: "9780735211292",
    copies: 3,
    available: false,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    isbn: "9780451524935",
    copies: 8,
    available: true,
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 2,
    available: true,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    isbn: "9780547928227",
    copies: 0,
    available: false,
  },
];

const Books = () => {
  return (
    <div className="p-6 my-10 max-w-6xl mx-auto">
      <div className=" mb-7">
        <h2 className="text-4xl text-center w-full font-semibold text-gray-800">
          Library Book Inventory
        </h2>
        <p className="text-center text-sm  text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore and manage your library’s collection of books. Track available
          copies, browse genres, and keep everything organized with ease using
          this dynamic inventory table.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden ">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600 text-sm font-medium">
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Author</th>
              <th className="px-6 py-3 hidden md:table-cell">Genre</th>
              <th className="px-6 py-3 hidden lg:table-cell">ISBN</th>
              <th className="px-6 py-3">Copies</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-gray-700">{book.author}</td>
                <td className="px-6 py-4 text-gray-700 hidden md:table-cell">
                  {book.genre}
                </td>
                <td className="px-6 py-4 text-gray-500 hidden lg:table-cell">
                  {book.isbn}
                </td>
                <td className="px-6 py-4 text-gray-700">{book.copies}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {book.available ? (
                      <>
                        <FiCheckCircle className="text-green-500 mr-1.5" />
                        <span className="text-green-600">Available</span>
                      </>
                    ) : (
                      <>
                        <FiXCircle className="text-red-500 mr-1.5" />
                        <span className="text-red-600">Unavailable</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                      <FiEye />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors">
                      <FiEdit2 />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
