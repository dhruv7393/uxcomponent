import { Statistic } from "antd";

interface StatisticCreatorProps {
  title: string;
  value: string;
}

const StatisticCreator = ({ title, value }: StatisticCreatorProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Statistic title={title} value={value} />
    </div>
  );
};

export default StatisticCreator;
