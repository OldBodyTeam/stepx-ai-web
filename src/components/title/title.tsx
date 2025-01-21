import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren<{ className?: string }>> = (props) => {
  const { children } = props;
  return <div className="text-101010 text-xs18 font-bold">{children}</div>;
};
const SortTitle: FC<PropsWithChildren<{ className?: string }>> = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-between">
      <Title>{children}</Title>
      <Dropdown>
        <div className="flex items-center space-x-8">
          <div className="text-xs14 text-101010">Sort Order</div>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};
export { Title, SortTitle };
