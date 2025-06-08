'use client'

import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

interface MotionPProps extends ComponentProps<typeof motion.p> {}

export function MotionP(props: MotionPProps) {
  return <motion.p {...props} />
}
