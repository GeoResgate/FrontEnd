"use client";

import { useState } from "react";
import Image from "next/image";

export default function TermoUsoMobile({ onContinue }: { onContinue: () => void }) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    step === 0 ? setStep(1) : onContinue();
  };

  const backgroundBase = step === 0 ? "/FundoVermelhoTermo.svg" : "/FundoPretoTermo.svg";
  const backgroundMobileSvg = step === 0 ? "/BackgroundVermelhoTermoMobile.svg" : "/BackgroundPretoTermoMobile.svg";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black font-poppins sm:hidden">
      <Image
        src={backgroundBase}
        alt="Fundo base"
        fill
        className="absolute object-cover w-full h-full z-0"
        priority
      />

      <img
        src={backgroundMobileSvg}
        alt="Fundo Mobile"
        className="absolute inset-0 w-full h-full object-contain z-10"
      />

      <div className="relative z-20 w-full text-white text-center px-8 py-6 flex flex-col items-center justify-start">
        {/* LOGO */}
        <div className="mb-6 w-full flex justify-center">
          <Image
            src="/LogoGeoResgate.svg"
            alt="Logo"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>

        {/* TEXTO */}
        {step === 0 ? (
          <div className="flex flex-col items-center space-y-5 text-pretty max-w-[320px]">
            <p className="text-[20px] font-bold mt-6">
              Antes de prosseguir, leia com atenção:
            </p>

            <p className="text-[16px] font-light leading-relaxed mt-3 mb-5">
              Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
              deslizamentos ou isolamento em áreas de risco.
            </p>

            <ul className="space-y-4 text-left font-medium text-[15px] leading-relaxed">
              <li className="flex gap-2 items-start">
                <span className="text-[22px] font-bold leading-[1.2]">•</span>
                <span>
                  Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma central de apoio.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[22px] font-bold leading-[1.2]">•</span>
                <span>
                  O uso indevido deste recurso pode causar prejuízos graves e comprometer o atendimento de quem realmente precisa.
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-5 text-pretty max-w-[320px]">
            <p className="text-[18px] font-bold mt-4">
              Ao prosseguir com o cadastro, você declara estar ciente de que:
            </p>

            <ul className="space-y-4 text-left font-medium text-[15px] leading-relaxed">
              <li className="flex gap-2 items-start">
                <span className="text-[22px] font-bold leading-[1.2]">•</span>
                <span>O botão deve ser utilizado somente em caso de risco de vida;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[22px] font-bold leading-[1.2]">•</span>
                <span>Informações falsas ou alertas indevidos poderão ser investigados;</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[22px] font-bold leading-[1.2]">•</span>
                <span>O uso consciente do sistema pode salvar vidas.</span>
              </li>
            </ul>

            <p className="text-[14px] font-light text-gray-200 leading-snug mt-3">
              Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua
              responsabilidade sobre a veracidade das informações prestadas e o uso consciente da plataforma.
            </p>
          </div>
        )}

        {/* BOTÃO */}
        <div className="w-full max-w-[240px] mx-auto mt-10">
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