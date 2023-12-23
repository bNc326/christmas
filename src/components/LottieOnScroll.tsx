import React, { useRef, useEffect } from "react";
import { useLottie } from "lottie-react";

interface Props {
  animationData: any;
  offset?: number;
  multiplier?: number;
  margin?: string;
}

const LottieOnScroll: React.FC<Props> = ({
  animationData,
  offset,
  multiplier,
  margin,
}) => {
  const {
    View: giftLottie,
    goToAndStop,
    getDuration,
  } = useLottie({
    animationData,
    autoplay: false,
    width: "100%",
  });
  const animationMultiplier = multiplier || 0.075;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (e: Event) => {
      const screenHeight = window.screen.height;
      const scrollY = window.scrollY + screenHeight / 2;
      const lottiePos =
        (containerRef.current?.offsetTop as number) + (offset ? offset : 0);

      if (scrollY >= lottiePos) {
        const frame = (scrollY - lottiePos) * animationMultiplier;

        if (frame >= (getDuration(true) as number)) return;
        goToAndStop(frame, true);
      } else {
        goToAndStop(0, true);
      }
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [getDuration, goToAndStop, animationMultiplier, offset]);

  const calcGiftHeight = (): number =>
    (getDuration(true) as number) / animationMultiplier +
    (containerRef.current?.offsetHeight as number) +
    (offset ? offset : 0);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      style={{
        margin,
        height: calcGiftHeight(),
      }}
    >
      <div
        ref={lottieRef}
        className="w-full max-w-[800px] mx-auto rounded-lg overflow-hidden sticky top-1/2 -translate-y-1/2"
      >
        {giftLottie}
      </div>
    </div>
  );
};

export default LottieOnScroll;
