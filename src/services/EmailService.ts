import { envVariables } from '@/helpers/envVariables'
import nodemailer, { Transporter } from 'nodemailer'
import { generateActivationCode } from './generateActivationCode'

export interface SendNewPasswordEmailInput {
  email: string
  newPassword: string
}

export interface SendWelcomeEmailInput {
  email: string
  name?: string
}

export class EmailService {
  private transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: envVariables.EMAIL_HOST!,
      port: Number(envVariables.EMAIL_PORT!),
      secure: false,
      auth: {
        user: envVariables.EMAIL_USER!,
        pass: envVariables.EMAIL_PASS!,
      },
    })
  }

  async sendNewPasswordEmail({
    email,
    newPassword,
  }: SendNewPasswordEmailInput): Promise<void> {
    const content = `
      <h2 style="color: #0f172a;">Olá,</h2>
      <p style="font-size: 16px; color: #1e293b;">
        Você solicitou uma nova senha de acesso ao <strong>${envVariables.APP_NAME}</strong>.
      </p>
      <p style="font-size: 16px; color: #1e293b;">
        Use a nova senha abaixo para fazer login no aplicativo:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #fbbf24; padding: 16px; border-radius: 6px; font-size: 18px; font-weight: bold; color: #000;">
          ${newPassword}
        </div>
      </div>
      <p style="font-size: 14px; color: #64748b;">
        Por segurança, recomendamos que você altere essa senha após o primeiro acesso.
      </p>
    `

    await this.transporter.sendMail({
      from: `"${envVariables.APP_NAME}" <${envVariables.EMAIL_USER}>`,
      to: email,
      subject: `Nova senha gerada para ${envVariables.APP_NAME} 🦉`,
      html: this._wrapEmailContent(content),
    })
  }

  async sendWelcomeEmail({ email }: SendWelcomeEmailInput): Promise<string> {
    // Gera um código de ativação de 8 dígitos
    const activationCode = generateActivationCode()
    const content = `
      <h2 style="color: #0f172a;">Bem-vindo!</h2>
      <p style="font-size: 16px; color: #1e293b;">
        Obrigado por fazer parte do grupo <strong>${envVariables.APP_NAME} 🦉</strong>.
      </p>
      <p style="font-size: 16px; color: #1e293b;">
        Seu código de ativação é:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #fbbf24; padding: 16px; border-radius: 6px; font-size: 18px; font-weight: bold; color: #000;">
          ${activationCode}
        </div>
      </div>
      <p style="font-size: 14px; color: #64748b;">
        Use este código para ativar sua conta e começar a usar nossos recursos.
      </p>
    `

    await this.transporter.sendMail({
      from: `"${envVariables.APP_NAME}" <${envVariables.EMAIL_USER}>`,
      to: email,
      subject: `Bem-vindo ao ${envVariables.APP_NAME} 🦉`,
      html: this._wrapEmailContent(content),
    })

    return activationCode
  }

  private _wrapEmailContent(content: string): string {
    return `
      <div style="font-family: Arial, sans-serif; background-color: #0f172a; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
          ${content}
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #e2e8f0;" />
          ${this._generateEmailFooter()}
        </div>
      </div>
    `
  }

  private _generateEmailFooter(): string {
    return `
      <div style="text-align: center; font-size: 13px; color: #94a3b8;">
        <p><strong>${envVariables.APP_NAME} 🦉</strong></p>
        <p>
          <a href="${envVariables.SITE_URL}" target="_blank" rel="noopener" style="color: #0ea5e9; text-decoration: underline; cursor: pointer;">
            ${envVariables.SITE_URL}
          </a>
        </p>
        <div style="margin-top: 10px;">
          <a href="${envVariables.SOCIAL_YOUTUBE}" target="_blank" rel="noopener" style="margin: 0 8px; text-decoration: none;" aria-label="YouTube">
            <img src="https://www.svgrepo.com/show/475700/youtube-color.svg" alt="YouTube" width="20" height="20" style="vertical-align: middle;">
          </a>
          <a href="https://www.instagram.com/${envVariables.SOCIAL_INSTAGRAM}" target="_blank" rel="noopener" style="margin: 0 8px; text-decoration: none;" aria-label="Instagram">
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" width="20" height="20" style="vertical-align: middle;">
          </a>
          <a href="https://www.facebook.com/${envVariables.SOCIAL_FACEBOOK}" target="_blank" rel="noopener" style="margin: 0 8px; text-decoration: none;" aria-label="Facebook">
            <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" width="20" height="20" style="vertical-align: middle;">
          </a>
        </div>
      </div>
    `
  }
}
