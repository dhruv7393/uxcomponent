import StepsCreator, { StepsCreatorProps } from "../component/StepsCreator";

const StepsCreatorDoc = () => {
  const description = "This is a description.";
  const items: StepsCreatorProps["items"] = [
    {
      title: "Waiting",
      description,
    },
    {
      title: "In Progress",
      description,
    },
    {
      title: "Finished",
      description,
    },
  ];
  const onChange = (current: number) => {
    console.log("Hello", current);
  };
  return <StepsCreator items={items} current={3} onChange={onChange} />;
};

export default StepsCreatorDoc;
