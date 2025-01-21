import Image from "next/image";

const ImageList = () => {
  return (
    <div className="flex items-center">
      <div className="mr-18 h-450 overflow-y-auto overflow-x-hidden space-y-8 flex flex-col">
        {[1, 2, 3, 4, 5].map((v) => {
          return (
            <div key={v} className="w-66 h-66 rounded-8 overflow-hidden">
              {v}
            </div>
          );
        })}
      </div>
      <div className="w-450 h-450 rounded-16">
        <Image src={""} alt="logo" width={450} height={450} />
      </div>
    </div>
  );
};
export default ImageList;
