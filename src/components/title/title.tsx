"use client";
import { useHashState } from "@/hooks/use-hash";
import useScrollInfo from "@/hooks/use-scroll-info";
import { useDebounceFn } from "ahooks";
import { motion } from "motion/react";
import { FC, PropsWithChildren, useRef } from "react";
export interface TitleProps {
  className?: string;
  title?: string;
}
const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
  const { children, title } = props;
  const div = useRef<HTMLDivElement>(null);
  const [, setHash] = useHashState();
  const { scrollYProgress } = useScrollInfo({
    target: div, // 监听目标元素的滚动
    offset: ["start end", "end start"],
  });
  // const isInViewport = useTransform(scrollYProgress, [0, 1], [false, true]);
  const { run: scroll } = useDebounceFn(
    (v) => {
      if (v < 1 && v > 0) {
        setHash(encodeURIComponent(title ?? ""));
      }
    },
    { leading: true, wait: 100 }
  );
  scrollYProgress.on("change", scroll);
  return (
    <motion.div
      className="text-101010 text-xs18 font-bold"
      id={encodeURIComponent(title ?? "")}
      ref={div}
    >
      {children}
    </motion.div>
  );
};

export default Title;
