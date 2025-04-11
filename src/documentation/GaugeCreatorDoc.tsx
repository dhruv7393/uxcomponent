import { StarOutlined } from "@ant-design/icons";
import GaugeCreator, { GaugeCreatorProps } from "../component/GaugeCreator";
import { Divider } from "antd";

const GaugeCreatorDoc = () => {
  const processes: GaugeCreatorProps["progesses"] = [
    {
      title: "70 of 100 pending",
      percent: 30,
      format: (
        <>
          5 <StarOutlined />
        </>
      ),
    },
    {
      title: "70 of 100 pending",
      percent: 30,
      format: (
        <>
          4 <StarOutlined />
        </>
      ),
    },
    {
      title: "70 of 100 pending",
      percent: 30,
      format: (
        <>
          3 <StarOutlined />
        </>
      ),
    },

    {
      title: "70 of 100 pending",
      percent: 30,
      format: (
        <>
          2 <StarOutlined />
        </>
      ),
    },

    {
      title: "70 of 100 pending",
      percent: 30,
      format: (
        <>
          1 <StarOutlined />
        </>
      ),
    },
  ];
  return (
    <>
      <GaugeCreator progesses={processes} />
      <Divider />
      <GaugeCreator progesses={processes} />
    </>
  );
};

export default GaugeCreatorDoc;
