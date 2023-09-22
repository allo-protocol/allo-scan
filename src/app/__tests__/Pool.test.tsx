import { render, screen } from "@testing-library/react";
import Pool from "@/components/Pool/Pool";
import "@testing-library/jest-dom";
import { TPoolDetail } from "@/components/Pool/types";
// import { ethers } from "ethers";
import { convertAddressToShortString } from "@/components/Address";

const mockPoolData: TPoolDetail[] = [
  {
    poolId: "1",
    chainId: "5",
    amount: 1000,
    metadataPointer:
      "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
    metadataProtocol: 1,
    strategy: "0xba449edae20800e545c12cb14e66b51693f498d2",
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    profile: {
      profileId:
        "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
      anchor: "0xa671616e3580d3611139834cd34d7838e82a04cd",
      name: "Profile1",
      creator: "0x1fd06f088c720ba3b7a3634a8f021fdd485dca42",
      chainId: 5,
      owner: "0x1fd06f088c720ba3b7a3634a8f021fdd485dca42",
    },
    tokenMetadata: {
      name: "Token1",
      symbol: "T1",
      decimals: 18,
    },
  },
  {
    poolId: "2",
    chainId: "5",
    amount: 2000,
    metadataPointer:
      "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
    metadataProtocol: 1,
    strategy: "0xba449edae20800e545c12cb14e66b51693f498d2",
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    profile: {
      profileId:
        "0x2b4a116a803067abc982458913a2eac20b9348777dbe9795bf3b1aa522160415",
      anchor: "0xa671616e3580d3611139834cd34d7838e82a04cd",
      name: "Profile2",
      creator: "0x1fd06f088c720ba3b7a3634a8f021fdd485dca42",
      chainId: 5,
      owner: "0x1fd06f088c720ba3b7a3634a8f021fdd485dca42",
    },
    tokenMetadata: {
      name: "Token2",
      symbol: "T2",
      decimals: 12,
    },
  },
];

describe("Pools Table", () => {
  beforeEach(() => {
    render(<Pool data={mockPoolData} />);
  });

  it("renders the pool page heading", () => {
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Token")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Profile Name")).toBeInTheDocument();
    expect(screen.getByText("Profile Owner")).toBeInTheDocument();
    expect(screen.getByText("Network")).toBeInTheDocument();
  });

  it("loads the pool table body data", () => {
    const tokenAddress = convertAddressToShortString(
      "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    // expect(screen.getByText(tokenAddress)).toBeInTheDocument();
    // expect(screen.getByText(ethers.formatEther("1000"))).toBeInTheDocument();
    // expect(screen.getByText(ethers.formatEther("2000"))).toBeInTheDocument();
    expect(screen.getByText("Profile1")).toBeInTheDocument();
    expect(screen.getByText("Profile2")).toBeInTheDocument();
    // expect(
    //   screen.getByText("0x1fd06f088c720ba3b7a3634a8f021fdd485dca42")
    // ).toBeInTheDocument();
    // expect(screen.getByText("Goerli(5)")).toBeInTheDocument();
  });
});
