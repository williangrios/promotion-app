import { envVariables } from '@/helpers/envVariables'
import React from 'react'

export default function PagePrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Política de Privacidade
      </h1>

      <p className="mb-4 text-sm text-gray-500">
        Última atualização: 18 de Junho de 2025
      </p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos e protegemos as informações dos
          usuários do site/app <strong>{envVariables.APP_NAME}</strong>,
          especializado na venda de suplementos encapsulados e géis vitamínicos.
          Ao realizar compras, você concorda com as práticas descritas neste
          documento.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Coleta de informações</h2>
        <p>
          Coletamos dados fornecidos por você ao criar conta ou realizar
          pedidos: nome, e-mail, CPF/CNPJ, endereço de entrega, telefone e dados
          de pagamento.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          2. Dados coletados automaticamente
        </h2>
        <p>
          Podemos coletar dados técnicos de uso, como tipo de dispositivo,
          sistema operacional, histórico de navegação em nosso site e registros
          de erros, para melhorar a experiência e a segurança. Não acessamos
          dados sensíveis ou privados de seu dispositivo.
        </p>

        <h2 className="text-xl font-semibold mt-8">3. Uso das informações</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Processamento e entrega de pedidos de cápsulas e géis;</li>
          <li>Confirmação de pagamento e envio de faturas;</li>
          <li>Comunicações sobre status de pedido e suporte ao cliente;</li>
          <li>Melhoria do site/app e prevenção a fraudes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          4. Compartilhamento de dados
        </h2>
        <p>
          Compartilhamos seus dados apenas com transportadoras, gateways de
          pagamento e provedores de hospedagem necessários para processar seus
          pedidos. Não vendemos nem divulgamos seus dados a terceiros para
          marketing sem sua permissão.
        </p>

        <h2 className="text-xl font-semibold mt-8">5. Segurança dos dados</h2>
        <p>
          Adotamos medidas técnicas e administrativas para proteger seus dados
          contra acessos não autorizados. Entretanto, nenhuma transmissão online
          é 100% segura.
        </p>

        <h2 className="text-xl font-semibold mt-8">6. Seus direitos</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão de seus dados pelo
          e-mail:
          {envVariables.EMAIL_SUPPORT}.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          7. Alterações nesta política
        </h2>
        <p>
          Esta política pode ser atualizada a qualquer momento. A data de
          revisão será atualizada na parte superior desta página.
        </p>

        <h2 className="text-xl font-semibold mt-8">8. Contato</h2>
        <p>
          Dúvidas sobre privacidade? Entre em contato:{' '}
          {envVariables.EMAIL_SUPPORT}
        </p>
      </section>
    </main>
  )
}
