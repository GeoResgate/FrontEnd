"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundPreto from "../../../public/BackgroundPreto.svg";
import Logo from "../../../public/Logo.svg";
import GeoResgate from "../../../public/GeoResgate.svg";
import BemVindo from "../../../public/BemVindo.svg";

export default function IntroLoader() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 3000);
    if (step > 2) clearInterval(interval);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out ${
        step < 2
          ? "bg-[url('/BackgroundPreto.svg')]"
          : "bg-[url('/BackgroundVermelho.svg')]"
      }`}
    >
      {step === 0 && (
        <div className="w-16 sm:w-20 md:w-24 lg:w-28">
            <Image
            src={Logo}
            alt="Logo"
            className="w-full h-auto animate-custom-spin"
            priority
            />
        </div>
        )}

      {step === 1 && (
        <Image
          src={GeoResgate}
          alt="GeoResgate"
          className="w-30 sm:w-72 md:w-80 lg:w-96 h-auto animate-fade-in-up"
        />
      )}

      {step === 2 && (
        <Image
          src={BemVindo}
          alt="Bem-vindo ao GeoResgate"
          className="w-[360px] sm:w-[320px] md:w-[360px] h-auto animate-fade-in-up"
        />
      )}
    </div>
  );
}
