import { useSeoMeta } from '@unhead/react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, BookOpen, Users, Award, Lightbulb } from 'lucide-react';

export function About() {
  useSeoMeta({
    title: 'About Me - Creative Learning Hub',
    description: 'Learn about my passion for education and how I create engaging learning experiences for children.',
  });

  const qualifications = [
    {
      title: 'Bachelor of Education',
      institution: 'University of Education',
      year: '2018',
      description: 'Specialized in Elementary Education with focus on creative learning methods'
    },
    {
      title: 'Child Development Certificate',
      institution: 'Child Development Institute',
      year: '2019',
      description: 'Advanced training in age-appropriate learning strategies'
    },
    {
      title: 'Art Therapy Certification',
      institution: 'Creative Arts Academy',
      year: '2020',
      description: 'Combining art and learning for therapeutic educational experiences'
    }
  ];

  const specialties = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Creating worksheets that engage multiple learning styles and keep children excited about education.',
      color: 'text-green-400'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'Teaching children to think outside the box and approach challenges with creativity and confidence.',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Social Learning',
      description: 'Facilitating group activities and play dates that build social skills while learning.',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Emotional Development',
      description: 'Supporting children\'s emotional growth through art, play, and meaningful conversations.',
      color: 'text-purple-400'
    }
  ];

  const achievements = [
    '500+ Happy Students',
    '1000+ Resources Created',
    '50+ Successful Workshops',
    '5 Years Teaching Experience'
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hi, I'm Sarah!
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate educator dedicated to making learning fun, creative, and accessible for every child.
            With over 5 years of experience in education, I believe that every child has unique potential waiting to be unlocked.
          </p>
        </div>

        {/* My Story Section */}
        <section className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">My Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  My journey in education began when I realized that traditional teaching methods weren't reaching every child.
                  I saw bright, curious minds struggling not because they couldn't learn, but because they weren't being taught
                  in a way that resonated with them.
                </p>
                <p>
                  This revelation led me to develop a more creative, hands-on approach to learning. I started creating colorful,
                  engaging worksheets and activities that turned learning into an adventure. The transformation I saw in my
                  students was incredible – suddenly, math wasn't scary, reading became exciting, and science felt like magic.
                </p>
                <p>
                  Today, I'm proud to share these resources with families everywhere, helping parents and educators create
                  positive learning experiences that children actually look forward to. Every worksheet, every coloring page,
                  and every activity is designed with love and backed by educational research.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Qualifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Education & Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <Card
                key={qual.title}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Award className="h-6 w-6 text-green-400" />
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      {qual.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{qual.title}</CardTitle>
                  <CardDescription className="text-green-400 font-medium">
                    {qual.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Specialties Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">My Teaching Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <Card
                  key={specialty.title}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`h-6 w-6 ${specialty.color}`} />
                      </div>
                      <CardTitle className="text-white">{specialty.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base">
                      {specialty.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement}
                className="bg-gradient-to-br from-green-500/10 to-purple-500/10 border-gray-700 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                    {achievement}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500/10 to-purple-500/10 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">My Teaching Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-300 italic">
                  "Every child is an artist, a scientist, and a storyteller. My job is to provide the tools and
                  environment where their natural curiosity can flourish."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Learn with Love</h3>
                    <p className="text-gray-300 text-sm">Creating a safe, nurturing environment where mistakes are learning opportunities.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Spark Curiosity</h3>
                    <p className="text-gray-300 text-sm">Encouraging questions and exploration to develop lifelong learners.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Build Community</h3>
                    <p className="text-gray-300 text-sm">Fostering connections between children, families, and learning.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}