import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { FC, PropsWithChildren } from "react";
import Title, { TitleProps } from "./title";

const SortTitle: FC<PropsWithChildren<TitleProps>> = (props) => {
  const { children, title } = props;
  return (
    <div className="flex items-center justify-between">
      <Title title={title}>{children}</Title>
      <Dropdown>
        <div className="flex items-center space-x-8">
          <div className="text-xs14 text-101010">Sort Order</div>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};
export default SortTitle;
