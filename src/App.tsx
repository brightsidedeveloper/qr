import { useEffect, useState } from 'react'
import { Moon, Sun, DollarSign, Calendar, Users, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Themer } from '@brightsidedevelopers/themer'

export default function Room8Landing() {
  const [isDarkMode, setIsDarkMode] = useState(Themer.getLocalTheme() ? Themer.getLocalTheme() === 'dark' : Themer.getSystemPrefersDark())

  useEffect(() => {
    return Themer.mediaThemeEventListener((theme) => setIsDarkMode(theme ? theme === 'dark' : Themer.getSystemPrefersDark()))
  }, [])
  useEffect(() => {
    return Themer.storageThemeEventListener((theme) => setIsDarkMode(theme ? theme === 'dark' : Themer.getSystemPrefersDark()))
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <img src={isDarkMode ? '/logo-dark.png' : '/logo-light.png'} className="w-32" alt="Room 8" />
        <div className="flex items-center space-x-2">
          <Sun className="h-5 w-5" />
          <Switch
            checked={isDarkMode}
            onCheckedChange={(next) => {
              Themer.setTheme(next ? 'dark' : 'light')
              setIsDarkMode(next)
            }}
          />
          <Moon className="h-5 w-5" />
        </div>
      </header>

      <main className="container mx-auto px-4 space-y-20 pb-20">
        <section className="text-center space-y-6 pt-20">
          <h2 className="text-5xl font-bold">Split Bills, Not Friendships</h2>
          <p className="text-xl text-muted-foreground">Room 8 makes shared living expenses a breeze</p>
          <Button size="lg" onClick={() => window.open('https://apps.apple.com/us/app/room-8/id6737010491', '_blank')}>
            Download Room 8 on iPhone
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-10">
            <img src={'/myimage.png'} className="max-w-[32rem] mx-auto w-full rounded-lg border" alt="Room 8" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {[
            { icon: DollarSign, title: 'Easy Splitting', description: 'Automatic splitting with custom options' },
            { icon: Calendar, title: 'Recurring Tickets', description: 'Set it and forget it for regular expenses' },
            { icon: Users, title: 'Keep Everyone Accountable', description: 'One-tap payments and tracking' },
          ].map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-8 rounded-lg bg-card">
              <feature.icon className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-center">How Room 8 Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Post a Ticket', description: 'Create a new expense with details and splits' },
              { step: 2, title: 'Notify Roommates', description: 'Everyone gets notified about the new expense' },
              { step: 3, title: 'Easy Payments', description: 'Pay with one tap and track all transactions' },
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold bg-primary text-background">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Olivia',
                quote:
                  'Room 8 makes it so convenient and easy to remind roommates about payments without having to rely on their memory or your own. Once the bill is on the app its is a seamless way of splitting it within the house',
              },
              {
                name: 'Jake',
                quote: 'I love the recurring tickets feature. Set up once, and our rent is split automatically every month.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-lg bg-card">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Simplify Your Shared Living?</h2>
          <p className="text-xl text-muted-foreground">
            Become another happy roommate using <br className="md:hidden" />
            Room 8
          </p>
          <Button
            size="lg"
            className="bg-primary text-background"
            onClick={() => window.open('https://apps.apple.com/us/app/room-8/id6737010491', '_blank')}
          >
            Download Room 8 Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Room 8. All rights reserved.
      </footer>
    </div>
  )
}
