import React, { useState } from "react";
import DummyNftList from "./components/DummyNFTList";

const nfts = [
  {
    id: "1",
    name: "Dummy NFT 1",
    description: "This is a dummy NFT for testing purposes.",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
    owner: "0x1234567890123456789012345678901234567890",
  },
  {
    id: "2",
    name: "Dummy NFT 2",
    description: "This is another dummy NFT for testing purposes.",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
    owner: "0x1234567890123456789012345678901234567890",
  },
  {
    id: "3",
    name: "Dummy NFT 3",
    description: "This is a third dummy NFT for testing purposes.",
    imageUrl: "https://dummyimage.com/600x400/000/fff",
    owner: "0x1234567890123456789012345678901234567890",
  },
];

export default function AppTest() {
  const [choosenNft, setChoosenNft] = useState(null);

  const handleNftClick = (nft) => {
    setChoosenNft(nft);
  };

  return (
    <div>
      <DummyNftList nfts={nfts} onNftClick={handleNftClick} />
    </div>
  );
}
