import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { OpenSeaSDK, Network } from "opensea-js";
import { Spin } from "antd";
import NftList from "./components/NFTList";
import NftCard from "./components/NFTCard";

export default function App() {
  const [nfts, setNfts] = useState([]);
  const [choosenNft, setChoosenNft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openSea, setOpenSea] = useState(null);

  useEffect(() => {
    const loadOpenSea = async () => {
      const provider = new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/PROJECT_ID"
      );
      const seaport = new OpenSeaSDK(provider, {
        networkName: Network.Main,
        apiKey: "YOUR API KEY",
      });
      setOpenSea(seaport);
    };
    loadOpenSea();
  }, []);

  {
    /* this function sets up a connection to the Ethereum blockchain via the Infura API, and creates an instance of the OpenSeaPort class
   from the OpenSea SDK, which provides a convenient interface for interacting with the OpenSea marketplace.*/
  }

  useEffect(() => {
    const fetchNfts = async () => {
      setIsLoading(true);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length === 0) {
          console.error("No Ethereum accounts found");
          setIsLoading(false);
          return;
        }
        const address = accounts[0];
        const assets = await openSea.api.getAssets({
          owner: address,
          limit: 50, // Increase the limit if the user has more than 20 NFTs
        });
        const nfts = assets.assets.map((asset) => ({
          id: asset.id,
          name: asset.name,
          description: asset.description,
          imageUrl: asset.imageUrl,
          owner: asset.owner,
        }));
        setNfts(nfts);
      } catch (error) {
        console.error("Failed to fetch NFTs", error);
      }
      setIsLoading(false);
    };
    if (openSea) {
      fetchNfts();
    }
  }, [openSea]);

  const handleNftClick = (nft) => {
    setChoosenNft(nft);
  };



  const handlePurchaseClick = () => {
    if (choosenNft && window.ethereum && window.ethereum.selectedAddress) {
      const url = `https://opensea.io/assets/${choosenNft.id}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div class="container mx-auto my-4">
      {isLoading ? <Spin class="mx-auto" /> : null}

      {!isLoading && nfts.length === 0 ? <p>No NFTS Found</p> : null}

      {!isLoading && nfts.length > 0 ? (
        <NftList nfts={nfts} onNftClick={handleNftClick} />
      ) : null}

      <NftCard
        nft={choosenNft}
        onPurchaseClick={handlePurchaseClick}
      />
    </div>
  );
}
