"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./components/IntroLoader";
import TermoUso from "./components/TermoUso";

export default function Home() {
  const [showTermo, setShowTermo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTermo(true);
    }, 9000); // 3s * 3 etapas da Intro

    return () => clearTimeout(timer);
  }, []);

  return showTermo ? (
    <TermoUso onContinue={() => console.log("Avançar para próxima etapa")} />
  ) : (
    <IntroLoader />
  );
}
