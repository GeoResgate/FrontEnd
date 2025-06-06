"use client";

import Image from "next/image";

export default function CadastroMobilePage() {
  return (
    <div className="relative min-h-screen w-full bg-black font-poppins">
      {/* Background principal */}
      <Image
        src="/BackgroundCadastroMobile.png"
        alt="Fundo principal"
        fill
        className="absolute object-cover z-0"
        priority
      />

      {/* Fundo do formulário */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-6">
        <div className="relative w-full max-w-sm text-white">
          <Image
            src="/FundoCadastrarMobile.png"
            alt="Fundo do formulário"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain z-[-1]"
          />

          {/* Cabeçalho */}
          <div className="text-center mb-6 pt-4 px-4">
            <h1 className="text-2xl font-semibold mb-1">GeoResgate</h1>
            <p className="text-sm text-gray-200">
              Ajude o resgate a te encontrar com precisão. Em momentos de emergência, cada segundo conta.
            </p>
          </div>

          {/* Formulário */}
          <form className="flex flex-col gap-3 text-black px-4 pb-6">
            <div>
              <label className="block text-white text-sm mb-1">Nome completo</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="Digite seu nome" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">CPF</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="000.000.000-00" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Data de nascimento</label>
              <input type="date" className="w-full rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Telefone</label>
              <input type="tel" className="w-full rounded-md px-3 py-2" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Membros da família</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="ex: filho, avó..." />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">CEP</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="00000-000" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Rua</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="Nome da rua" />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Número</label>
              <input type="text" className="w-full rounded-md px-3 py-2" placeholder="123" />
            </div>

            {/* Botão */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="relative w-36 h-11 text-white font-bold"
              >
                <Image
                  src="/FundoBotaoCadastrarMobile.png"
                  alt="Botão cadastrar"
                  fill
                  className="absolute w-full h-full object-contain z-[-1]"
                />
                <span className="relative z-10">Cadastrar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
