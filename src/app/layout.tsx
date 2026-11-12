import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { LenisProvider } from "./providers/LenisProvider";
import "@/styles/global.css";

const fraunces = localFont({
  src: "./fonts/Fraunces.ttf",
  variable: "--font-fraunces",
  weight: "100 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

const title = "Kysawa Junior — Desenvolvedor Full Stack";
const description =
  "Portfólio de Kysawa Junior. Desenvolvedor Full Stack — aplicações rápidas, acessíveis e elegantes.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Portfólio Kysawa Junior",
  authors: [{ name: "Kysawa Junior" }],
  keywords: [
    "Kysawa Junior",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Kotlin",
    "Compose Multiplatform",
    "Portfólio",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Kysawa Junior",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
