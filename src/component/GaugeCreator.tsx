import { Flex, Progress, Tooltip } from "antd";
import { ReactNode } from "react";

export interface ProgressProps {
  title?: string;
  percent: number;
  size?: number;
  status?: "exception";
  format: ReactNode;
}

export interface GaugeCreatorProps {
  progesses: ProgressProps[];
  vertical?: boolean;
}

const GaugeCreator = ({ vertical = false, progesses }: GaugeCreatorProps) => (
  <Flex wrap gap="middle" vertical={vertical}>
    {progesses.length &&
      progesses.map((track) => (
        <Tooltip title={track.title}>
          <Progress
            type="circle"
            percent={track.percent}
            size={track.size}
            status={track.status}
            style={{ margin: "auto" }}
            format={() => track.format}
          />
        </Tooltip>
      ))}
  </Flex>
);

export default GaugeCreator;
