import { useMount } from "ahooks";
import { useScroll } from "motion/react";
import { useRef } from "react";
export type ScrollInfoProps<T = Parameters<typeof useScroll>> =
  T extends (infer P)[] ? P : never;
const useScrollInfo = (params?: NonNullable<ScrollInfoProps>) => {
  const div = useRef<HTMLDivElement>(null);
  useMount(() => {
    if (typeof document !== "undefined") {
      div.current = document.getElementById("scroll-block") as HTMLDivElement;
    }
  });
  const info = useScroll({
    container: div,
    layoutEffect: false,
    target: params?.target ? params.target : div,
    ...params,
  });
  return info;
};
export default useScrollInfo;
