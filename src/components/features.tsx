import { Card, CardContent } from '@queue/components/ui/card'
import { BarChart3, Calculator, FileText, Users } from 'lucide-react'

import { MotionDiv } from './motion/div'

const features = [
  {
    icon: Calculator,
    title: 'Multiple Queue Models',
    description:
      'Simulate main queueing models including M/M/1, M/M/c, M/M/1/K, and more advanced configurations.',
  },
  {
    icon: BarChart3,
    title: 'Essential Metrics',
    description:
      'Calculate waiting time, utilization rates, customers in system, and other critical performance indicators.',
  },
  {
    icon: Users,
    title: 'Intuitive Interface',
    description:
      'User-friendly design that makes complex queueing theory accessible to professionals at all levels.',
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description:
      'Generate comprehensive reports for comparative analysis and process optimization insights.',
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Streamline your operations with powerful queueing analysis tools
            designed for modern businesses.
          </p>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <MotionDiv key={index} variants={itemVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
