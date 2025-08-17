
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Star, ArrowRight } from 'lucide-react';

export function Scheduling() {

  const upcomingSessions = [
    {
      id: 1,
      title: 'Creative Art & Craft Session',
      date: '2024-08-25',
      time: '10:00 AM - 12:00 PM',
      spots: 8,
      maxSpots: 12,
      age: '5-10 years',
      type: 'Craft',
      description: 'Join us for a fun-filled morning of painting, drawing, and creative crafts!',
      materials: 'All materials provided',
      price: '$25'
    },
    {
      id: 2,
      title: 'Science Discovery Play Date',
      date: '2024-08-28',
      time: '2:00 PM - 4:00 PM',
      spots: 5,
      maxSpots: 10,
      age: '6-12 years',
      type: 'Science',
      description: 'Explore the wonders of science through hands-on experiments and discovery games.',
      materials: 'Safety goggles provided',
      price: '$30'
    },
    {
      id: 3,
      title: 'Storytelling & Drama Workshop',
      date: '2024-09-02',
      time: '11:00 AM - 1:00 PM',
      spots: 10,
      maxSpots: 15,
      age: '4-8 years',
      type: 'Drama',
      description: 'Bring stories to life through creative storytelling and fun dramatic activities.',
      materials: 'Costume props included',
      price: '$20'
    },
    {
      id: 4,
      title: 'Nature Exploration Adventure',
      date: '2024-09-05',
      time: '9:00 AM - 11:30 AM',
      spots: 12,
      maxSpots: 16,
      age: '5-11 years',
      type: 'Nature',
      description: 'Discover the outdoors with nature scavenger hunts and outdoor learning activities.',
      materials: 'Weather-appropriate clothing recommended',
      price: '$28'
    }
  ];

  const sessionTypes = [
    { type: 'Craft', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { type: 'Science', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    { type: 'Drama', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { type: 'Nature', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' }
  ];

  const getTypeColor = (type: string) => {
    return sessionTypes.find(t => t.type === type)?.color || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getAvailabilityColor = (spots: number, maxSpots: number) => {
    const percentage = (spots / maxSpots) * 100;
    if (percentage >= 80) return 'text-red-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Play & Craft
            <span className="block bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Date Scheduling
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our interactive play and craft sessions designed to inspire creativity, learning, and fun!
            Book your spot in our upcoming sessions.
          </p>
        </div>

        {/* Session Types Legend */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Session Types</h3>
          <div className="flex flex-wrap gap-3">
            {sessionTypes.map((type) => (
              <Badge
                key={type.type}
                variant="outline"
                className={`${type.color} border transition-all duration-200 hover:scale-105`}
              >
                {type.type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Sessions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingSessions.map((session, index) => (
              <Card
                key={session.id}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl group-hover:text-green-400 transition-colors duration-200">
                      {session.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`${getTypeColor(session.type)} border transition-all duration-200`}
                    >
                      {session.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {session.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Date and Time */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2 text-green-400">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(session.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-purple-400">
                    <Clock className="h-4 w-4" />
                    <span>{session.time}</span>
                  </div>

                  {/* Availability and Age */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className={getAvailabilityColor(session.spots, session.maxSpots)}>
                        {session.spots}/{session.maxSpots} spots filled
                      </span>
                    </div>
                    <span className="text-gray-400">Ages {session.age}</span>
                  </div>

                  {/* Materials and Price */}
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{session.materials}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold text-lg">{session.price}</span>
                      <Button
                        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-200 hover:scale-105"
                        disabled={session.spots >= session.maxSpots}
                      >
                        {session.spots >= session.maxSpots ? 'Full' : 'Book Now'}
                        {session.spots < session.maxSpots && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <Card className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border-gray-600">
          <CardHeader>
            <CardTitle className="text-white text-xl">Booking Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">What to Expect</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Interactive, hands-on learning activities</li>
                  <li>• Age-appropriate content and materials</li>
                  <li>• Small group sizes for personalized attention</li>
                  <li>• Safe, supervised environment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Booking Policy</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Payment required to secure spot</li>
                  <li>• 24-hour cancellation policy</li>
                  <li>• Makeup sessions available for illness</li>
                  <li>• Parent/guardian supervision required for ages 4-5</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-600">
              <p className="text-center text-gray-400">
                Questions about scheduling? <span className="text-green-400 hover:text-green-300 cursor-pointer transition-colors">Contact us</span> for more information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}