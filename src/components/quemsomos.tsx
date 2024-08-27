export function QuemSomos() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Coluna Esquerda */}
      <div className="flex w-full flex-col items-center justify-center bg-white p-6 md:w-1/2 md:p-8">
        {/* Logo Principal */}
        <img src="/logo.png" alt="logo" className="mb-6 md:mb-8" width={300} />

        <div className="relative text-center">
          <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl">
            Empresas parceiras
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Logos das empresas parceiras */}
            <img
              src="logo1.png"
              alt="Parceiro 1"
              className="h-12 object-contain md:h-16"
            />
            <img
              src="logo2.png"
              alt="Parceiro 2"
              className="h-12 object-contain md:h-16"
            />
            <img
              src="logo3.png"
              alt="Parceiro 3"
              className="h-12 object-contain md:h-16"
            />
            <img
              src="logo4.png"
              alt="Parceiro 4"
              className="h-12 object-contain md:h-16"
            />
            <img
              src="logo5.png"
              alt="Parceiro 5"
              className="h-12 object-contain md:h-16"
            />
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="flex w-full flex-col items-center justify-center bg-orange-500 p-6 text-center text-white md:w-1/2 md:p-8">
        <h2 className="mb-4 font-bold md:text-4xl">Quem somos?</h2>
        <p className="mb-6 text-center text-base font-semibold md:mb-8 md:text-lg">
          Somos uma empresa que atua no mercado de transporte há 15 anos.
          Oferecemos soluções de transporte personalizadas para eventos ou para
          empresas. Com uma frota de veículos moderna, a Locavans busca garantir
          segurança, conforto e qualidade em todos os seus serviços de
          transporte.
        </p>
        <div>
          <h3 className="mb-4 text-xl font-bold md:text-2xl">
            Nossos contatos
          </h3>
          <p className="mb-2">
            <span className="font-bold">Telefone:</span> (85) 9 9999-9999
          </p>
          <p className="mb-2">
            <span className="font-bold">WhatsApp:</span> (85) 9 9999-9999
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> locavans@gmail.com.br
          </p>
          <p>
            <span className="font-bold">Endereço:</span> Av. Desembargador
            Moreira, 2800
          </p>
        </div>
      </div>
    </section>
  );
}
