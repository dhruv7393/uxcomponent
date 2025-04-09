import AlertCreatorRef from "../component/AlertCreatorRef";
import CarouselCreator from "../component/CarouselCreator";
import ButtonGroupsCreatorDoc from "./ButtonGroupsCreatorDoc";
import CalendarCreatorDoc from "./CalendarCreatorDoc";
import CheckboxCreatorDoc from "./CheckboxCreatorDoc";
import ModalCreatorDoc from "./ModalCreatorDoc";
import RatingCreatorDoc from "./RatingCreatorDoc";
import SelectCreatorDoc from "./SelectCreatorDoc";
import StepsCreatorDoc from "./StepsCreatorDoc";
import SwitchCreatorDoc from "./SwitchCreatorDoc";

const CarouselCreatorDoc = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const elements = [
    <StepsCreatorDoc />,
    <SelectCreatorDoc />,
    <CalendarCreatorDoc />,
    <CheckboxCreatorDoc />,
    <>
      Switch:
      <SwitchCreatorDoc />
      <br />
      Button Group:
      <ButtonGroupsCreatorDoc />
      <br />
      Ratings:
      <RatingCreatorDoc />
      Modal :
      <ModalCreatorDoc />
      <br />
      Notification:
      <AlertCreatorRef />
    </>,
  ];
  return <CarouselCreator elements={elements} onChange={onChange} />;
};

export default CarouselCreatorDoc;
