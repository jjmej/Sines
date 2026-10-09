import { Link } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export default function QuienesSomos() {
  useTitle('Quiénes somos - Sinestesya')
  return (
    <div className="wrap">
      <section className="mt-10">
        <h2 className="text-3xl font-serif font-normal mb-6">Sinestesya: un centro de bienestar integrado</h2>
        <p className="text-soft mb-8">
          Sinestesya es un centro que reúne diferentes disciplinas relacionadas con la salud y el bienestar, ofreciendo una atención integral para quienes buscan cuidar su salud mental, emocional y física en un solo lugar.
        </p>
      </section>

      <section className="mt-20 bg-panel p-8 rounded-[28px] mb-12">
        <h3 className="text-2xl font-serif font-normal mb-4">Nuestra forma de trabajar</h3>
        <p className="text-soft mb-4">
          Apoyamos a cada persona con atención cercana, personalizada y profesional. Adaptamos nuestros servicios a las necesidades únicas de cada individuo, creando un plan a medida que evoluciona con el tiempo.
        </p>
        <p className="text-soft">
          Creemos que el bienestar se construye con confianza y escucha activa, acompañando en cada paso del proceso terapéutico o de recuperación.
        </p>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-serif font-normal mb-4">Un enfoque multidisciplinar</h3>
        <p className="text-soft mb-4">
          En Sinestesya reunimos psicología, logopedia, fisioterapia y nutrición. Esta integración permite abordar la salud desde una perspectiva holística, coordinando diferentes especialidades para ofrecer un plan global y coherente.
        </p>
        <p className="text-soft">
          Que mente, voz, cuerpo y alimento trabajen en conjunto facilita una recuperación más completa y duradera, evitando que los tratamientos trabajen de forma aislada.
        </p>
      </section>

      <section className="mt-20 bg-panel p-8 rounded-[28px]">
        <h3 className="text-2xl font-serif font-normal mb-4">Nuestro compromiso</h3>
        <ul className="list-disc list-inside text-soft space-y-2">
          <li>Confianza: un entorno seguro y respetuoso para abrirte y crecer.</li>
          <li>Escucha: dedicar el tiempo necesario para entender tu historia y tus necesidades.</li>
          <li>Acompañamiento: estar junto a ti durante todo el proceso, no solo en la primera sesión.</li>
          <li>Atención de calidad: profesionales cualificados y en constante formación.</li>
        </ul>
      </section>

      <section id="contacto" className="mt-20">
        <h3 className="text-2xl font-serif font-normal mb-4">Dónde estamos</h3>
        <p className="text-soft mb-4">
          Calle Fuertes, 1<br />
          50171 La Puebla de Alfindén (Zaragoza)
        </p>
        <p className="text-soft">
          Puedes encontrarnos en La Puebla de Alfindén, a las afueras de Zaragoza, en un espacio diseñado para ofrecer tranquilidad y comodidad desde el momento en que llegues.
        </p>
      </section>
    </div>
  )