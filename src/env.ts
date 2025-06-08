import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {},
  server: {
    FIREBASE_PRIVATE_KEY_BASE64: z.string(),
    FIREBASE_CLIENT_EMAIL: z.string(),
    FIREBASE_PROJECT_ID: z.string(),
  },
  runtimeEnv: {
    FIREBASE_PRIVATE_KEY_BASE64: process.env.FIREBASE_PRIVATE_KEY_BASE64,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  },
})
