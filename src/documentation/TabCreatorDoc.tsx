import TabCreator, { TabCreatorProps } from "../component/TabCreator";
import CollapseCreatorDoc from "./CollapseCreatorDoc";
import GaugeCreatorDoc from "./GaugeCreatorDoc";

const TabCreatorDoc = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabCreatorProps["items"] = [
    {
      key: "1",
      label: "Today",
      children: <CollapseCreatorDoc />,
    },
    {
      key: "2",
      label: "Later",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Done",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Track",
      children: <GaugeCreatorDoc />,
    },
  ];
  return (
    <>
      <TabCreator items={items} onChange={onChange} centered={true} />
    </>
  );
};

export default TabCreatorDoc;
