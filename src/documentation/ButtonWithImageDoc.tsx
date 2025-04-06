//ButtonWithImageDoc
import * as icons from "@ant-design/icons";
import ButtonWithImage from "../component/ButtonWithImage";
import TableForDescription from "../utilities/TableForDescription";

const ButtonWithImageDoc = () => {
  const params = [
    {
      key: "key",
      description: "Name of button",
    },
    {
      key: "onClick",
      description: "Function to handle click event",
    },
    {
      key: "type",
      description: "Type of button",
      values: ["primary", "text", "default"],
    },
    {
      key: "ImageDisplayed",
      description: "Pass an antdesign icon",
    },
    {
      key: "disabled",
      description: "",
      required: false,
      values: ["true", "false"],
    },
  ];

  const handleClick = () => {
    console.log("Button is clicked");
  };

  return (
    <>
      <TableForDescription parameters={params} />
      <ButtonWithImage
        key="test-button"
        onClick={handleClick}
        type="primary"
        ImageDisplayed={<icons.PushpinOutlined />}
        disabled
      />
    </>
  );
};

export default ButtonWithImageDoc;
