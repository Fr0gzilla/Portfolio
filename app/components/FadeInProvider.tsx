"use client";

import useFadeInOnScroll from "./useFadeInOnScroll";

export default function FadeInProvider({ children }: { children: React.ReactNode }) {
  useFadeInOnScroll();
  return <>{children}</>;
}
