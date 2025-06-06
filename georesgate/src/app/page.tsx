"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./components/IntroLoader";
import TermoUso from "./components/TermoUso";
import TermoUsoMobile from "./components/TermoUsoMobile";

export default function Home() {
  const [showTermo, setShowTermo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTermo(true);
    }, 9000);

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (!showTermo) return <IntroLoader />;

  return isMobile ? (
    <TermoUsoMobile onContinue={() => console.log("Avançar para próxima etapa")} />
  ) : (
    <TermoUso onContinue={() => console.log("Avançar para próxima etapa")} />
  );
}
