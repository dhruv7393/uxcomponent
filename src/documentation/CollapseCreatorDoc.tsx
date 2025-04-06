import CollapseCreator, {
  CollapseCreatorProps,
} from "../component/CollapseCreator";
import CarouselCreatorDoc from "./CarouselCreatorDoc";
const CollapseCreatorDoc = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseCreatorProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: (
        <div style={{ paddingLeft: 10 }}>
          <CarouselCreatorDoc />
        </div>
      ),
      className: "level1",
      extra: "here",
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
      className: "level2",
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      className: "level3",
    },
    {
      key: "4",
      label: "This is panel header 4",
      children: <p>{text}</p>,
      className: "level4",
    },
  ];
  return <CollapseCreator items={items} />;
};

export default CollapseCreatorDoc;
