import { envVariables } from '@/helpers/envVariables'
import React from 'react'

export default function PageHelp() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Central de Ajuda
      </h1>

      <p className="mb-4 text-sm text-gray-500">
        Última atualização: 18 de Junho de 2025
      </p>

      <section className="space-y-8 text-base leading-relaxed">
        <p>
          Bem-vindo à Central de Ajuda do{' '}
          <strong>{envVariables.PRODUCT_NAME}</strong>. Aqui você encontra respostas
          para dúvidas sobre nossos suplementos encapsulados e géis vitamínicos,
          pedidos, pagamentos e suporte.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Sobre nossos produtos</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Quais suplementos oferecemos?</strong>
            <br />
            Disponibilizamos cápsulas com vitaminas, minerais e combinados, além
            de géis de absorção rápida para reforçar sua saúde.
          </li>
          <li>
            <strong>Como armazenar?</strong>
            <br />
            Mantenha em local fresco e seco, protegido da luz direta e fora do
            alcance de crianças.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">2. Pedidos e Entregas</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Como faço um pedido?</strong>
            <br />
            Selecione o produto desejado na página de vendas, clique em “Comprar
            Agora”, e conclua o checkout com Stripe.
          </li>
          <li>
            <strong>Prazo de entrega</strong>
            <br />O envio é realizado via transportadora parceira em até 5 dias
            úteis após confirmação de pagamento.
          </li>
          <li>
            <strong>Rastreamento</strong>
            <br />
            Você receberá um código de rastreio por e-mail para acompanhar seu
            pedido.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          3. Pagamentos e Reembolsos
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Quais métodos de pagamento?</strong>
            <br />
            Aceitamos cartão de crédito, boleto bancário e Pix via Stripe.
          </li>
          <li>
            <strong>Como solicitar reembolso?</strong>
            <br />
            Você tem 7 dias para solicitar reembolso completo após o
            recebimento. Envie seu pedido para{' '}
            <strong>{envVariables.EMAIL_SUPPORT}</strong>.
          </li>
          <li>
            <strong>Voucher de desconto</strong>
            <br />
            Utilize códigos promocionais no checkout antes de finalizar a
            compra.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          4. Acompanhamento e Suporte
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Como entro em contato?</strong>
            <br />
            Para dúvidas não cobertas aqui, escreva para{' '}
            <strong>{envVariables.EMAIL_SUPPORT}</strong>.
          </li>
          <li>
            <strong>Horário de atendimento</strong>
            <br />
            Segunda a sexta, das 9h às 18h (exceto feriados nacionais).
          </li>
          <li>
            <strong>Suporte técnico</strong>
            <br />
            Caso tenha problemas com o site ou checkout, limpe o cache do
            navegador ou tente outro navegador/dispositivo.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          5. Segurança e Privacidade
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Meus dados estão seguros?</strong>
            <br />
            Utilizamos criptografia e seguimos políticas de privacidade
            rigorosas. Consulte nossa{' '}
            <a href="/privacy-policy" className="underline text-blue-600">
              Política de Privacidade
            </a>
            .
          </li>
        </ul>
      </section>
    </main>
  )
}
