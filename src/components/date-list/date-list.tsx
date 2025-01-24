"use client";
import { useHashState } from "@/hooks/use-hash";
import useScrollInfo from "@/hooks/use-scroll-info";
import { getDateList } from "@/utils/date-list";
import classNames from "classnames";
import { motion, useTransform } from "motion/react";
const list = getDateList();
const DateList = () => {
  const { scrollYProgress } = useScrollInfo();

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.1], [-200, -55]);

  const [hash, , setScrollHash] = useHashState();
  return (
    <motion.div
      className="fixed top-[50%] translate-y-[-50%] z-1 space-y-8"
      id="scroll-indicator"
      style={{ opacity, x }}
    >
      {list.map((v) => {
        return (
          <div
            key={v?.title}
            className={classNames(
              "rounded-8 overflow-hidden px-10 py-4 text-xs11 cursor-pointer",
              decodeURIComponent(hash ?? "") === v?.title
                ? "text-222222 bg-F5F5F5"
                : "text-o34"
            )}
            onClick={() => setScrollHash(encodeURIComponent(v?.title ?? ""))}
          >
            {v?.label}
          </div>
        );
      })}
    </motion.div>
  );
};
export default DateList;
