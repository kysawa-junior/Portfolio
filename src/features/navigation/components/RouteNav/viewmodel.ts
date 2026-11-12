"use client";

import { useCallback, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { navOffset, routeIds } from "../../model/navigation";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function useRouteNavViewModel() {
  const lenis = useLenis();
  const [activeId, setActiveId] = useState<string | null>(routeIds[0] ?? null);

  useEffect(() => {
    const sections = routeIds
      .map((id) => ({ id, element: document.getElementById(id) }))
      .filter(
        (section): section is { id: string; element: HTMLElement } =>
          section.element !== null,
      );

    if (sections.length === 0) return;

    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element.offsetTop <= probe) {
          current = sections[i].id;
          break;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = sections[sections.length - 1].id;

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = useCallback(
    (id: string) => smoothScrollTo(id, lenis, navOffset),
    [lenis],
  );

  return { activeId, scrollTo };
}
