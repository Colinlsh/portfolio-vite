import React from "react";

interface MarqueeProps {
  childrens: React.ReactNode[];
}

const Marquee: React.FC<MarqueeProps> = ({ childrens }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-2">
        {childrens.map((x) => (
          <>{x}</>
        ))}
      </div>
      <div className="absolute flex top-0 animate-marquee2 whitespace-nowrap gap-2">
        {childrens.map((x) => (
          <>{x}</>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
