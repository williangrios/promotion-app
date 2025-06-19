import { envVariables } from '@/helpers/envVariables'

export default function PageTermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Termos e Condições de Uso
      </h1>

      <p className="mb-4 text-sm text-gray-500">
        Última atualização: 18 de Junho de 2025
      </p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          Estes termos regem seu uso do site, que é uma plataforma de venda de
          suplementos encapsulados e géis vitamínicos. Ao realizar compras, você
          concorda com estes Termos.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Cadastro e Conta</h2>
        <p>
          Para comprar, é necessário criar uma conta com dados verdadeiros. Você
          é responsável por manter a confidencialidade de sua senha.
        </p>

        <h2 className="text-xl font-semibold mt-8">2. Produtos e Pedidos</h2>
        <p>
          Oferecemos cápsulas e géis de vitaminas e suplementos. As descrições e
          imagens são ilustrativas. Reservamo-nos o direito de alterar preços e
          composição dos produtos a qualquer momento.
        </p>

        <h2 className="text-xl font-semibold mt-8">3. Preços e Pagamento</h2>
        <p>
          Os valores são exibidos em reais (BRL) já com impostos. O pagamento é
          processado por terceiros (Stripe) e sujeito às políticas de cada meio
          (cartão, boleto, pix).
        </p>

        <h2 className="text-xl font-semibold mt-8">4. Entrega e Devolução</h2>
        <p>
          O prazo de entrega varia conforme endereço. Produtos devem ser
          conferidos no recebimento. Para troca ou devolução, consulte nossa
          política de reembolso de 7 dias em nossa seção de suporte.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          5. Garantia de Satisfação
        </h2>
        <p>
          Oferecemos garantia de 7 dias para insatisfação de compra. Para
          reembolso, entre em contato pelo e-mail {envVariables.EMAIL_SUPPORT}.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          6. Propriedade Intelectual
        </h2>
        <p>
          Todo conteúdo do site/app é protegido por direitos autorais e marca
          registrada.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          7. Limitação de Responsabilidade
        </h2>
        <p>
          Não nos responsabilizamos por danos indiretos, lucros cessantes ou
          perdas decorrentes do uso ou impossibilidade de uso dos produtos.
        </p>

        <h2 className="text-xl font-semibold mt-8">8. Alterações nos Termos</h2>
        <p>
          Reservamo-nos o direito de atualizar estes Termos a qualquer momento.
          A data de revisão será alterada no topo desta página.
        </p>

        <h2 className="text-xl font-semibold mt-8">9. Contato</h2>
        <p>Dúvidas ou solicitações: {envVariables.EMAIL_SUPPORT}</p>
      </section>
    </main>
  )
}
