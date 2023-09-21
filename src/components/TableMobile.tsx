import { TTableData } from "@/types/types";

const TableMobile = ({
  data,
  currentRows,
}: {
  data: TTableData;
  currentRows: (string | JSX.Element | undefined)[][];
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      {/* <thead className="mx-2">
        <tr key={"header-row"}>
          {data.headers?.map((header, index) => (
            <th
              key={"headers-" + index}
              scope="col"
              className="text-left text-sm font-semibold text-gray-900"
            >
              <div className="group inline-flex">{header}</div>
            </th>
          ))}
        </tr>
      </thead> */}
      <tbody className="">
        {currentRows.map((row, index) => (
          <tr key={"rows-" + index}>
            <div className="m-2 p-1 border rounded-md flex-col w-full col-span-full">
              {row.map((col, colIndex) => (
                <td
                  key={"rows-" + index + "-col-" + colIndex}
                  className="max-w-0 py-4 pr-3 text-sm font-medium text-gray-900 w-auto sm:max-w-none pl-0"
                >
                  {col}
                </td>
              ))}
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableMobile;
