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
  { nombre: "Confianza", color: "bg-[--salvia]"},
  { nombre: "Escucha", color: "bg-[--azul]"},
  { nombre: "Acompañamiento", color: "bg-[--verde]"},
  { nombre: "Calidad", color: "bg-[--naranja]"},];

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
              Un espacio donde mente, voz, cuerpo y alimento encuentran
              equilibrio.
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
          /* Usa area.soft para un fondo suave o area.bg para color sólido */
          <div className={`flex items-center justify-center rounded-full p-3 transition-transform hover:scale-110 ${area.soft}`}>
            <Icono
              size={32}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-[--ink]"
            />
          </div>
        )}
        <p className="text-xs font-medium text-[--soft]">
          {area.nombre}
        </p>
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
                Ofrecer una atención integral que una psicología, logopedia,
                fisioterapia y nutrición en un solo lugar, facilitando un
                enfoque holístico del bienestar para adultos y niños.
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
                Ser el referente en La Puebla de Alfindén de atención
                multidisciplinar cercana, profesional y de calidad, donde
                mente, cuerpo y lenguaje trabajen en armonía.
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
            <div className="group rounded-2xl border-l-4 border-[--salvia] bg-[--panel] p-6 transition-colors hover:border-[--salvia]/80 md:p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[--ink] transition-colors group-hover:text-[--salvia] md:text-3xl">
                Nuestros Valores
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {VALORES.map((valor) => (
                  <div
                    key={valor.nombre}
                    className="flex items-start rounded-lg p-3 transition-colors hover:bg-[--line]/50"
                  >
                    <span
                      className={`mr-3 mt-1 h-3 w-3 shrink-0 rounded-full ${valor.color}`}
                    />
                    <div>
                      <p className="font-medium text-[--ink]">
                        {valor.nombre}
                      </p>
                      <p className="mt-0.5 text-xs text-[--soft]/80">
                        Principio rector de nuestra práctica
                      </p>
                    </div>
                  </div>
                ))}
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
                  <Icono
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    style={{ color: `var(${color})` }}
                  />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-[--ink]">
                  {nombre}
                </h3>
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
