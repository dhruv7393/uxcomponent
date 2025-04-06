import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { Radio, Space, Table } from "antd";

interface Params {
  key: string;
  description: string;
  values?: string[];
  required?: boolean;
}

interface TableForDescriptionProps {
  parameters: Params[];
}

const TableForDescription = ({ parameters }: TableForDescriptionProps) => {
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "keyname",
    },
    {
      title: "Required",
      dataIndex: "required",
      key: "required",
      render: (required: boolean) =>
        typeof required == "boolean" && required === false ? (
          <CloseCircleTwoTone twoToneColor="#eb2f96" />
        ) : (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ),
    },
    {
      title: "Details",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Possible Values",
      dataIndex: "values",
      key: "values",
      render: (values: string[] = []) => {
        {
          /*<Space>
          <Radio.Group
            value={"start"}
            onChange={(e) => console.log(e.target.value)}
          >
            <Radio.Button value="start">start</Radio.Button>
            <Radio.Button value="end">end</Radio.Button>
          </Radio.Group>
        </Space>;*/
        }
        values.map((value) => <p>{value}</p>);
      },
    },
  ];
  return <Table dataSource={parameters} columns={columns} />;
};

export default TableForDescription;
