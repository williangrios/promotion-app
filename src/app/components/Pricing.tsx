export default function Pricing() {
  return (
    <section className="py-20 bg-slate-100 text-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Escolha seu plano e assuma o controle 💪
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Teste gratuitamente e, quando estiver pronto para liberar todo o poder
          da IA, escolha o plano ideal para sua família.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Plano Gratuito */}
          {/* <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Plano Grátis</h3>
            <p className="text-gray-600 mb-4">Ideal para começar</p>
            <ul className="text-left text-sm text-gray-700 mb-6 space-y-2">
              <li>✅ Tabuada completa</li>
              <li>✅ Somas e subtrações</li>
              <li>❌ Sem personalização por IA</li>
              <li>❌ Sem controle avançado de matérias</li>
            </ul>
            <p className="text-3xl font-bold mt-auto">R$0</p>
            <p className="text-sm text-gray-500">Para sempre</p>
          </div> */}

          {/* Plano Trimestral */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Plano Trimestral</h3>
            <p className="text-gray-600 mb-4">Flexível e funcional</p>
            <ul className="text-left text-sm text-gray-700 mb-6 space-y-2">
              <li>✅ IA personalizada por tema, foto ou matéria</li>
              <li>✅ Controle de frequência de bloqueios</li>
              <li>✅ Atualizações e suporte</li>
            </ul>
            <p className="text-3xl font-bold mt-auto">R$49,90</p>
            <p className="text-sm text-gray-500">A cada 3 meses</p>
            <div className="mt-4">
              <a
                href="/checkout"
                className="inline-block bg-black text-yellow-400 font-bold px-6 py-3 rounded-full hover:bg-gray-900 transition"
              >
                Quero esse plano 🔥
              </a>
            </div>
          </div>

          {/* Plano Anual – Destaque */}
          <div className="bg-yellow-400 text-black rounded-xl shadow-xl p-8 border-4 border-yellow-600 scale-105 flex flex-col relative">
            <span className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
              Mais vantajoso
            </span>
            <h3 className="text-2xl font-bold mb-4">Plano Anual</h3>
            <p className="text-black mb-4 font-medium">
              Compromisso com o aprendizado real
            </p>
            <ul className="text-left text-sm text-black mb-6 space-y-2">
              <li>✅ Tudo do plano trimestral</li>
              <li>✅ Acesso por 12 meses</li>
              <li>✅ Economia de até 46%</li>
              <li>✅ Priorização em novidades e recursos futuros</li>
            </ul>
            <p className="text-3xl font-extrabold mt-auto">R$129,90</p>
            <p className="text-sm font-semibold text-gray-800">
              equivalente a R$10,82/mês
            </p>
            <div className="mt-4">
              <a
                href="/checkout"
                className="inline-block bg-black text-yellow-400 font-bold px-6 py-3 rounded-full hover:bg-gray-900 transition"
              >
                Quero esse plano 🔥
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
