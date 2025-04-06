import * as React from "react";
import { useState } from "react";
import SelectCreator, { SelectCreatorProps } from "../component/SelectCreator";

const SelectCreatorDoc = () => {
  const [slectedValues, handleSelectedValues] = useState(["Tuesday"]);
  const daysOfWeek: SelectCreatorProps["optionValues"] = [
    { label: "Sun", value: "Sunday" },
    { label: "Mon", value: "Monday" },
    { label: "Tue", value: "Tuesday" },
    { label: "Wed", value: "Wednesday" },
    { label: "Thu", value: "Thursday" },
    { label: "Fri", value: "Friday" },
    { label: "Sat", value: "Saturday" },
  ];
  const updateSelectedValues = (value: string[]) => {
    handleSelectedValues(value);
  };

  return (
    <SelectCreator
      slectedValues={slectedValues}
      optionValues={daysOfWeek}
      onChange={updateSelectedValues}
    />
  );
};

export default SelectCreatorDoc;
