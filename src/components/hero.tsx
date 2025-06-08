import Logo from '@queue/assets/icon.png'
import { Button } from '@queue/components/ui/button'
import { Github } from 'lucide-react'
import Image from 'next/image'

import { AppInfo } from './app-info'
import { DownloadButton } from './download-button'
import { MotionDiv } from './motion/div'
import { MotionH1 } from './motion/h1'
import { MotionP } from './motion/p'

export async function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="size-24 overflow-hidden mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            {/* bg-gradient-to-br from-cyan-400 to-blue-500 */}
            <Image
              src={Logo}
              alt="Queue Optimization Calculator Logo"
              width={128}
              height={128}
            />
          </div>
        </MotionDiv>

        <MotionH1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Queue Optimization{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Calculator
          </span>
        </MotionH1>

        <MotionP
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          A powerful desktop application built with Electron, React, and
          TypeScript for simulating and optimizing queueing systems. Perfect for
          professionals in call centers, customer service, and operations.
        </MotionP>

        <AppInfo />

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <DownloadButton />

          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://github.com/pedroaba/queue-optimization-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 size-5" />
              View on GitHub
            </a>
          </Button>
        </MotionDiv>
      </div>
    </section>
  )
}
