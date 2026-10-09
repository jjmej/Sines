import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export default function QuienesSomos() {
  useTitle('Quiénes somos - Sinestesya')
  return (
    <div className="wrap">
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[--ink] tracking-tight mb-4">
            Sinestesya
          </h1>
          <p className="text-xl md:text-2xl text-[--soft] max-w-lg mx-auto">
            Un centro de bienestar integrado
          </p>
        </div>

        <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Misión */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[--ink] mb-6 border-b-2 border-[--line] pb-3">
              Nuestra Misión
            </h2>
            <p className="text-[--soft] leading-relaxed">
              Ofrecer una atención integral que una psicología, logopedia, fisioterapia y nutrición en un solo lugar, 
              facilitando un enfoque holístico del bienestar para adultos y niños.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[--ink] mb-6 border-b-2 border-[--line] pb-3">
              Nuestra Visión
            </h2>
            <p className="text-[--soft] leading-relaxed">
              Ser el referente en La Puebla de Alfindén de atención multidisciplinar cercana, profesional y de calidad, 
              donde mente, cuerpo y lenguaje trabajen en armonía para una vida plena.
            </p>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[--ink] mb-6 border-b-2 border-[--line] pb-3">
              Nuestros Valores
            </h2>
            <ul className="space-y-3 text-left text-[--soft]">
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-[--panel] flex items-center justify-center flex-shrink-0 bg-[--line] text-[--ink] text-sm font-medium mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="flex-shrink-0">
                    <path d="M20 7l-8-8-5.4 5.4a2 2 0 0 0 0 2.8l5.4 5.4-8 8H10"/>
                  </svg>
                </span>
                <span>Confianza</span>
                <p className="text-[--soft]/80 mt-1 text-xs">Un entorno seguro y respetuoso para crecer.</p>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-[--panel] flex items-center justify-center flex-shrink-0 bg-[--line] text-[--ink] text-sm font-medium mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 8 12 12 18"/>
                  </svg>
                </span>
                <span>Escucha</span>
                <p className="text-[--soft]/80 mt-1 text-xs">Dedicamos el tiempo necesario para tu historia.</p>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-[--panel] flex items-center justify-center flex-shrink-0 bg-[--line] text-[--ink] text-sm font-medium mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="flex-shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                <span>Acompañamiento</span>
                <p className="text-[--soft]/80 mt-1 text-xs">Estamos contigo durante todo el proceso.</p>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-[--panel] flex items-center justify-center flex-shrink-0 bg-[--line] text-[--ink] text-sm font-medium mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="flex-shrink-0">
                    <path d="M6.5 4.5l3 3L22 7l-5 5L12 14l6 6L2 22l10-10L2.5 4.5z"/>
                  </svg>
                </span>
                <span>Calidad</span>
                <p className="text-[--soft]/80 mt-1 text-xs">Profesionales cualificados y en formación constante.</p>
              </li>
            </ul>
          </div>

        </div>

        <section className="mt-20 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[--ink] mb-8">
            Dónde estamos
          </h2>
          <div className="bg-[--panel] rounded-2xl p-6 md:p-8 text-center">
            <p className="text-2xl md:text-3xl font-light text-[--ink] mb-1">
              Calle Fuertes, 1
            </p>
            <p className="text-[--soft] mb-1">
              50171 La Puebla de Alfindén
            </p>
            <p className="text-[--soft]/60 text-xs">
              (Zaragoza)
            </p>
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-[--line] text-center">
          <p className="text-[--soft]/60 text-sm">
            Estamos renovando nuestra web. Gracias por tu paciencia.
          </p>
        </footer>
      </section>
    </div>
  )
}