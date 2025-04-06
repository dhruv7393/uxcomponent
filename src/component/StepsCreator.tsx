import React from "react";
import { Steps } from "antd";

interface itemsObject {
  title: string;
  description?: string;
}

export interface StepsCreatorProps {
  direction?: "vertical" | "horizontal";
  items: itemsObject[];
  current?: number;
  onChange?: (current: number) => void;
}

const defaultOnChange = (current: number) => {};

const StepsCreator = ({
  direction = "vertical",
  items,
  current = 0,
  onChange = defaultOnChange,
}: StepsCreatorProps) => (
  <Steps
    direction={direction}
    current={current > items.length ? -1 : current}
    items={items}
    onChange={onChange}
  />
);
export default StepsCreator;
