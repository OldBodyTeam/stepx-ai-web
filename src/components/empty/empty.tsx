import Image from "next/image";
import { FC } from "react";
export interface EmptyProps {
  desc?: string;
}
const Empty: FC<EmptyProps> = (props) => {
  const { desc } = props;
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <Image
        width={120}
        height={120}
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/status/empty.png`}
        alt="empty"
      />
      <div className="mt-20">{desc || "暂无内容"}</div>
    </div>
  );
};
export default Empty;
