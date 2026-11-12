"use client";

import { motion } from "motion/react";
import {
  socialLinks,
  contactTitle,
  contactSubtitle,
} from "../../model/contact";
import { profile } from "@/lib/content/profile";
import { useContactViewModel } from "./viewmodel";
import { Reveal } from "@/components/ui/Reveal";
import { IconLink } from "../IconLink";
import { palette } from "@/styles/theme.css";
import { focusRing, hoverAccent } from "@/lib/motionStates";
import {
  section,
  inner,
  eyebrow,
  title,
  subtitle,
  email,
  socials,
  social,
} from "./style.css";

export function Contact() {
  const { copied, copy } = useContactViewModel(profile.email);

  return (
    <section id="contato" className={section}>
      <div className={inner}>
        <Reveal>
          <span className={eyebrow}>05 // o que vem agora?</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className={title}>{contactTitle}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={subtitle}>{contactSubtitle}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <motion.button
            type="button"
            className={email}
            onClick={copy}
            aria-live="polite"
            whileHover={{
              backgroundColor: palette.pink,
              color: palette.ink,
            }}
            whileTap={{ scale: 0.98 }}
            whileFocus={focusRing}
            transition={{ duration: 0.15 }}
          >
            {copied ? "copiado ✓" : profile.email}
          </motion.button>
        </Reveal>
        <Reveal delay={0.2}>
          <div className={socials}>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                className={social}
                href={s.href}
                target={s.type === "email" ? undefined : "_blank"}
                rel="noreferrer"
                whileHover={hoverAccent}
                whileFocus={focusRing}
                transition={{ duration: 0.15 }}
              >
                <IconLink type={s.type} />
                {s.label}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
