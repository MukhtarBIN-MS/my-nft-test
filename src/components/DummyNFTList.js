import React from 'react'
import DummyNftCard from './DummyNFTCard';


const DummyNftList = ({ nfts}) => {
  
    return (
      <div style={{display:'flex', flexDirection:'row', padding:10, margin:10}}>
        {nfts.map((nft) => (
          <DummyNftCard key={nft.id} nft={nft} />
        ))}
      </div>
    );
  };
export default DummyNftList;
