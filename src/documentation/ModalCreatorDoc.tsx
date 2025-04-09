import ModalCreator from "../component/ModalCreator";
import { Button } from "antd";

const ModalCreatorDoc = () => {
  const onOK = () => {
    console.log("ok clicked");
  };
  const onCancel = () => {
    console.log("Cancel clicked");
  };
  return (
    <>
      <ModalCreator
        button={<Button type="primary">Open Modal For Display</Button>}
        header={"Message Header"}
        message={"Message body"}
        onOK={onOK}
        onCancel={onCancel}
      />
    </>
  );
};

export default ModalCreatorDoc;
