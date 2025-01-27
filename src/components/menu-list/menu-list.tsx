"use client";

import {
  FrontCategoryListCreate200ResponseDataItemsInner,
  FrontPreloadProductsCreate200ResponseDataItemsInner,
} from "@/services";
import { getRandomNumber } from "@/utils/random-number";
import { useMemoizedFn } from "ahooks";
import { Button, Divider, Menu, MenuProps } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];
export const menuIcon = [
  "buliding",
  "code",
  "gallery",
  "home",
  "video",
  "voice-square",
  "message-text",
  "text-block",
];
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
    icon: (
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/menu/home.png`}
        width={20}
        height={20}
        alt={"home"}
      />
    ),
  },
];
const otherItems: MenuItem[] = [
  {
    key: "other",
    label: "other",
    type: "group",
    children: [
      {
        key: "5",
        label: "Daily News",
        icon: (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/menu/home.png`}
            width={20}
            height={20}
            alt={"home"}
          />
        ),
      },
      {
        key: "6",
        label: "Blog",
        icon: (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/menu/home.png`}
            width={20}
            height={20}
            alt={"home"}
          />
        ),
      },
    ],
  },
];
export interface MenuListProps {
  categoryList?: FrontCategoryListCreate200ResponseDataItemsInner[];
  monthList?: FrontPreloadProductsCreate200ResponseDataItemsInner[];
}
const MenuList: FC<MenuListProps> = (props) => {
  const { categoryList } = props;
  const router = useRouter();
  const [reference, setReference] = useState<Map<number, string>>(new Map());
  const handleHomeClick: MenuProps["onClick"] = useMemoizedFn(() => {
    router.push("/");
  });
  const onClick: MenuProps["onClick"] = useMemoizedFn((e) => {
    const { keyPath } = e;
    const path = (keyPath as string[])
      .map((key) => encodeURIComponent(reference.get(Number(key))!))
      .reverse()
      .join("/");
    router.push(`/${path}/${keyPath[0]}`);
  });
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const list = useMemo(() => {
    const transformData = (
      items?: FrontCategoryListCreate200ResponseDataItemsInner[]
    ): CategoryListType[] => {
      if (!items) return [];

      return items.map((item) => {
        const index = getRandomNumber(menuIcon.length);
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
          icon: (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/menu/${menuIcon[index]}.png`}
              width={20}
              height={20}
              alt={menuIcon[index]}
            />
          ),
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
    <div className="w-216 py-12 px-8 border-r-1 border-solid border-F5F5F5 overflow-x-hidden overflow-y-auto max-h-[calc(100vh-73px)] h-[calc(100vh-73px)] bg-FFFFFF relative z-10">
      <Menu
        onClick={handleHomeClick}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["home"]}
        mode="inline"
        items={homeItems}
        inlineIndent={12}
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
          inlineIndent={12}
        />
        {showLoadMore ? (
          <Button onClick={loadMenuData} type="text">
            加载更多
          </Button>
        ) : null}
      </div>

      <Divider />
      <Menu
        onClick={onClick}
        mode="inline"
        items={otherItems}
        inlineIndent={12}
      />
    </div>
  );
};
export default MenuList;
