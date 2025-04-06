import React, { ReactNode } from "react";

import { Collapse } from "antd";

interface CollapseCreatorPropsObj {
  key: string;
  label: string;
  children: ReactNode;
  className: "level1" | "level2" | "level3" | "level4";
  extra?: ReactNode;
}

export interface CollapseCreatorProps {
  items: CollapseCreatorPropsObj[];
}

const CollapseCreator = ({ items }: CollapseCreatorProps) => {
  return <Collapse items={items} />;
};

export default CollapseCreator;
