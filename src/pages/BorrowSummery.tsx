import { useGetBorrowSummaryQuery } from "../redux/api/baseApi";
import type { IBorrowedSummary } from "../types";

const BorrowSummary = () => {
  const { data: borrowedSummary } = useGetBorrowSummaryQuery(undefined);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16 min-h-[calc(100vh-60px)]">
      <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
        Borrowed Books Summary
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-blue-50 text-blue-700 uppercase text-xs tracking-wider">
              <th className="px-4 py-3">Book Title</th>
              <th className="px-4 py-3 text-center">ISBN</th>
              <th className="px-4 py-3 text-center">Total Quantity</th>
            </tr>
          </thead>

          <tbody>
            {borrowedSummary?.data?.map(
              (item: IBorrowedSummary, idx: number) => (
                <tr
                  key={idx}
                  className="hover:bg-blue-50 border-b last:border-none transition"
                >
                  <td className="px-4 py-3 text-gray-800">
                    {item?.book?.title}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    {item?.book?.isbn}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">
                    {item?.totalQuantity}
                  </td>
                </tr>
              )
            )}

            {!borrowedSummary?.data?.length && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-6 text-center text-gray-500 italic"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
