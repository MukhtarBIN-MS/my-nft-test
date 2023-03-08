import React from 'react'
import NftCard from './NFTCard';


const DummyNftList = ({ nfts}) => {
  
    return (
      <div style={{display:'flex', flexDirection:'row', padding:10, margin:10}}>
        {nfts.map((nft) => (
          <NftCard key={nft.id} nft={nft} />
        ))}
      </div>
    );
  };
export default DummyNftList;
