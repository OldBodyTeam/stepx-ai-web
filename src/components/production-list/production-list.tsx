import { formatNumber } from "@/utils/format";
import Image from "next/image";

const ProductionList = () => {
  return (
    <div className="p-12 rounded-12 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="bg-white15 px-6 py-5 flex justify-between items-center">
          <div className="text-xs12">{formatNumber(10000000000000)}</div>
        </div>
        <Image src={"/production/love.png"} alt="love" width={24} height={24} />
      </div>
      <div className="mt-4 mb-6 flex items-center justify-center">
        <Image alt="logo" src={""} width={120} height={120} />
      </div>
      <div className="flex items-center mb-2">
        <div className="text-xs14 text-FFFFFF font-medium mr-4">Midjourney</div>
        <Image src={"/production/yes.png"} width={16} height={16} alt="yes" />
      </div>
      <div className="text-xs12 text-FFFFFF mb-10">AI Image Generator</div>
      <div className="space-x-6">
        {[1, 2].map((v) => {
          return (
            <div
              className="flex items-center justify-center px-8 py-2 text-FFFFFF text-xs12 font-medium border-1 border-solid border-white20"
              key={v}
            >
              {v}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductionList;
