import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TTableData } from "@/types/types";
import { useState } from "react";
import TableMobile from "./TableMobile";

/** TODO: the mobile view needs to be completed
 * we could create a new component for mobile view entirely
 */
const Table = ({
  data,
  header,
  description,
  rowsPerPage = 10,
  showPagination,
}: {
  data: TTableData;
  header: string | undefined | "";
  description: string | undefined | "";
  rowsPerPage?: number;
  showPagination?: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.rows.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentRows = data.rows.slice(startRow, endRow);

  const isMobile = useMediaQuery(768);

  console.log("isMobile", isMobile);

  return (
    <>
      <div
        className={`px-4 sm:px-6 lg:px-8 ${
          header || description ? "pt-2 mt-10" : ""
        }`}
      >
        <div className="sm:flex flex flex-col items-center">
          {(header || description) && (
            <div className="sm:flex-auto flex-auto">
              {header && (
                <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
                  {header}
                </h1>
              )}
              {description && (
                <p className="mt-2 text-center text-sm text-gray-700">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:border lg:rounded-md lg:shadow-gray lg:shadow-md">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {!isMobile ? (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr
                      key={"header-row"}
                      className="md:table-row lg:table-row"
                    >
                      {data.headers?.map((header, index) => (
                        <th
                          key={"headers-" + index}
                          scope="col"
                          className="py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                          <div className="group inline-flex">{header}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentRows.map((row, index) => (
                      <tr key={"rows-" + index}>
                        {row.map((col, colIndex) => (
                          <>
                            <td
                              key={"rows-" + index + "-col-" + colIndex}
                              className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0 lg:table-cell"
                            >
                              {col}
                            </td>
                          </>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <TableMobile data={data} currentRows={currentRows} />
              )}
            </div>
          </div>
        </div>
      </div>
      {showPagination && (
        <div className="flex justify-between my-4">
          <button
            className="px-4 py-2 text-white bg-green-700 rounded disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mt-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 text-white bg-green-700 rounded disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
