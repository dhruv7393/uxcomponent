import CarouselCreator from "../component/CarouselCreator";
import CalendarCreatorDoc from "./CalendarCreatorDoc";
import CheckboxCreatorDoc from "./CheckboxCreatorDoc";
import SelectCreatorDoc from "./SelectCreatorDoc";
import StepsCreatorDoc from "./StepsCreatorDoc";

const CarouselCreatorDoc = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const elements = [
    <StepsCreatorDoc />,
    <SelectCreatorDoc />,
    <CalendarCreatorDoc />,
    <CheckboxCreatorDoc />,
  ];
  return <CarouselCreator elements={elements} onChange={onChange} />;
};

export default CarouselCreatorDoc;
