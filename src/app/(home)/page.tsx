"use client";
import React, { useEffect, useMemo, useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Divider, Menu, Spin } from "antd";
import { useMemoizedFn, useMount, useRequest } from "ahooks";
import api from "@/utils/service";
import {
  FrontCategoryListCreate200ResponseDataItemsInner,
  FrontCategoryListCreateRequest,
} from "@/services";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
  const [reference, setReference] = useState<Map<number, string>>(new Map());
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
  console.log("data", reference);
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const onClick: MenuProps["onClick"] = (e) => {
    const { keyPath } = e;
    console.log("click ", e.keyPath);
    const path = keyPath
      .map((key) => encodeURIComponent(reference.get(Number(key))!))
      .reverse()
      .join("/");
    router.push(`/${path}`);
  };
  useEffect(() => {
    setMenuList([...list].slice(0, 6) as MenuItem[]);
  }, [list]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const loadMenuData = useMemoizedFn(() => {
    setMenuList([...(list as MenuItem[])]);
    setShowLoadMore(false);
  });

  console.log("data", menuList);

  return (
    <Spin spinning={loading} wrapperClassName="flex-1 flex [&>div]:flex-1">
      <div className="w-216 py-12 px-8 border-r-1 border-solid border-F5F5F5 overflow-x-hidden overflow-y-auto max-h-[calc(100vh-73px)] h-[calc(100vh-73px)]">
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
          {showLoadMore ? (
            <Button onClick={loadMenuData}>加载更多</Button>
          ) : null}
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
