"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./components/IntroLoader";
import TermoUso from "./components/TermoUso";
import TermoUsoMobile from "./components/TermoUsoMobile";
import CadastroDesktop from "./cadastro-desktop/page";
import CadastroMobile from "./cadastro-mobile/page";

export default function Home() {
  const [showTermo, setShowTermo] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);
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

  if (showCadastro) {
    return isMobile ? <CadastroMobile /> : <CadastroDesktop />;
  }

  return isMobile ? (
    <TermoUsoMobile onContinue={() => setShowCadastro(true)} />
  ) : (
    <TermoUso onContinue={() => setShowCadastro(true)} />
  );
}
