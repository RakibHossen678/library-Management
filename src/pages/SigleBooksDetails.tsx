import { useParams } from "react-router";
import { useGetBookQuery } from "../redux/api/baseApi";

const SingleBookDetails = () => {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id as string);
  const details = book?.data;
  console.log(details);

  return (
    <div className="min-h-[calc(100vh-60px)] bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl p-6">
        {/* Title & Author */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {details?.title}
          </h1>
          <p className="text-sm text-gray-500 mt-1">by {details?.author}</p>
        </div>

        {/* Book Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-sm text-gray-700">
          <div>
            <p className="text-gray-400 uppercase text-xs mb-1">Genre</p>
            <p>{details?.genre}</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase text-xs mb-1">ISBN</p>
            <p>{details?.isbn}</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase text-xs mb-1">Availability</p>
            <p
              className={`${
                details?.available ? "text-green-600" : "text-red-500"
              } font-medium`}
            >
              {details?.available ? "Available" : "Not Available"}
            </p>
          </div>
          <div>
            <p className="text-gray-400 uppercase text-xs mb-1">Copies</p>
            <p>{details?.copies}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-400 uppercase text-xs mb-2">Description</p>
          <p className="text-sm text-gray-800 leading-relaxed">
            {details?.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetails;
