import { Apple, Brain, PersonStanding, Speech } from "lucide-react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { AREAS } from "../services/areas";

const ICONOS = {
  psicologia: Brain,
  logopedia: Speech,
  fisioterapia: PersonStanding,
  nutricion: Apple,
};

const VALORES = [
  {
    nombre: "Confianza",
    descripcion:
      "Creamos un espacio seguro donde puedes ser auténtico y sentirte acompañado sin juicios.",
  },
  {
    nombre: "Escucha Activa",
    descripcion:
      "Te escuchamos sin prejuicios para entender tus necesidades y acompañarte en tu proceso.",
  },
  {
    nombre: "Acompañamiento",
    descripcion:
      "Cada paso del camino, te acompañamos con dedicación y profesionalismo.",
  },
  {
    nombre: "Excelencia",
    descripcion:
      "Nos comprometemos con los más altos estándares de calidad en cada servicio.",
  },
];

export default function QuienesSomos() {
  useTitle("Quiénes somos - Sinestesya");

  return (
    <div className="wrap">
      <section className="min-h-screen bg-[--bg] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center">
            <p className="inline-block rounded-full bg-[--line] px-4 py-2 text-xs font-medium uppercase tracking-wider mb-4 text-[--ink]">
              Centro de Bienestar Integrado
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.25] tracking-tight mb-4 text-[--ink] md:text-6xl lg:text-7xl">
              Sinestesya
            </h1>

            <p className="mx-auto text-lg leading-relaxed text-[--soft] max-w-3xl">
              Un espacio donde mente, voz, cuerpo y alimento encuentran equilibrio.
            </p>
          </div>

          {/* Discipline Logos Bar */}
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 justify-center">
            {AREAS.map((area) => {
              const Icono = ICONOS[area.slug];

              return (
                <div
                  key={area.slug}
                  className="flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-[--panel] cursor-pointer"
                >
                  {Icono && (
                    <div
                      className="flex items-center justify-center rounded-full p-2 transition-transform hover:scale-110"
                    >
                      <Icono size={28} strokeWidth={1.5} aria-hidden="true" className="text-[--ink]" />
                    </div>
                  )}
                  <p className="text-xs font-medium text-[--soft]">{area.nombre}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Misión */}
            <div className="group rounded-2xl bg-[--panel] p-5 md:p-6 transition-colors hover:border-[--salvia] border-2">
              <h2 className="font-serif text-2xl font-bold text-[--ink] mb-4 group-hover:text-[--salvia] transition-colors md:text-3xl">
                Nuestra Misión
              </h2>
              <p className="leading-relaxed text-[--soft]">
                Ofrecer una atención integral que una psicología, logopedia, fisioterapia y nutrición en un solo lugar,
                facilitando un enfoque holístico del bienestar para adultos y niños.
              </p>
            </div>

            {/* Visión */}
            <div className="group rounded-2xl bg-[--panel] p-5 md:p-6 transition-colors hover:border-[--azul]/80 border-2">
              <h2 className="font-serif text-2xl font-bold text-[--ink] mb-4 group-hover:text-[--azul] transition-colors md:text-3xl">
                Nuestra Visión
              </h2>
              <p className="leading-relaxed text-[--soft]">
                Ser el referente en La Puebla de Alfindén de atención multidisciplinar cercana,
                profesional y de calidad, donde mente, cuerpo y lenguaje trabajen en armonía.
              </p>
            </div>

            {/* Valores */}
            <div className="group rounded-2xl bg-[--panel] p-5 md:p-6 overflow-hidden">
              <h2 className="font-serif text-2xl font-bold text-[--ink] mb-6 md:text-3xl">
                Nuestros Valores
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {VALORES.map((valor) => (
                  <div
                    key={valor.nombre}
                    className="group rounded-lg border border-[--line] bg-gradient-to-br from-[--bg] to-transparent p-4 transition-all hover:border-[--salvia]/50 hover:shadow-lg hover:shadow-[--salvia]/10"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className={`rounded-full ${valor.nombre === "Confianza" ? "--salvia" : valor.nombre === "Escucha Activa" ? "--azul" : valor.nombre === "Acompañamiento" ? "--verde" : "--naranja"} p-2 transition-transform group-hover:scale-110`}>
                        &nbsp;
                      </div>
                      <h3 className="font-medium text-[--ink] group-hover:text-[--salvia] transition-colors">
                        {valor.nombre}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[--soft]/90">
                      {valor.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Por qué elegirnos */}
          <div className="mt-12 rounded-2xl border border-[--line] bg-[--bg] p-6 md:p-8">
            <h2 className="font-serif text-3xl font-bold text-[--ink] md:text-4xl mb-8 text-center">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 inline-block rounded-full bg-[--salvia]/10 p-3">
                  <Brain className="w-5 h-5 text-[--salvia]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Equipo Multidisciplinario</h3>
                <p className="text-sm text-[--soft]">
                  Profesionales especializados que trabajan coordinadamente por tu bienestar integral
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 inline-block rounded-full bg-[--azul]/10 p-3">
                  <Speech className="w-5 h-5 text-[--azul]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Enfoque Personalizado</h3>
                <p className="text-sm text-[--soft]">
                  Cada plan de tratamiento se adapta a tus necesidades y objetivos específicos
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 inline-rounded-full bg-[--verde]/10 p-3">
                  <PersonStanding className="w-5 h-5 text-[--verde]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Resultados Comprobados</h3>
                <p className="text-sm text-[--soft]">
                  Metodologías basadas en evidencia científica que generan cambios reales
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                nombre: "Psicología",
                descripcion: "Cuidado integral de la salud mental",
                Icono: Brain,
                color: "--naranja",
              },
              {
                nombre: "Logopedia",
                descripcion: "Evaluación y tratamiento del lenguaje",
                Icono: Speech,
                color: "--azul",
              },
              {
                nombre: "Fisioterapia",
                descripcion: "Recuperación y movimiento funcional",
                Icono: PersonStanding,
                color: "--verde",
              },
              {
                nombre: "Nutrición",
                descripcion: "Alimentación saludable y equilibrada",
                Icono: Apple,
                color: "--salvia",
              },
            ].map(({ nombre, descripcion, Icono, color }) => (
              <div
                key={nombre}
                className="group rounded-2xl bg-[--panel] p-5 transition-colors hover:border-[--line]/50"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `var(${color})20` }}>
                  <Icono size={24} strokeWidth={1.5} aria-hidden="true" style={{ color: `var(${color})` }} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[--ink] mb-2">
                  {nombre}
                </h3>
                <p className="text-sm text-[--soft]/80">{descripcion}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 rounded-3xl border border-[--line]/50 bg-gradient-to-b from-[--salvia]/5 to-[--naranja]/5 p-6 md:p-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-[--ink] mb-3 md:text-4xl">
              ¡Comienza tu camino hoy!
            </h2>
            <p className="mx-auto text-lg leading-relaxed text-[--soft] max-w-2xl">
              Agenda tu primera consulta y descubre cómo nuestro equipo puede ayudarte
              a alcanzar tu bienestar integral.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
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