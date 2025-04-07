import { Checkbox } from "antd";

interface CheckboxCreatorProps {
  items: string[];
  checked: string[];
  onChange: (item: string) => void;
}

const CheckboxCreator = ({
  items,
  checked,
  onChange,
}: CheckboxCreatorProps) => {
  const sortArray = (allItems: string[], checkedItems: string[]) => {
    const notInArr2 = allItems.filter((item) => !checkedItems.includes(item));
    const inArr2 = allItems.filter((item) => checkedItems.includes(item));

    return notInArr2.concat(inArr2);
  };
  return (
    <>
      {sortArray(items, checked).map((item) => {
        const isSelected = checked.includes(item);
        return (
          <p key={item}>
            <Checkbox
              checked={isSelected}
              onClick={() => onChange(item)}
              style={{ textDecoration: isSelected ? "line-through" : "none" }}
            >
              {item}
            </Checkbox>
          </p>
        );
      })}
    </>
  );
};

export default CheckboxCreator;
