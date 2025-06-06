"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  onContinue: () => void;
};

export default function TermoUso({ onContinue }: Props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
    } else {
      onContinue(); // agora vem da prop
    }
  };

  const backgroundSvg = step === 0 ? "/BackgroundVermelhoTermo.png" : "/BackgroundPretoTermo.png";
  const backgroundMobileSvg = step === 0 ? "/BackgroundVermelhoTermoMobile.svg" : "/BackgroundPretoTermoMobile.svg";
  const backgroundBase = step === 0 ? "/FundoVermelhoTermo.svg" : "/FundoPretoTermo.svg";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-poppins">
      <Image
        src={backgroundBase}
        alt="Fundo base"
        fill
        className="absolute object-cover w-full h-full z-0"
        priority
      />

      <picture className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
        <source srcSet={backgroundMobileSvg} media="(max-width: 640px)" />
        <img
          src={backgroundSvg}
          alt="Fundo"
          className="w-[90%] max-w-[1070px] h-auto object-contain"
        />
      </picture>

      <div className="relative z-20 w-full max-w-[700px] text-white text-center px-5 sm:px-6 py-6 sm:py-10 flex flex-col items-center justify-start">
        {/* LOGO */}
        <div className="mb-6 w-full flex justify-center">
          <Image
            src="/LogoGeoResgate.svg"
            alt="Logo"
            width={560}
            height={100}
            className="sm:w-[250px] w-[380px] object-contain"
          />
        </div>

        {/* TEXTO */}
        {step === 0 ? (
          <div className="flex flex-col items-center space-y-5 text-pretty">
            <p className="text-[30px] sm:text-[22px] md:text-[26px] font-bold mt-10">
              Antes de prosseguir, leia com atenção:
            </p>
            <p className="text-[20px] sm:text-[18px] md:text-[20px] font-light leading-relaxed mt-5 mb-5 max-w-[660px] mx-auto">
              Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
              deslizamentos ou isolamento em áreas de risco.
            </p>
            <ul className="space-y-6 text-left px-4 font-medium text-[19px] sm:text-[17px] md:text-[19px] leading-relaxed max-w-[780px] mx-auto">
              <li className="flex gap-2 items-start">
                <span className="text-[26px] font-bold leading-[1.2]">•</span>
                <span>
                  Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma central de apoio, que poderá acionar equipes de resgate.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[26px] font-bold leading-[1.2]">•</span>
                <span>
                  O uso indevido deste recurso — por brincadeira ou em situações sem risco real — pode causar prejuízos graves, além de comprometer o atendimento de quem realmente precisa.
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-5 text-pretty">
            <p className="text-[25px] sm:text-[22px] md:text-[26px] font-bold mt-2">
              Ao prosseguir com o cadastro, você declara estar ciente de que:
            </p>
            <ul className="space-y-6 text-left px-10 font-medium text-[19px] sm:text-[17px] md:text-[19px] leading-relaxed max-w-[580px] mx-auto">
              <li className="flex gap-2 items-start">
                <span className="text-[26px] font-bold leading-[1.2]">•</span>
                <span>O botão deve ser utilizado somente em caso de risco de vida;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[26px] font-bold leading-[1.2]">•</span>
                <span>Informações falsas ou alertas indevidos poderão ser investigados;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[26px] font-bold leading-[1.2]">•</span>
                <span>O uso consciente do sistema pode salvar vidas.</span>
              </li>
            </ul>
            <p className="text-[17px] sm:text-[15px] md:text-[17px] font-light text-gray-200 px-4 leading-snug mt-3 max-w-[660px] mx-auto">
              Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua
              responsabilidade sobre a veracidade das informações prestadas e o uso consciente da plataforma.
            </p>
          </div>
        )}

        {/* BOTÃO */}
        <div className="w-full max-w-[220px] mx-auto mt-10">
          <button
            onClick={nextStep}
            className="w-full h-[50px] bg-[url('/FundoBotao.png')] bg-contain bg-center bg-no-repeat text-white text-[18px] font-bold"
            style={{ backgroundColor: "transparent", border: "none", outline: "none", color: "white" }}
          >
            {step === 0 ? "Próximo" : "Eu concordo"}
          </button>
        </div>
      </div>
    </div>
  );
}
