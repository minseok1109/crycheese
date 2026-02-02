"use client";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 / duration;
  const stiffness = 100 / duration;

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  useEffect(() => {
    if (isInView && startWhen) {
      if (onStart) {
        const timeoutId = setTimeout(onStart, delay * 1000);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isInView, startWhen, delay, onStart]);

  useEffect(() => {
    if (isInView && startWhen) {
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, startWhen, delay, motionValue, direction, from, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedNumber =
          separator
            ? Intl.NumberFormat("en-US").format(Math.round(latest)).replace(/,/g, separator)
            : Math.round(latest).toString();

        ref.current.textContent = formattedNumber;

        if (onEnd && Math.round(latest) === to) {
          onEnd();
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, to, onEnd]);

  return <span ref={ref} className={className} />;
}
