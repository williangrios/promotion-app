'use client'
import { envVariables } from '@/helpers/envVariables'

export default function VideoSection() {
  const { title, subtitle, youtubeUrl } = envVariables.VIDEO_SECTION

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-10 text-white/80 text-base md:text-lg">{subtitle}</p>

        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
            src={youtubeUrl}
            title="Vídeo explicativo sobre o produto Tesão de Touro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
