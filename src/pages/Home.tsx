import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, Palette, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Educational Worksheets',
      description: 'Engaging worksheets designed to make learning fun and interactive for all ages.',
      color: 'text-green-400'
    },
    {
      icon: Palette,
      title: 'Creative Coloring Sheets',
      description: 'Beautiful coloring pages that spark creativity and provide hours of entertainment.',
      color: 'text-purple-400'
    },
    {
      icon: Download,
      title: 'Instant Downloads',
      description: 'Get immediate access to all resources with easy-to-download PDF formats.',
      color: 'text-green-400'
    },
    {
      icon: Calendar,
      title: 'Play & Craft Dates',
      description: 'Join our scheduled play and craft sessions for hands-on learning experiences.',
      color: 'text-purple-400'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The worksheets are amazing! My kids love them and I can see real improvement in their learning.',
      rating: 5
    },
    {
      name: 'Mike D.',
      text: 'Great resources for homeschooling. The variety and quality are outstanding.',
      rating: 5
    },
    {
      name: 'Lisa K.',
      text: 'The craft dates are so much fun! My daughter looks forward to them every week.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-display">
                Make Learning
                <span className="block bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                  Creative & Fun
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover engaging worksheets, coloring sheets, and online classes designed to inspire young minds and make education an adventure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Link to="/class-content">
                  Explore Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-200 hover:scale-105"
              >
                <Link to="/scheduling">
                  Schedule a Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to make learning engaging and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-green-400 font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community and give your child the gift of creative education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Creative Learning Hub. Made with ❤️ for young learners.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Vibed with <a href="https://soapbox.pub/mkstack" className="text-purple-400 hover:text-purple-300 transition-colors">MKStack</a>
          </p>
        </div>
      </footer>
    </div>
  );
}