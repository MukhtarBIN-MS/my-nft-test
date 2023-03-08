import React, { useState } from "react";
import { Card } from "antd";
import { Modal, Button } from "antd";

const { Meta } = Card;

const DummyNftCard = ({ nft }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onPurchaseClick = () => {
    alert("Purchased");
  };
  return (
    <div>
      {/** Modal for showing more card details */}
      <Modal
        title={nft.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="buy" type="primary" onClick={onPurchaseClick}>
            Buy on OpenSea
          </Button>,
        ]}
      >
        <div style={{}} class="flex justify-center">
          <img
            alt={nft.name}
            src={nft.imageUrl}
            style={{ backgroundSize: "cover", width: 150 }}
            class="w-48 h-48 object-contain"
          />
        </div>
        <h2 class="text-center text-2xl font-bold mb-2">{nft.name}</h2>
        <p class="text-center">{nft.description}</p>
        <p class="text-center text-gray-500 mt-4">Owner: {nft.owner}</p>
      </Modal>

      {/** The card component for the modal */}

      <Card
        cover={
          <img
            style={{ backgroundSize: "cover" }}
            alt={nft.name}
            src={nft.imageUrl}
          />
        }
        onClick={showModal}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 10,
          width: 300,
        }}
        class="bg-white shadow-md hover:shadow-lg rounded-lg cursor-pointer transform transition duration-300 hover:scale-105"
      >
        <Meta title={nft.name} description={nft.description} />
      </Card>
    </div>
  );
};

export default DummyNftCard;
