import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TListProps } from "@/types/types";

const List = (props: {data: TListProps[]}) => {
  const isMobile = useMediaQuery(768);
  const py = isMobile ? "py-2" : "py-6";

  return (
    <div className="mt-6 border-t border-gray-100 w-full">
      <dl className="divide-y divide-gray-100">
        {props.data.map((d, index) => (
          <div
            key={`list-div-` + index}
            className={`px-4 ${py} sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0`}
          >
            <dt
              key={`list-dt-` + index}
              className="text-sm font-medium leading-6 text-gray-900"
            >
              {d.label}
            </dt>
            <dd
              key={`list-dd-` + index}
              className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
            >
              {d.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default List;
