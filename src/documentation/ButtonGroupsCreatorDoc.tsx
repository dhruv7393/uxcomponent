import ButtonGroupsCreator from "../component/ButtonGroupsCreator";

const ButtonGroupsCreatorDoc = () => {
  const values = [
    { value: "switch", text: "Switch" },
    { value: "list", text: "List" },
  ];
  return (
    <ButtonGroupsCreator
      values={values}
      currentValue={"list"}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default ButtonGroupsCreatorDoc;
