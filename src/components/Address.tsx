import { TbCopy, TbExternalLink } from "react-icons/tb";

export const convertAddressToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const convertBytesToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const Address = (props: { address: string; network: any }) => {
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="flex items-center">
      <div className="ml-3 text-sm font-medium text-gray-900">
        {convertAddressToShortString(props.address)}
      </div>
      <div
        onClick={() => copyAddress(props.address)}
        className="flex-shrink-0 h-5 w-5 mt-1.5 ml-1 cursor-pointer"
      >
        <TbCopy />
      </div>
      <div>
        <a
          // className="tooltip"
          // data-tip="view on explorer"
          target="_blank"
          href={props.network.explorer + "/address/" + props.address}
        >
          <TbExternalLink />
        </a>
      </div>
    </div>
  );
};
