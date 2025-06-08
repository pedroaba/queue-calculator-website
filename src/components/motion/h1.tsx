'use client'

import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

interface MotionH1Props extends ComponentProps<typeof motion.h1> {}

export function MotionH1(props: MotionH1Props) {
  return <motion.h1 {...props} />
}
