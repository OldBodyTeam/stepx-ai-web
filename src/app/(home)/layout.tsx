import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuList from "@/components/menu-list/menu-list";
import { getFrontCategoryList } from "./actions";
const HomeLayout: FC<PropsWithChildren<unknown>> = async ({ children }) => {
  const categoryList = await getFrontCategoryList({});
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex items-center justify-between px-24 py-16 border-1 border-solid border-F5F5F5 fixed top-0 left-0 bg-FFFFFF z-50">
        <Image src={"/web/logo.png"} width={100} height={24} alt="logo" />
        <div className="space-x-8 flex items-center">
          <Link href={"/register"}>
            <div className="px-16 py-8 border-1 border-solid border-222222 text-xs14 font-medium text-222222 rounded-16 cursor-pointer">
              Log Up
            </div>
          </Link>
          <Link href={"/login"}>
            <div className="px-16 py-9 text-xs14 font-medium text-222222 rounded-16 bg-D0FF71 cursor-pointer">
              Log In
            </div>
          </Link>
        </div>
      </div>
      <div className="flex mt-73">
        <MenuList categoryList={categoryList} />
        <div className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto  max-h-[calc(100vh-73px)] h-[calc(100vh-73px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
export default HomeLayout;
