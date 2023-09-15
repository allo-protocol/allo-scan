/*
    Search component with sort by network feature
    - todo: ÍSearch networks by `chainId`
    - todo:
*/
import {
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const Sort = () => {
  return (
    <div>
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          className="hidden relative -ml-px lg:inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <BarsArrowUpIcon
            className="-ml-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Sort
        </button>
      </div>
    </div>
  );
};

export default Sort;
