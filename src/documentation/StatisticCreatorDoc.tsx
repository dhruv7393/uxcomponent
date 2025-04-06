import StatisticCreator from "../component/StatisticCreator";

const StatisticCreatorDoc = () => {
  const title = "Active Users";
  const value = "112893";
  return <StatisticCreator title={title} value={value} of={"20"} />;
};

export default StatisticCreatorDoc;
