import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Events - Ubuntu Afya',
  description: 'Join Ubuntu Afya\'s upcoming events, conferences, training sessions, and community health programs. Stay connected with our healthcare transformation journey.',
};

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Fair 2024',
      description: 'Join us for our annual community health fair featuring free health screenings, vaccinations, and health education sessions.',
      date: '2024-03-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Kisumu County Grounds',
      type: 'Community Event',
      attendees: '2,000+ expected',
      status: 'Upcoming',
      registration: true,
      image: '/images/events/health-fair-2024.jpg'
    },
    {
      id: 2,
      title: 'STONE-HMIS® Training Workshop',
      description: 'Comprehensive training session for healthcare workers on using our digital health management system.',
      date: '2024-03-22',
      time: '8:00 AM - 5:00 PM',
      location: 'Nairobi Training Center',
      type: 'Training',
      attendees: '50 participants',
      status: 'Upcoming',
      registration: true,
      image: '/images/events/stone-hmis-training.jpg'
    },
    {
      id: 3,
      title: 'Maternal Health Conference',
      description: 'Annual conference bringing together healthcare professionals to discuss maternal and child health best practices.',
      date: '2024-04-10',
      time: '8:30 AM - 6:00 PM',
      location: 'Kenyatta International Conference Centre',
      type: 'Conference',
      attendees: '300+ delegates',
      status: 'Upcoming',
      registration: true,
      image: '/images/events/maternal-health-conference.jpg'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Digital Health Innovation Summit',
      description: 'Exploring the future of digital health in Kenya and showcasing innovative healthcare technologies.',
      date: '2024-01-20',
      location: 'Nairobi',
      type: 'Summit',
      attendees: '250+ participants',
      status: 'Completed',
      highlights: 'Keynote by Dr. Moses Ndiritu on STONE-HMIS® impact'
    },
    {
      id: 5,
      title: 'Community Health Worker Graduation',
      description: 'Celebrating the graduation of 75 community health workers from our comprehensive training program.',
      date: '2024-01-15',
      location: 'Mombasa',
      type: 'Graduation',
      attendees: '200+ guests',
      status: 'Completed',
      highlights: 'All graduates received Ministry of Health certification'
    },
    {
      id: 6,
      title: 'Research Symposium 2024',
      description: 'Presenting latest research findings on community health interventions and digital health implementation.',
      date: '2024-01-08',
      location: 'University of Nairobi',
      type: 'Research',
      attendees: '150+ researchers',
      status: 'Completed',
      highlights: '5 research papers presented, 3 published in peer-reviewed journals'
    }
  ];

  const eventTypes = [
    {
      icon: Users,
      title: 'Community Events',
      description: 'Health fairs, awareness campaigns, and community engagement activities',
      count: '12 events annually'
    },
    {
      icon: Calendar,
      title: 'Training Programs',
      description: 'Professional development workshops and certification programs',
      count: '24 training sessions'
    },
    {
      icon: ExternalLink,
      title: 'Conferences',
      description: 'Annual conferences and summits on healthcare innovation',
      count: '4 major conferences'
    },
    {
      icon: MapPin,
      title: 'Field Visits',
      description: 'Site visits to Ubuntu-Afya kiosks and community health programs',
      count: 'Monthly visits'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Events"
            subtitle="Join our upcoming events, conferences, training sessions, and community health programs as we continue transforming healthcare delivery"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/hero-healthcare-3.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Events Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Connecting Communities Through Events
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our events bring together healthcare professionals, community members, and partners 
                to share knowledge, celebrate achievements, and drive innovation in healthcare delivery. 
                Join us in building a healthier Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Types of Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We organize various types of events to engage different audiences and achieve our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((type, index) => {
                const IconComponent = type.icon as any;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-ubuntu-blue" />
                      </div>
                      <CardTitle className="text-xl text-ubuntu-blue">{type.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-ubuntu-orange text-white">{type.count}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't miss our upcoming events. Register now to secure your spot and be part of our healthcare transformation journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ubuntu-orange text-white">{event.type}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees}
                      </div>
                    </div>

                    {event.registration && (
                      <button className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        Register Now
                      </button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Recent Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Highlights from our recent events and the impact they've made in our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {event.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{event.type}</span>
                    </div>
                    <CardTitle className="text-lg text-ubuntu-blue line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees}
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-700">
                        <strong>Highlight:</strong> {event.highlights}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Event Calendar</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay updated with all our upcoming events. Subscribe to our calendar to never miss an important event.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-ubuntu-blue text-center">March 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center font-semibold text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <div key={day} className={`text-center py-2 rounded ${
                        day === 15 ? 'bg-ubuntu-orange text-white font-bold' : 
                        day === 22 ? 'bg-ubuntu-blue text-white font-bold' :
                        'hover:bg-gray-100'
                      }`}>
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-ubuntu-orange rounded mr-3"></div>
                      <span className="text-sm">March 15 - Community Health Fair</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-ubuntu-blue rounded mr-3"></div>
                      <span className="text-sm">March 22 - STONE-HMIS® Training</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Stay Updated on Events
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Subscribe to our newsletter to receive updates about upcoming events, registration deadlines, 
                and event highlights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-ubuntu-orange focus:ring-2 focus:ring-ubuntu-orange/20 focus:outline-none"
                />
                <button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
