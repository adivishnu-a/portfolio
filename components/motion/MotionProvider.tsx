"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "motion/react";

/** Loads only the DOM animation features Motion needs here, not the full runtime. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
