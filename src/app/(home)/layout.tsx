import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuList from "@/components/menu-list/menu-list";
import { getFrontCategoryList } from "./actions";
import ScrollLayout from "@/components/scroll-layout/scroll-layout";
const HomeLayout: FC<PropsWithChildren<unknown>> = async ({ children }) => {
  const [categoryList] = await Promise.all([getFrontCategoryList({})]);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex items-center justify-between px-24 py-16 border-1 border-solid border-F5F5F5 fixed top-0 left-0 bg-FFFFFF z-50">
        <Image src={"/web/logo.png"} width={100} height={24} alt="logo" />
        <div className="space-x-8 flex items-center">
          <Link href={"/register"}>
            <div className="px-16 py-8 border-1 border-solid border-222222 text-xs14 font-medium text-222222 rounded-20 cursor-pointer">
              Log Up
            </div>
          </Link>
          <Link href={"/login"}>
            <div className="px-16 py-9 text-xs14 font-medium text-222222 rounded-20 bg-D0FF71 cursor-pointer">
              Log In
            </div>
          </Link>
        </div>
      </div>
      <div className="flex mt-73">
        <MenuList categoryList={categoryList} />
        <ScrollLayout>{children}</ScrollLayout>
      </div>
    </div>
  );
};
export default HomeLayout;
