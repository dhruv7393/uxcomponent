import CalendarCreator, {
  CalendarCreatorProps,
} from "../component/CalendarCreator";

const CalendarCreatorDoc = () => {
  function addDays() {
    const result = new Date();
    result.setDate(new Date().getDate() + 10);
    return result;
  }

  const dateDisplayed = addDays().toLocaleDateString();
  const handleDateChange: CalendarCreatorProps["handleDateChange"] = (
    dateSelected: string
  ) => console.log(dateSelected);
  return (
    <CalendarCreator
      dateDisplayed={dateDisplayed}
      handleDateChange={handleDateChange}
    />
  );
};

export default CalendarCreatorDoc;
