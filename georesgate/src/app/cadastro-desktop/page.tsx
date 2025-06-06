"use client";

import Image from "next/image";

export default function CadastroDesktopPage() {
  return (
    <div className="relative min-h-screen w-full bg-black font-poppins">
      {/* Background principal */}
      <Image
        src="/BackgroundCadastro.png"
        alt="Fundo principal"
        fill
        className="absolute object-cover z-0"
        priority
      />

      {/* Fundo do formulário */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="relative w-full max-w-4xl p-10 pt-12 text-white">
          <Image
            src="/FundoCadastrar.png"
            alt="Fundo do formulário"
            fill
            className="absolute top-0 left-0 w-full h-full object-contain z-[-1]"
          />

          {/* Cabeçalho */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-semibold mb-2">GeoResgate</h1>
            <p className="text-base text-gray-200">
              Ajude o resgate a te encontrar com precisão. Em momentos de emergência, cada segundo conta.
            </p>
          </div>

          {/* Formulário */}
          <form className="grid grid-cols-2 gap-4 text-black">
            <div className="col-span-2">
              <label className="block text-white mb-1">Nome completo</label>
              <input type="text" className="w-full rounded-md px-4 py-2" placeholder="Digite seu nome" />
            </div>
            <div>
              <label className="block text-white mb-1">CPF</label>
              <input type="text" className="w-full rounded-md px-4 py-2" placeholder="000.000.000-00" />
            </div>
            <div>
              <label className="block text-white mb-1">Data de nascimento</label>
              <input type="date" className="w-full rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block text-white mb-1">Telefone</label>
              <input type="tel" className="w-full rounded-md px-4 py-2" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label className="block text-white mb-1">Membros da família</label>
              <input type="text" className="w-full rounded-md px-4 py-2" placeholder="ex: filho, avó..." />
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-4">
              <div>
                <label className="block text-white mb-1">CEP</label>
                <input type="text" className="w-full rounded-md px-4 py-2" placeholder="00000-000" />
              </div>
              <div className="col-span-2">
                <label className="block text-white mb-1">Rua</label>
                <input type="text" className="w-full rounded-md px-4 py-2" placeholder="Nome da rua" />
              </div>
              <div>
                <label className="block text-white mb-1">Número</label>
                <input type="text" className="w-full rounded-md px-4 py-2" placeholder="123" />
              </div>
            </div>

            {/* Botão */}
            <div className="col-span-2 flex justify-center mt-8">
              <button
                type="submit"
                className="relative w-40 h-12 text-white font-bold"
              >
                <Image
                  src="/FundoBotaoCadastrar.png"
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
