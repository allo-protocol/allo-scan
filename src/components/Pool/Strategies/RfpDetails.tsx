import { TListProps, TTableData } from "@/types/types";
import { Status, TRfpStrategy, TTokenMetadata } from "../types";
import List from "@/components/List";
import { Address, AddressResponsive } from "@/components/Address";
import { amountString } from "@/utils/utils";
import Table from "@/components/Table";
import Metadata from "@/components/Metadata";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const RfpDetails = ({
  details,
  tokenMetadata,
  chainId,
}: {
  details: TRfpStrategy;
  tokenMetadata: TTokenMetadata;
  chainId: number;
}) => {
  const isMobile = useMediaQuery(768);
  const recipientsTable: TTableData = {
    headers: [
      "Recipient",
      "Recipient Address",
      "Proposal Bid",
      "Status",
      "Registry Anchor",
    ],
    rows: details.recipients.map((r) => [
      // eslint-disable-next-line react/jsx-key
      <Address address={r.recipient} chainId={chainId} />,
      // eslint-disable-next-line react/jsx-key
      <Address address={r.recipientAddress} chainId={chainId} />,
      amountString(r.proposalBid, tokenMetadata, chainId),
      r.recipientStatus.toString(),
      r.useRegistryAnchor ? "Yes" : "No",
    ]),
  };

  const milestonesTable: TTableData = {
    headers: ["Amount", "Metadata", "Status"],
    rows: details.milestones.map((m) => [
      m.amountPercentage.toString() + "%",
      // eslint-disable-next-line react/jsx-key
      <Metadata
        metadata={m.metadata}
        isMobile={isMobile}
        metadataObj={m.metadataObj}
        shortenTexteAfterLength={100}
        collapsed={0}
      />,
      Status[m.milestoneStatus],
    ]),
  };

  const distributionsTable: TTableData = {
    headers: ["Recipient", "Recipient Address", "Amount", "Sender"],
    rows: details.distributions.map((r) => [
      // eslint-disable-next-line react/jsx-key
      <Address address={r.acceptedRecipient} chainId={chainId} />,
      // eslint-disable-next-line react/jsx-key
      <Address address={r.recipientAddress} chainId={chainId} />,
      amountString(r.amount, tokenMetadata, chainId),
      // eslint-disable-next-line react/jsx-key
      <Address address={r.sender} chainId={chainId} />,
    ]),
  };

  const rfpDetailsRecipientsTable: TTableData = {
    headers: ["Recipients"],
    rows: [
      [
        // eslint-disable-next-line react/jsx-key
        <Table
          data={recipientsTable}
          header={undefined}
          description={undefined}
          rowsPerPage={recipientsTable.rows.length}
          showPagination={false}
          showBorder={false}
        />,
      ],
    ],
  };

  const rfpDetailsMilestonesTable: TTableData = {
    headers: ["Milestones"],
    rows: [
      [
        // eslint-disable-next-line react/jsx-key
        <Table
          data={milestonesTable}
          header={undefined}
          description={undefined}
          rowsPerPage={milestonesTable.rows.length}
          showPagination={false}
          showBorder={false}
        />,
      ],
    ],
  };

  const rfpDetailsDistributionsTable: TTableData = {
    headers: ["Distributions"],
    rows: [
      [
        // eslint-disable-next-line react/jsx-key
        <Table
          data={distributionsTable}
          header={undefined}
          description={undefined}
          rowsPerPage={distributionsTable.rows.length}
          showPagination={false}
          showBorder={false}
        />,
      ],
    ],
  };

  const listProps: TListProps[] = [
    {
      label: "Use Registry Anchor",
      value: details.useRegistryAnchor ? "Yes" : "No",
    },
    {
      label: "Metadata Required",
      value: details.metadataRequired ? "Yes" : "No",
    },
    {
      label: "Accepted Recipient",
      value: (
        // eslint-disable-next-line react/jsx-key
        <AddressResponsive
          address={details.acceptedRecipient}
          chainId={chainId}
        />
      ),
    },
    {
      label: "Max Bid",
      value: amountString(details.maxBid, tokenMetadata, chainId),
    },
    {
      label: "Upcoming Milestone Id",
      value: details.upcomingMilsetoneId.toString(),
    },
  ];

  return (
    <div>
      <div className="flex flex-row">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          RFP Strategy Details
        </h3>
      </div>
      <div className="flex flex-row">
        <List data={listProps} />
      </div>

      <div className="flex flex-row">
        <Table
          data={rfpDetailsRecipientsTable}
          header={undefined}
          description={undefined}
          rowsPerPage={rfpDetailsRecipientsTable.rows.length}
          showPagination={false}
          showBorder={false}
        />
      </div>

      <div className="flex flex-row">
        <Table
          data={rfpDetailsMilestonesTable}
          header={undefined}
          description={undefined}
          rowsPerPage={rfpDetailsMilestonesTable.rows.length}
          showPagination={false}
          showBorder={false}
        />
      </div>

      <div className="flex flex-row">
        <Table
          data={rfpDetailsDistributionsTable}
          header={undefined}
          description={undefined}
          rowsPerPage={rfpDetailsDistributionsTable.rows.length}
          showPagination={false}
          showBorder={false}
        />
      </div>
    </div>
  );
};

export default RfpDetails;
