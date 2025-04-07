import CheckboxCreator from "../component/CheckboxCreator";

const CheckboxCreatorDoc = () => {
  const items = ["Apple", "Pear", "Orange"];
  const checked = ["Apple", "Orange"];

  const onChange = (items: string[]) => {
    console.log(items);
  };
  return (
    <CheckboxCreator items={items} checked={checked} onChange={onChange} />
  );
};

export default CheckboxCreatorDoc;
