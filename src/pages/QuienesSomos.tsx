import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { AREAS } from '../services/areas'
import { useEffect, useState } from 'react'

export default function QuienesSomos() {
  useTitle('Quiénes somos - Sinestesya')
  const [showMenu, setShowMenu] = useState(false)

  // Animate on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            // Trigger re-render for animation
          }, index * 100)
        }
      })
    }, observerOptions)

    // Observe all section heads
    document.querySelectorAll('h2, h3').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
  <div className="wrap">
    <section className="min-h-screen bg-[--bg] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <div className="mb-20 text-center md:mb-24">
          <p className="mb-6 inline-block rounded-full bg-[--line] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[--ink]">
            Centro de Bienestar Integrado
          </p>

          <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-[--ink] md:text-6xl lg:text-7xl">
            Sinestesya
          </h1>

          <p className="mx-auto max-w-2xl text-2xl leading-relaxed text-[--soft] md:text-3xl lg:text-4xl">
            Un espacio donde mente, voz, cuerpo y alimento encuentran equilibrio.
          </p>
        </div>

        {/* Discipline Logos Bar */}
        <div className="mb-16 grid grid-cols-2 justify-center gap-4 md:grid-cols-4">
          {AREAS.map((area) => (
            <div
              key={area.slug}
              className="flex cursor-pointer flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:bg-[--panel]"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[--ink] transition-transform hover:scale-110"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <circle cx="15" cy="15" r="2" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="8" y1="10" x2="16" y2="10" />
              </svg>
              <p className="text-[.75rem] font-medium text-[--soft]">
                {area.nombre}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Misión Section */}
          <div className="group rounded-2xl border-l-4 border-[--ink] bg-[--panel] p-6 transition-colors hover:border-[--salvia] md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--salvia] md:text-3xl">
              Nuestra Misión
            </h2>
            <p className="mb-6 leading-relaxed text-[--soft]">
              Ofrecer una atención integral que una psicología, logopedia,
              fisioterapia y nutrición en un solo lugar, facilitando un enfoque
              holístico del bienestar para adultos y niños.
            </p>
            <ul className="space-y-2 text-left text-[--soft]/90">
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--salvia] transition-transform" />
                <span>Atención integral en un solo espacio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--azul] transition-transform" />
                <span>Enfoque holístico y personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--verde] transition-transform" />
                <span>Adaptado a cada etapa de la vida</span>
              </li>
            </ul>
          </div>

          {/* Visión Section */}
          <div className="group rounded-2xl border-l-4 border-[--azul] bg-[--panel] p-6 transition-colors hover:border-[--azul]/80 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--azul] md:text-3xl">
              Nuestra Visión
            </h2>
            <p className="mb-6 leading-relaxed text-[--soft]">
              Ser el referente en La Puebla de Alfindén de atención
              multidisciplinar cercana, profesional y de calidad, donde mente,
              cuerpo y lenguaje trabajen en armonía.
            </p>
            <ul className="space-y-2 text-left text-[--soft]/90">
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--salvia] transition-transform" />
                <span>Referente regional en bienestar integrado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--verde] transition-transform" />
                <span>Mente y cuerpo en armonía</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full bg-[--naranja] transition-transform" />
                <span>Acceso universal a calidad</span>
              </li>
            </ul>
          </div>

          {/* Valores Section */}
          <div className="group rounded-2xl border-l-4 border-[--salvia] bg-[--panel] p-6 transition-colors hover:border-[--salvia]/80 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--salvia] md:text-3xl">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["Confianza", "Escucha", "Acompañamiento", "Calidad"].map(
                (valor, i) => {
                  const colores = [
                    "bg-[--salvia]",
                    "bg-[--azul]",
                    "bg-[--verde]",
                    "bg-[--naranja]",
                  ];

                  return (
                    <div
                      key={valor}
                      className="group/valor flex items-start rounded-lg p-3 transition-all hover:bg-[--line]/50"
                    >
                      <span
                        className={`mr-3 h-3 w-3 flex-shrink-0 -translate-y-1 transform rounded-full transition-transform ${colores[i]}`}
                      />
                      <div>
                        <p className="font-medium text-[--ink]">{valor}</p>
                        <p className="mt-0.5 text-xs text-[--soft]/80">
                          Principio rector de nuestra práctica
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border-l-4 border-[--naranja] bg-[--panel] p-6 text-center transition-colors hover:border-[--naranja]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[--naranja]/20 transition-colors group-hover:bg-[--naranja]/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21l-1-8h-9l-1 8H23" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">
              Psicología
            </h3>
            <p className="text-sm text-[--soft]/80">
              Cuidado integral de la salud mental
            </p>
          </div>

          <div className="group rounded-2xl border-l-4 border-[--azul] bg-[--panel] p-6 text-center transition-colors hover:border-[--azul]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[--azul]/20 transition-colors group-hover:bg-[--azul]/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 8 12 12 18" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">
              Logopedia
            </h3>
            <p className="text-sm text-[--soft]/80">
              Evaluación y tratamiento del lenguaje
            </p>
          </div>

          <div className="group rounded-2xl border-l-4 border-[--verde] bg-[--panel] p-6 text-center transition-colors hover:border-[--verde]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[--verde]/20 transition-colors group-hover:bg-[--verde]/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6.5 4.5l3 3L22 7l-5 5L12 14l6 6L2 22l10-10L2.5 4.5z" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">
              Fisioterapia
            </h3>
            <p className="text-sm text-[--soft]/80">
              Recuperación y movimiento funcional
            </p>
          </div>

          <div className="group rounded-2xl border-l-4 border-[--salvia] bg-[--panel] p-6 text-center transition-colors hover:border-[--salvia]/80">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[--salvia]/20 transition-colors group-hover:bg-[--salvia]/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <circle cx="15" cy="15" r="2" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="8" y1="10" x2="16" y2="10" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">
              Nutrición
            </h3>
            <p className="text-sm text-[--soft]/80">
              Alimentación saludable y equilibrada
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-24 rounded-3xl border border-[--line]/50 bg-gradient-to-b from-[--salvia]/10 to-[--naranja]/10 p-8 text-center md:mt-32 md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[--ink] md:text-4xl">
            ¡Comienza tu camino hoy!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[--soft]">
            Agenda tu primera consulta y descubre cómo nuestro equipo puede
            ayudarte a alcanzar tu bienestar integral.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/reservar"
              className="btn bg-[--salvia] text-[--lino] transition-colors hover:bg-[--salvia]/90"
            >
              Reserva tu cita
            </Link>
            <Link
              to="/quienes-somos"
              className="btn btn-alt transition-colors hover:bg-transparent"
            >
              Conoce más
            </Link>
          </div>
        </section>
      </div>
    </section>
  </div>
);
}