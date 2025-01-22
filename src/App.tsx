import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Room8Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          {/* Logo */}
          <div className="relative w-full max-w-[300px] transition-all duration-700 hover:scale-105">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital%20(3)-oAIhNPDwL1SL3EonDF0YnGx6OtgJah.png"
              alt="BrightSide Developer Logo"
              className="w-full"
            />
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-6xl lg:text-7xl">
            Illuminate Your Digital Future
          </h1>

          {/* Subheading */}
          <p className="max-w-[600px] text-lg text-zinc-400 sm:text-xl">
            Crafting exceptional digital experiences with precision, innovation, and a touch of brilliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="group bg-yellow-500 text-black hover:bg-yellow-400">
              Get Started
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="border-t border-yellow-500/10">
        <div className="container mx-auto px-4 py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="group rounded-lg border border-yellow-500/10 p-6 transition-colors hover:border-yellow-500/30">
                <h3 className="mb-3 text-xl font-semibold text-yellow-500">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Modern Development',
    description: 'Utilizing cutting-edge technologies and frameworks to build robust, scalable applications.',
  },
  {
    title: 'Creative Solutions',
    description: 'Transforming complex challenges into elegant, efficient solutions with innovative thinking.',
  },
  {
    title: 'Quality Assurance',
    description: 'Ensuring exceptional performance and reliability through rigorous testing and optimization.',
  },
  {
    title: 'Responsive Design',
    description: 'Creating seamless experiences across all devices with mobile-first approach.',
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, documented code that follows best practices and industry standards.',
  },
  {
    title: '24/7 Support',
    description: 'Providing round-the-clock assistance and maintenance for your digital solutions.',
  },
]
