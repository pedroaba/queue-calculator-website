'use client'

import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

interface MotionDivProps extends ComponentProps<typeof motion.div> {}

export function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props} />
}
