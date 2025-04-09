import { useState, ReactNode } from "react";
import { Modal } from "antd";

interface ModalCreatorProps {
  button: ReactNode;
  header: ReactNode;
  message: ReactNode;
  onOK: () => void;
  onCancel: () => void;
}

const ModalCreator = ({
  button,
  header,
  message,
  onOK,
  onCancel,
}: ModalCreatorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onOK();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsModalOpen(false);
  };

  return (
    <>
      <span onClick={showModal}>{button}</span>
      <Modal
        title={header}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {message}
      </Modal>
    </>
  );
};

export default ModalCreator;
