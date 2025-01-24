"use client";
import { FC, PropsWithChildren } from "react";
const ScrollLayout: FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;

  return (
    <div
      className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto  max-h-[calc(100vh-73px)] h-[calc(100vh-73px)]"
      id="scroll-block"
    >
      {children}
    </div>
  );
};
export default ScrollLayout;
