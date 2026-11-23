import type { RequestListener } from 'node:http'

export function createContactApp(env: Record<string, string | undefined>): RequestListener
