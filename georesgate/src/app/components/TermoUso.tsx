"use client";

import { useState } from "react";
import Image from "next/image";
import Termo1 from "../../../public/teste.png";
import Termo2 from "../../../public/TermodeUso2.svg";

export default function TermoUso({ onContinue }: { onContinue: () => void }) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step === 0) {
      setStep(1);
    } else {
      onContinue();
    }
  };

  return (
    <div
      className={`relative min-h-screen w-full flex items-center justify-center bg-cover bg-no-repeat bg-center transition-all duration-500 ${
        step === 0
          ? "bg-[url('/BackgroudTermodeUso1.png')]"
          : "bg-[url('/BackgroudTermodeUso2.png')]"
      } p-4`}
    >
      <div className="relative w-full max-w-[1000px] aspect-[4/3] flex items-center justify-center">
        <Image
          src={step === 0 ? Termo1 : Termo2}
          alt="Termo de Uso"
          fill
          className="object-contain rounded-xl"
          priority
        />

        <div className="absolute inset-0 px-8 py-8 text-white flex flex-col justify-between">
          <div className="w-full max-w-[680px] mx-auto text-center">
            {step === 0 ? (
              <>
                <p className="text-base sm:text-lg font-light mb-3">
                  Antes de prosseguir, <span className="font-bold">leia com atenção:</span>
                </p>
                <p className="text-sm sm:text-base font-light mb-4">
                  Este sistema é exclusivo para situações de emergência real, especialmente em casos de enchentes,
                  deslizamentos ou isolamento em áreas de risco.
                </p>
                <ul className="text-left text-sm sm:text-base space-y-2 font-medium">
                  <li>
                    • Ao acionar o botão de emergência, suas informações e localização exata serão enviadas para uma
                    central de apoio, que poderá acionar equipes de resgate.
                  </li>
                  <li>
                    • O uso indevido deste recurso — por brincadeira ou em situações sem risco real — pode causar
                    prejuízos graves, além de comprometer o atendimento de quem realmente precisa.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-base sm:text-lg font-light mb-3">
                  Ao prosseguir com o cadastro, <span className="font-bold">você declara estar ciente de que:</span>
                </p>
                <ul className="text-left text-sm sm:text-base space-y-2 font-medium">
                  <li>• O botão deve ser utilizado somente em caso de risco de vida;</li>
                  <li>• Informações falsas ou alertas indevidos poderão ser investigados;</li>
                  <li>• O uso consciente do sistema pode salvar vidas.</li>
                </ul>
                <p className="text-xs sm:text-sm font-light text-gray-200 pt-4">
                  Ao prosseguir com o cadastro, o usuário concorda com estes termos de uso e reconhece sua
                  responsabilidade sobre a veracidade das informações prestadas e o uso consciente da plataforma.
                </p>
              </>
            )}
          </div>

          <div className="w-full max-w-[220px] mx-auto text-center">
            <button
              onClick={nextStep}
              className="mt-6 w-full bg-white/90 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-md transition font-poppins"
            >
              {step === 0 ? "Próximo" : "Eu concordo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
