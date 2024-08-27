export function QuemSomos() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Coluna Esquerda */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-center">
        {/* Logo Principal */}
        <img src="/logo.png" alt="logo" className="mb-8" width={200} />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Empresas parceiras</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Logos das empresas parceiras */}
            <img
              src="logo1.png"
              alt="Parceiro 1"
              className="h-16 object-contain"
            />
            <img
              src="logo2.png"
              alt="Parceiro 2"
              className="h-16 object-contain"
            />
            <img
              src="logo3.png"
              alt="Parceiro 3"
              className="h-16 object-contain"
            />
            <img
              src="logo4.png"
              alt="Parceiro 4"
              className="h-16 object-contain"
            />
            <img
              src="logo5.png"
              alt="Parceiro 5"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="w-full md:w-1/2 bg-orange-500 text-white p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Quem somos?</h2>
        <p className="text-lg mb-8">
          Somos uma empresa que atua no mercado de transporte há 15 anos.
          Oferecemos soluções de transporte personalizadas para eventos ou para
          empresas. Com uma frota de veículos moderna, a Locavans busca garantir
          segurança, conforto e qualidade em todos os seus serviços de
          transporte.
        </p>
        <div>
          <h3 className="text-2xl font-bold mb-4">Nossos contatos</h3>
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
