import { env } from '@queue/env'
import { AppOptions, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

const firebaseConfig: AppOptions = {
  credential: cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: Buffer.from(
      env.FIREBASE_PRIVATE_KEY_BASE64,
      'base64',
    ).toString(),
  }),
}

export const getFirebaseApps = () => {
  try {
    const existingApps = getApps()

    let app: ReturnType<typeof initializeApp>

    if (existingApps.length > 0) {
      app = existingApps[0]
    } else {
      app = initializeApp(firebaseConfig)
    }

    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const storage = getStorage(app)

    return { app, auth, firestore, storage }
  } catch (error) {
    return null
  }
}
