import CheckboxCreator from "../component/CheckboxCreator";

const CheckboxCreatorDoc = () => {
  const items = ["Apple", "Pear", "Orange"];
  const checked = ["Apple", "Orange"];

  const onChange = (item: string) => {
    console.log(item);
  };
  return (
    <CheckboxCreator items={items} checked={checked} onChange={onChange} />
  );
};

export default CheckboxCreatorDoc;
