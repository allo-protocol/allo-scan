import { Metadata } from "@/types/types";
import JsonView from "@uiw/react-json-view";
import { TbExternalLink } from "react-icons/tb";
import { truncatedString } from "./Address";

const Metadata = (props: { isMobile: boolean; metadata: Metadata, metadataObj: Object }) => {
  const { isMobile } = props;
  const { metadata } = props;
  const { metadataObj } = props;

  return (
    <div>
      <div className="flex flex-row items-center">
        {isMobile ? truncatedString(metadata.pointer) : metadata.pointer}
        <a
          className="ml-2"
          // data-tip="view on explorer"
          target="_blank"
          href={"https://ipfs.io/ipfs/" + metadata.pointer}
        >
          <TbExternalLink />
        </a>
      </div>
      <div className="pb-6">
        <JsonView
          value={metadataObj}
          shortenTextAfterLength={120}
          collapsed={2}
        />
      </div>
    </div>
  );
};

export default Metadata;
