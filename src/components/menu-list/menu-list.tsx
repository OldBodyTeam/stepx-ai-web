"use client";

import { FrontCategoryListCreate200ResponseDataItemsInner } from "@/services";
import { HomeOutlined } from "@ant-design/icons";
import { useMemoizedFn } from "ahooks";
import { Button, Divider, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];

export interface CategoryListType {
  label?: React.ReactNode;
  value?: number;
  key?: number;
  children?: CategoryListType[];
  icon?: React.ReactNode;
}
const homeItems: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
];
const otherItems: MenuItem[] = [
  {
    key: "other",
    label: "other",
    type: "group",
    children: [
      { key: "5", label: "Daily News" },
      { key: "6", label: "Blog" },
    ],
  },
];
export interface MenuListProps {
  categoryList?: FrontCategoryListCreate200ResponseDataItemsInner[];
}
const MenuList: FC<MenuListProps> = (props) => {
  const { categoryList } = props;
  const router = useRouter();
  const [reference, setReference] = useState<Map<number, string>>(new Map());
  const onClick: MenuProps["onClick"] = useMemoizedFn((e) => {
    const { keyPath } = e;
    console.log("click ", e.keyPath);
    const path = (keyPath as string[])
      .map((key) => encodeURIComponent(reference.get(Number(key))!))
      .reverse()
      .join("/");
    router.push(`/${path}`);
  });
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const list = useMemo(() => {
    const transformData = (
      items?: FrontCategoryListCreate200ResponseDataItemsInner[]
    ): CategoryListType[] => {
      if (!items) return [];
      return items.map((item) => {
        setReference((prev) => {
          if (item.id && item.name) {
            prev.set(item.id, item.name);
            return new Map(prev);
          }
          return prev;
        });
        return {
          label: item.name,
          value: item.id,
          key: item.id,
          children: item.children ? transformData(item.children) : undefined,
        };
      });
    };

    return transformData(Array.isArray(categoryList) ? categoryList : []);
  }, [categoryList]);
  useEffect(() => {
    setMenuList([...list].slice(0, 6) as MenuItem[]);
  }, [list]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const loadMenuData = useMemoizedFn(() => {
    setMenuList([...(list as MenuItem[])]);
    setShowLoadMore(false);
  });
  return (
    <div className="w-216 py-12 px-8 border-r-1 border-solid border-F5F5F5 overflow-x-hidden overflow-y-auto max-h-[calc(100vh-73px)] h-[calc(100vh-73px)]">
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["home"]}
        mode="inline"
        items={homeItems}
      />
      <Divider />
      <div>
        <Menu
          onClick={onClick}
          mode="inline"
          items={[
            {
              type: "group",
              key: "Classification",
              label: "Classification",
              children: menuList,
            },
          ]}
        />
        {showLoadMore ? <Button onClick={loadMenuData}>加载更多</Button> : null}
      </div>

      <Divider />
      <Menu onClick={onClick} mode="inline" items={otherItems} />
    </div>
  );
};
export default MenuList;
