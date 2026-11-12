"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&/\\|<>[]{}*+=?^~!";

const TYPEWRITER_DEFAULTS = {
  typeSpeed: 55,
  deleteSpeed: 28,
  holdMs: 1800,
  startDelayMs: 600,
} as const;

export interface HeroViewModelOptions {
  name: string;
  roles: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  startDelayMs?: number;
  scrambleDurationMs?: number;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useHeroViewModel({
  name,
  roles,
  typeSpeed = TYPEWRITER_DEFAULTS.typeSpeed,
  deleteSpeed = TYPEWRITER_DEFAULTS.deleteSpeed,
  holdMs = TYPEWRITER_DEFAULTS.holdMs,
  startDelayMs = TYPEWRITER_DEFAULTS.startDelayMs,
  scrambleDurationMs = 1100,
}: HeroViewModelOptions) {
  const lenis = useLenis();

  const [typewriterText, setTypewriterText] = useState("");
  const [nameDisplay, setNameDisplay] = useState(name);
  const [nameScrambling, setNameScrambling] = useState(false);
  const [nameResolved, setNameResolved] = useState(name.length);

  // ponytail: chave estável — array inline não reinicia o typewriter a cada render
  const rolesKey = roles.join("\u0000");
  const rolesRef = useRef(roles);
  useEffect(() => {
    rolesRef.current = roles;
  }, [roles]);

  useEffect(() => {
    const list = rolesRef.current;
    if (list.length === 0) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      const word = list[wordIndex];

      if (!deleting) {
        charIndex += 1;
        if (charIndex >= word.length) {
          charIndex = word.length;
          deleting = true;
          setTypewriterText(word);
          timer = setTimeout(tick, holdMs);
          return;
        }
        setTypewriterText(word.slice(0, charIndex));
        timer = setTimeout(tick, typeSpeed);
        return;
      }

      charIndex -= 1;
      if (charIndex <= 0) {
        charIndex = 0;
        deleting = false;
        wordIndex = (wordIndex + 1) % list.length;
        setTypewriterText("");
        timer = setTimeout(tick, typeSpeed);
        return;
      }
      setTypewriterText(word.slice(0, charIndex));
      timer = setTimeout(tick, deleteSpeed);
    };

    timer = setTimeout(tick, startDelayMs);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [rolesKey, typeSpeed, deleteSpeed, holdMs, startDelayMs]);

  const rafRef = useRef<number | null>(null);

  const scrambleName = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    setNameScrambling(true);

    const chars = name.split("");
    const totalFrames = Math.max(16, Math.round(scrambleDurationMs / 25));
    let frame = 0;

    const tick = () => {
      frame++;
      const reveal = Math.floor(
        easeOutCubic(frame / totalFrames) * chars.length,
      );
      let out = "";
      for (let i = 0; i < chars.length; i++) {
        const c = chars[i];
        if (c === " ") {
          out += " ";
        } else if (i < reveal || Math.random() < 0.1) {
          out += c;
        } else {
          out += SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        }
      }
      setNameDisplay(out);
      setNameResolved(reveal);

      if (frame < totalFrames) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setNameDisplay(name);
        setNameResolved(name.length);
        setNameScrambling(false);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [name, scrambleDurationMs]);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = useCallback(
    (id: string) => smoothScrollTo(id, lenis),
    [lenis],
  );

  return {
    typewriterText,
    staticRole: roles[0] ?? "",
    nameDisplay,
    nameScrambling,
    nameResolved,
    scrambleName,
    scrollTo,
  };
}
