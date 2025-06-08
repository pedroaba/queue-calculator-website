import { getFirebaseApps } from '@queue/lib/firebase'
import { firestore } from 'firebase-admin'

import { MotionDiv } from './motion/div'

let currentVersion = 'v1.0.14'
let lastPublishDate = new Date().toLocaleString('en-US', {
  dateStyle: 'full',
  timeStyle: 'medium',
})

export async function AppInfo() {
  const apps = await getFirebaseApps()
  if (apps) {
    const { firestore } = apps

    const links = await firestore.collection('links').get()
    const lastUpdate = links.docs.at(-1)

    if (lastUpdate) {
      currentVersion = lastUpdate.id

      const linkData = lastUpdate.data()
      if (linkData) {
        const { createdAt } = linkData as { createdAt: firestore.Timestamp }

        lastPublishDate = createdAt.toDate().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'medium',
        })
      }
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mb-8"
    >
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
        Current Version:{' '}
        <span className="ml-2 text-cyan-400 font-semibold">
          {currentVersion}
        </span>
      </span>
      <div className="text-slate-400 text-sm mt-2">
        Last updated: {lastPublishDate}
      </div>
    </MotionDiv>
  )
}
