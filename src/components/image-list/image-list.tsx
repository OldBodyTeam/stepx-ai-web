/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState } from "react";
export interface ImageListProps {
  cover?: string[];
}

const ImageList: FC<ImageListProps> = (props) => {
  const { cover } = props;
  const [url, setUrl] = useState((cover || []).at(0));
  return (
    <div className="flex items-center">
      <div className="mr-18 h-450 overflow-y-auto overflow-x-hidden space-y-8 flex flex-col">
        {(cover || []).map((v) => {
          return (
            <div
              key={v}
              className="w-66 h-66 rounded-8 overflow-hidden bg-D0FF71 cursor-pointer"
              onClick={() => setUrl(v)}
            >
              <img src={v} alt="logo" className="object-cover w-full h-full" />
            </div>
          );
        })}
      </div>
      <div className="w-450 h-450 rounded-16 bg-FADB14 overflow-hidden">
        <img src={url} alt="logo" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};
export default ImageList;
