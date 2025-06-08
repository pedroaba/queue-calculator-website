import CalculatorScreen from '@queue/assets/calculator-screen.png'
import ModelOverview from '@queue/assets/model-overview.png'
import ResultScreen from '@queue/assets/result-screen.png'
import { Card } from '@queue/components/ui/card'
import Image from 'next/image'

import { MotionDiv } from './motion/div'

export async function ScreenshotsSection() {
  const screenshots = [
    {
      id: 1,
      title: 'Queue Models Overview',
      description:
        'Explore different queueing models with our intuitive interface',
      image: ModelOverview,
    },
    {
      id: 2,
      title: 'Calculator Interface',
      description: 'Input parameters and get instant calculations',
      image: CalculatorScreen,
    },
    {
      id: 3,
      title: 'Results Dashboard',
      description: 'View comprehensive metrics and performance indicators',
      image: ResultScreen,
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the power and simplicity of our queue optimization tools
            through these screenshots.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <MotionDiv
              key={screenshot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 py-0 border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="scale-110 scale-y-[115%]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-slate-300">{screenshot.description}</p>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
