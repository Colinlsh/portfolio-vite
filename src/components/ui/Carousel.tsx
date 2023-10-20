import {
  animate,
  AnimationOptions,
  motion,
  MotionStyle,
  useMotionValue,
} from "framer-motion";
import { wrap } from "popmotion";
import React, { useEffect, useRef } from "react";
import { BsDot } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setCarouselElementCount,
  setCarouselPosition,
} from "../../app/slice/uiStateSlice";
import { RootState } from "../../app/store";

interface Props {
  childrens: React.ReactNode[];
  childrensHandle?: [];
  isInfinite?: boolean;
  intervalTime?: number;
  hasIndicator?: boolean;
  isIndicatorOutside?: boolean;
}

const pageStyle: MotionStyle = {
  width: "100%",
  height: "100%",
  display: "inline-block",
  flex: "none",
};

const Carousel: React.FC<Props> = ({
  childrens,
  isInfinite = false,
  intervalTime = 2000,
  hasIndicator = false,
  isIndicatorOutside = false,
}) => {
  // #region redux
  const uiState = useAppSelector((state: RootState) => state.uiState);
  const dispatch = useAppDispatch();
  // #endregion

  const containerRef = React.useRef<HTMLDivElement>(null);

  const childIndex = wrap(0, childrens.length, uiState.carouselPosition);

  const x = useMotionValue(0);

  const cardRef = useRef<HTMLDivElement>(null);

  let cardWidth = 0;

  useEffect(() => {
    if (!isInfinite) {
      return;
    }
    const carouselTimer = setInterval(() => {
      dispatch(setCarouselPosition(uiState.carouselPosition + 1));
    }, intervalTime);

    return () => clearInterval(carouselTimer);
  }, [intervalTime, isInfinite, uiState.carouselPosition]);

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [childIndex]);

  useEffect(() => {
    dispatch(setCarouselElementCount(childrens.length));
  }, []);

  if (!Array.isArray(childrens) || childrens.length <= 0) {
    return null;
  }

  const { current: elContainer } = cardRef;
  if (elContainer) {
    cardWidth = elContainer.clientWidth;
  }

  const calculateNewX = () =>
    -childIndex * (containerRef.current?.clientWidth || 0);

  const transition: AnimationOptions<any> = {
    type: "spring",
    bounce: 0,
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div
        className="relative flex w-full h-fit overflow-x-hidden"
        ref={containerRef}
      >
        {childrens.map((item, index) => {
          return (
            <motion.div
              key={index}
              style={{
                ...pageStyle,
                x: x,
                left: `${index * 100}%`,
                right: `${index * 100}%`,
              }}
              drag="x"
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                const clientWidth = containerRef.current?.clientWidth || 0;

                if (offset.x > clientWidth / 4) {
                  dispatch(setCarouselPosition(uiState.carouselPosition - 1));
                } else if (offset.x < -clientWidth / 4) {
                  dispatch(setCarouselPosition(uiState.carouselPosition + 1));
                } else {
                  animate(x, calculateNewX(), transition);
                }
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      {hasIndicator ? (
        <div
          className={`${
            isIndicatorOutside ? "py-3" : "py-3"
          } bottom-0 h-fit w-full flex justify-center items-center gap-2`}
        >
          {childrens.map((x, i) => (
            <BsDot
              className={`border-pink-300 border-2 w-fit h-fit rounded-full cursor-pointer transition-transform duration-500 ${
                i === childIndex ? "scale-125" : "scale-1"
              }`}
              size={25}
              onClick={() => {
                dispatch(setCarouselPosition(i));
              }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Carousel;
