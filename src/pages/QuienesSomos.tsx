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
    color: "bg-[--salvia]",
    descripcion: "Creamos un espacio seguro donde puedes ser auténtico",
  },
  {
    nombre: "Escucha Activa",
    color: "bg-[--azul]",
    descripcion: "Te escuchamos sin prejuicios para entender tus necesidades",
  },
  {
    nombre: "Acompañamiento",
    color: "bg-[--verde]",
    descripcion: "Cada paso del camino, te acompañamos con dedicación",
  },
  {
    nombre: "Excelencia",
    color: "bg-[--naranja]",
    descripcion: "Nos comprometemos con los más altos estándares de calidad",
  },
];

export default function QuienesSomos() {
  useTitle("Quiénes somos - Sinestesya");

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
            {AREAS.map((area) => {
              const Icono = ICONOS[area.slug];
              return (
                <div
                  key={area.slug}
                  className="flex cursor-pointer flex-col items-center gap-2 rounded-xl p-4 transition-colors hover:bg-[--panel]"
                >
                  {Icono && (
                    <div className={`flex items-center justify-center rounded-full p-3 transition-transform hover:scale-110 ${area.soft}`}>
                      <Icono size={32} strokeWidth={1.5} aria-hidden="true" className="text-[--ink]" />
                    </div>
                  )}
                  <p className="text-xs font-medium text-[--soft]">{area.nombre}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Misión */}
            <div className="group rounded-2xl border-l-4 border-[--ink] bg-[--panel] p-6 transition-colors hover:border-[--salvia] md:p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--salvia] md:text-3xl">
                Nuestra Misión
              </h2>
              <p className="mb-6 leading-relaxed text-[--soft]">
                Ofrecer una atención integral que una psicología, logopedia, fisioterapia y nutrición en un solo lugar, facilitando un enfoque holístico del bienestar para adultos y niños.
              </p>
              <ul className="space-y-2 text-[--soft]/90">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--salvia]" />
                  Atención integral en un solo espacio
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--azul]" />
                  Enfoque holístico y personalizado
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--verde]" />
                  Adaptado a cada etapa de la vida
                </li>
              </ul>
            </div>

            {/* Visión */}
            <div className="group rounded-2xl border-l-4 border-[--azul] bg-[--panel] p-6 transition-colors hover:border-[--azul]/80 md:p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--azul] md:text-3xl">
                Nuestra Visión
              </h2>
              <p className="mb-6 leading-relaxed text-[--soft]">
                Ser el referente en La Puebla de Alfindén de atención multidisciplinar cercana, profesional y de calidad, donde mente, cuerpo y lenguaje trabajan en armonía.
              </p>
              <ul className="space-y-2 text-[--soft]/90">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--salvia]" />
                  Referente regional en bienestar integrado
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--verde]" />
                  Mente y cuerpo en armonía
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-3 w-3 shrink-0 rounded-full bg-[--naranja]" />
                  Acceso universal a calidad
                </li>
              </ul>
            </div>

            {/* Valores */}
            <div className="lg:col-span-2 rounded-2xl border-l-4 border-[--salvia] bg-[--panel] p-6 md:p-8">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-[--ink] md:text-3xl">
                  Nuestros Valores
                </h2>
                <p className="mt-2 text-[--soft]">
                  Los pilares que guían cada interacción y decisión en nuestro centro
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {VALORES.map((valor) => {
                  return (
                    <div
                      key={valor.nombre}
                      className="group rounded-xl border border-[--line] bg-gradient-to-br from-[--bg] to-transparent p-5 transition-all duration-300 hover:border-[--salvia]/50 hover:shadow-lg hover:shadow-[--salvia]/10"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className={`rounded-lg ${valor.color} p-3 transition-transform group-hover:scale-110`} />
                        <h3 className="font-semibold text-[--ink] transition-colors group-hover:text-[--salvia]">
                          {valor.nombre}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[--soft] transition-colors group-hover:text-[--soft]/95">
                        {valor.descripcion}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sección adicional: Por qué elegirnos */}
          <div className="mt-16 rounded-2xl border border-[--line] bg-gradient-to-r from-[--salvia]/5 to-[--azul]/5 p-8 md:p-12">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[--ink] md:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-block rounded-full bg-[--salvia]/10 p-4">
                  <Brain size={32} strokeWidth={1.5} className="text-[--salvia]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Equipo Multidisciplinario</h3>
                <p className="text-sm text-[--soft]">
                  Profesionales especializados que trabajan coordinadamente por tu bienestar integral
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-block rounded-full bg-[--azul]/10 p-4">
                  <Speech size={32} strokeWidth={1.5} className="text-[--azul]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Enfoque Personalizado</h3>
                <p className="text-sm text-[--soft]">
                  Cada plan de tratamiento se adapta a tus necesidades específicas y objetivos
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-block rounded-full bg-[--verde]/10 p-4">
                  <PersonStanding size={32} strokeWidth={1.5} className="text-[--verde]" />
                </div>
                <h3 className="mb-2 font-semibold text-[--ink]">Resultados Comprobados</h3>
                <p className="text-sm text-[--soft]">
                  Metodologías basadas en evidencia científica que generan cambios reales
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-2xl border-l-4 border-[--line] bg-[--panel] p-6 text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: `var(${color})20` }}
                >
                  <Icono size={32} strokeWidth={1.5} aria-hidden="true" style={{ color: `var(${color})` }} />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">{nombre}</h3>
                <p className="text-sm text-[--soft]/80">{descripcion}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-24 rounded-3xl border border-[--line]/50 bg-gradient-to-b from-[--salvia]/10 to-[--naranja]/10 p-8 text-center md:mt-32 md:p-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-[--ink] md:text-4xl">
              ¡Comienza tu camino hoy!
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[--soft]">
              Agenda tu primera consulta y descubre cómo nuestro equipo puede ayudarte a alcanzar tu bienestar integral.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/reservar"
                className="rounded-lg bg-[--salvia] px-6 py-3 font-semibold text-[--lino] transition-colors hover:bg-[--salvia]/90"
              >
                Reserva tu cita
              </Link>
              <Link
                to="/quienes-somos"
                className="rounded-lg border border-[--salvia] px-6 py-3 font-semibold text-[--salvia] transition-colors hover:bg-[--salvia]/10"
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
