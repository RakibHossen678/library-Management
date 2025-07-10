import { MdDeleteOutline, MdEdit, MdLibraryBooks } from "react-icons/md";
import { useGetBooksQuery } from "../../../redux/api/baseApi";
import type { IBook } from "../../../types";
import EditBookModal from "../../../pages/EditBookModal";
import DeleteBookModal from "../../../pages/DeleteModal";
import { useState } from "react";

const Books = () => {
  const { data: books } = useGetBooksQuery(undefined);
  const [isOpenBookEditModal, setIsOpenBookEditModal] = useState(false);
  const [isOpenBorrowModal, setIsBorrowModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [seletedBook, setSelectedBook] = useState<IBook | null>(null);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
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
                        setSelectedBookId(book._id ?? null);
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
      {
        // Book Borrow Modal
        isOpenBorrowModal && <div></div>
      }
      {
        // Book Delete Modal
        isOpenDeleteModal && (
          <DeleteBookModal
            selectedBookId={selectedBookId}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
          />
        )
      }
    </div>
  );
};

export default Books;
