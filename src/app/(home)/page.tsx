"use client";
import React, { useEffect, useMemo, useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Divider, Menu, Spin } from "antd";
import { useMount, useRequest } from "ahooks";
import api from "@/utils/service";
import {
  FrontCategoryListCreate200ResponseDataItemsInner,
  FrontCategoryListCreateRequest,
} from "@/services";

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
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
];

const Home: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const {
    run,
    loading,
    data: categoryList,
  } = useRequest(
    async (params: FrontCategoryListCreateRequest) => {
      const data = await api.frontCategoryListCreate(params);
      return data.data.data?.items;
    },
    {
      manual: true,
    }
  );

  useMount(() => {
    run({});
  });
  const list = useMemo(() => {
    const transformData = (
      items?: FrontCategoryListCreate200ResponseDataItemsInner[]
    ): CategoryListType[] => {
      if (!items) return [];
      return items.map((item) => ({
        label: item.name,
        value: item.id,
        key: item.id,
        children: item.children ? transformData(item.children) : undefined,
      }));
    };

    return transformData(Array.isArray(categoryList) ? categoryList : []);
  }, [categoryList]);

  const [menuList, setMenuList] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenuList(list.slice(0, 6) as MenuItem[]);
  }, [list]);

  console.log("data", menuList);

  return (
    <Spin className="flex" spinning={loading}>
      <div className="w-216 py-12 px-8 h-screen border-r-1 border-solid border-F5F5F5">
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={homeItems}
        />
        <Divider />
        <div>
          <Menu onClick={onClick} mode="inline" items={menuList} />
          <Button>加载更多</Button>
        </div>

        <Divider />
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={otherItems}
        />
      </div>
    </Spin>
  );
};

export default Home;
