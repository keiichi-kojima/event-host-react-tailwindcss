import React from "react";
import IconContainer from "./IconContainer";

export default function ({
  iconSrc,
  title,
  detail,
}: {
  iconSrc: string;
  title: string;
  detail: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex justify-between my-[16px] sm:my-[32px] sm:min-w-[440px]">
      <div className="flex gap-[20px]">
        <IconContainer src={iconSrc} />
        <div className="leading-tight flex items-center">
          <div>
            <div className="text-primary-purple-dark text-[16px] sm:text-[18px] font-bold">
              {title}
            </div>
            {detail}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <img src="/images/stroke-right.svg" alt="" />
      </div>
    </div>
  );
}
