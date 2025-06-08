import Logo from '@queue/assets/icon.png'
import { Github } from 'lucide-react'
import Image from 'next/image'

import { MotionDiv } from './motion/div'

export function FooterSection() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="size-10 overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Image
                src={Logo}
                alt="Queue Optimization Calculator Logo"
                width={128}
                height={128}
              />
            </div>
            <div>
              <h3 className="text-white font-semibold">
                Queue Optimization Calculator
              </h3>
              <p className="text-slate-400 text-sm">
                Professional queueing analysis tool
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/pedroaba/queue-optimization-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400">
            © {new Date().getFullYear()} Queue Optimization Calculator. Built
            with React, TypeScript, and Electron.
          </p>
        </MotionDiv>
      </div>
    </footer>
  )
}
