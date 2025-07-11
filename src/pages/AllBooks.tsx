import { MdEdit, MdDeleteOutline, MdLibraryBooks } from "react-icons/md";
import { useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import { useState } from "react";
import EditBookModal from "./EditBookModal";
import DeleteBookModal from "./DeleteModal";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useNavigate } from "react-router";
import BorrowBookModal from "./BorrowBookModal";

const AllBooks = () => {
  const { data: books } = useGetBooksQuery(undefined);

  const [isOpenBookEditModal, setIsOpenBookEditModal] = useState(false);
  const [isOpenBorrowModal, setIsBorrowModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [seletedBook, setSelectedBook] = useState<IBook | null>(null);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-[calc(100vh-60px)]">
      {/* Title & Description */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Book List</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Below is a list of all books currently available in the system. You
          can edit, delete, or borrow books as needed. Keep track of book
          availability and inventory efficiently.
        </p>
      </div>
      <div className="flex items-end justify-end text-end">
        <button
          className="py-2 px-6 bg-[#3B9DF8] text-white rounded-full hover:bg-blue-500 transition-all duration-200 mb-4 "
          onClick={() => navigate("/create-book")}
        >
          Add Book
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl ">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-50 text-blue-800">
            <tr>
              <th className="px-5 py-4">Title</th>
              <th className="px-5 py-4 text-center">Author</th>
              <th className="px-5 py-4 text-center">Genre</th>
              <th className="px-5 py-4 text-center">ISBN</th>
              <th className="px-5 py-4 text-center">Copies</th>
              <th className="px-5 py-4 text-center">Status</th>
              <th className="px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books?.data?.map((book: IBook, idx: number) => (
              <tr
                key={book._id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } transition-all`}
              >
                <td className="px-5 py-4">{book.title}</td>
                <td className="px-5 py-4 text-center">{book.author}</td>
                <td className="px-5 py-4 text-center">{book.genre}</td>
                <td className="px-5 py-4 text-center">{book.isbn}</td>
                <td className="px-5 py-4 text-center">{book.copies}</td>
                <td className="px-5 py-4 text-center">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      book.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {book.available ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        navigate(`/book/${book._id}`);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <HiOutlineExternalLink className="text-xl" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBook(book);
                        setIsOpenBookEditModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <MdEdit className="text-xl" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBookId(book._id ?? null);
                        setIsOpenDeleteModal(true);
                      }}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <MdDeleteOutline className="text-xl" />
                    </button>
                    <button
                      disabled={!book.available}
                      onClick={() => {
                        setSelectedBook(book);
                        setIsBorrowModal(true);
                      }}
                      className={`text-xl ${
                        book.available
                          ? "text-blue-600 hover:text-blue-800"
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                      title="Borrow"
                    >
                      <MdLibraryBooks />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        // Book Edit Modal
        isOpenBookEditModal && seletedBook && (
          <EditBookModal
            book={seletedBook}
            setIsOpenBookEditModal={setIsOpenBookEditModal}
          />
        )
      }
      {/* Book Borrow Modal */}
      {isOpenBorrowModal && seletedBook && (
        <BorrowBookModal
          book={seletedBook}
          setIsBorrowModal={setIsBorrowModal}
        />
      )}

      {/* Book Delete Modal */}
      {isOpenDeleteModal && selectedBookId && (
        <DeleteBookModal
          selectedBookId={selectedBookId}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
        />
      )}
    </div>
  );
};

export default AllBooks;
