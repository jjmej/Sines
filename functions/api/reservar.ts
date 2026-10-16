import { AREAS, HORAS } from './_supabase'

type Env = {
  WEB1_API_URL: string
  WEB1_API_SECRET: string
}

/** POST /api/reservar · valida los datos y reenvía la solicitud a Web1. */
export async function onRequestPost(context: { request: Request; env: Env }) {
  const { env } = context

  if (!env.WEB1_API_URL || !env.WEB1_API_SECRET) {
    console.error('Configuración Web1:', {
      WEB1_API_URL: !!env.WEB1_API_URL,
      WEB1_API_SECRET: !!env.WEB1_API_SECRET,
    })
    return Response.json(
      { error: 'Configuración de conexión con Web1 incompleta.' },
      { status: 500 },
    )
  }

  const b = (await context.request.json().catch(() => ({}))) as Record<string, unknown>

  // Honeypot antispam
  if (b.web) return Response.json({ ok: true })

  const s = (value: unknown, max: number): string =>
    typeof value === 'string' ? value.trim().slice(0, max) : ''

  const area = s(b.area, 20)
  const paciente = s(b.paciente, 6)
  const fecha = s(b.fecha, 10)
  const hora = s(b.hora, 5)
  const nombre = s(b.nombre, 120)
  const telefono = s(b.telefono, 30)
  const email = s(b.email, 160)
  const notas = s(b.notas, 500)

  const edad: number | null =
    b.edad === undefined || b.edad === null || b.edad === '' ? null : Number(b.edad)

  const dia = new Date(`${fecha}T12:00:00`)

  const manana = new Date()
  manana.setHours(0, 0, 0, 0)
  manana.setDate(manana.getDate() + 1)

  const error = !AREAS.includes(area)
    ? 'Área no válida.'
    : !['adulto', 'nino'].includes(paciente)
      ? 'Tipo de paciente no válido.'
      : paciente === 'nino' &&
          !(typeof edad === 'number' && Number.isInteger(edad) && edad >= 0 && edad <= 17)
        ? 'Edad no válida.'
        : !/^\d{4}-\d{2}-\d{2}$/.test(fecha) ||
            isNaN(dia.getTime()) ||
            dia < manana ||
            dia.getDay() % 6 === 0
          ? 'Elige un día laborable a partir de mañana.'
          : !HORAS.includes(hora)
            ? 'Hora no válida.'
            : nombre.length < 3
              ? 'Escribe tu nombre.'
              : telefono.replace(/\D/g, '').length < 9
                ? 'Teléfono no válido.'
                : !/^\S+@\S+\.\S+$/.test(email)
                  ? 'Correo no válido.'
                  : ''

  if (error) return Response.json({ error }, { status: 400 })

  const reservation = {
    area,
    paciente,
    edad: paciente === 'nino' ? edad : null,
    fecha,
    hora,
    nombre,
    telefono,
    email,
    notas: notas || null,
  }

  try {
    const response = await fetch(
      `${env.WEB1_API_URL.replace(/\/$/, '')}/api/public-reservation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-web2-secret': env.WEB1_API_SECRET,
        },
        body: JSON.stringify(reservation),
      },
    )

    const result = (await response.json().catch(() => ({}))) as { id?: string; error?: string }

    if (!response.ok) {
      console.error('Web1 respondió con error:', response.status, result)
      return Response.json(
        { error: result.error || 'No hemos podido guardar la solicitud.' },
        { status: response.status },
      )
    }

    return Response.json({ ok: true, id: result.id }, { status: 201 })
  } catch (error) {
    console.error('Error conectando con Web1:', error)
    return Response.json(
      { error: 'No hemos podido conectar con el sistema de reservas. Inténtalo de nuevo.' },
      { status: 502 },
    )
  }
}
