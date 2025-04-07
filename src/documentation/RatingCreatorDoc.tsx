import RatingCreator from "../component/RatingCreator";
import { useState } from "react";

const RatingCreatorDoc = () => {
  const [value, setValue] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  return (
    <RatingCreator
      names={desc}
      value={value}
      setValue={(val) => setValue(val)}
    />
  );
};

export default RatingCreatorDoc;
