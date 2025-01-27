import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import Title, { TitleProps } from "./title";
import { FrontProductListCreateRequestSortOrderEnum } from "@/services";
import { useMemoizedFn } from "ahooks";
const items: MenuProps["items"] = [
  {
    key: FrontProductListCreateRequestSortOrderEnum.Asc,
    label: "升序",
  },
  {
    key: FrontProductListCreateRequestSortOrderEnum.Desc,
    label: "降序",
  },
];
const SortTitle: FC<
  PropsWithChildren<
    TitleProps & {
      onChange?: (key: FrontProductListCreateRequestSortOrderEnum) => void;
    }
  >
> = (props) => {
  const { children, title, onChange } = props;
  const [text, setText] = useState("Sort Order");
  const handleSelected = useMemoizedFn((a) => {
    const item = items.find((i) => i?.key === a.key) as unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setText((item as any).label);
    onChange?.(a.key);
  });
  return (
    <div className="flex items-center justify-between">
      <Title title={title}>{children}</Title>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: [
            FrontProductListCreateRequestSortOrderEnum.Desc,
          ],
          onClick: handleSelected,
        }}
      >
        <div className="flex items-center space-x-8">
          <div className="text-xs14 text-101010">{text}</div>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};
export default SortTitle;
