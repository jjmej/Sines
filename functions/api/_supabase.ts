import { createClient } from '@supabase/supabase-js'

/** Variables de entorno de Cloudflare Pages (Settings > Environment variables). */
export type Env = {
  SUPABASE_URL: string
  SUPABASE_SECRET_KEY: string
}

/** Cliente con service role: solo existe en el servidor (Pages Functions), nunca en el navegador. */
export const admin = (env: Env) =>
  createClient(env.SUPABASE_URL, env.SUPABASE_SECRET_KEY, { auth: { persistSession: false } })

export const AREAS = ['psicologia', 'logopedia', 'fisioterapia', 'nutricion']

export const HORAS = ['9:00', '10:00', '11:00', '12:00', '16:00', '17:00', '18:00', '19:00']
