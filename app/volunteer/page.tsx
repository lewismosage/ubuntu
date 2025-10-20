import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, Laptop, BookOpen, MapPin, Clock, CheckCircle, ArrowRight, Globe, Shield, Award } from 'lucide-react';

export const metadata = {
  title: 'Volunteer - Ubuntu Afya',
  description: 'Join Ubuntu Afya as a volunteer and make a difference in healthcare delivery across Kenya. Explore volunteer opportunities and apply today.',
};

export default function Volunteer() {
  const volunteerOpportunities = [
    {
      id: 1,
      title: 'Community Health Worker',
      description: 'Work directly with communities to provide health education, conduct screenings, and support healthcare delivery at Ubuntu-Afya kiosks.',
      location: 'Various locations across Kenya',
      duration: '6-12 months',
      commitment: 'Full-time',
      requirements: ['Health background preferred', 'Community engagement skills', 'Swahili language proficiency'],
      benefits: ['Training and certification', 'Stipend provided', 'Transportation allowance'],
      type: 'Field Work',
      status: 'Open',
      image: '/images/volunteer/community-health-worker.jpg'
    },
    {
      id: 2,
      title: 'Digital Health Specialist',
      description: 'Support the implementation and training of STONE-HMIS® system, provide technical assistance to healthcare facilities.',
      location: 'Nairobi and field locations',
      duration: '3-6 months',
      commitment: 'Part-time',
      requirements: ['IT/Computer Science background', 'Training experience', 'Healthcare knowledge preferred'],
      benefits: ['Technical training', 'Professional development', 'Networking opportunities'],
      type: 'Technical',
      status: 'Open',
      image: '/images/volunteer/digital-health-specialist.jpg'
    },
    {
      id: 3,
      title: 'Research Assistant',
      description: 'Support research activities, data collection, and analysis for evidence-based healthcare interventions and policy development.',
      location: 'Nairobi and research sites',
      duration: '4-8 months',
      commitment: 'Part-time',
      requirements: ['Research background', 'Data analysis skills', 'Academic writing'],
      benefits: ['Research experience', 'Publication opportunities', 'Academic mentorship'],
      type: 'Research',
      status: 'Open',
      image: '/images/volunteer/research-assistant.jpg'
    },
    {
      id: 4,
      title: 'Communications Volunteer',
      description: 'Support content creation, social media management, and community outreach to raise awareness about Ubuntu Afya\'s mission.',
      location: 'Remote/Nairobi',
      duration: '3-6 months',
      commitment: 'Part-time',
      requirements: ['Communication skills', 'Social media experience', 'Content creation'],
      benefits: ['Portfolio building', 'Creative freedom', 'Impact storytelling'],
      type: 'Communications',
      status: 'Open',
      image: '/images/volunteer/communications-volunteer.jpg'
    }
  ];

  const volunteerTypes = [
    {
      icon: Heart,
      title: 'Healthcare Volunteers',
      description: 'Medical professionals, nurses, and health workers supporting direct patient care',
      count: '50+ positions',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Laptop,
      title: 'Technical Volunteers',
      description: 'IT specialists, developers, and digital health experts supporting our technology initiatives',
      count: '20+ positions',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Research Volunteers',
      description: 'Researchers, data analysts, and academics contributing to evidence-based healthcare',
      count: '15+ positions',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Community Volunteers',
      description: 'Community organizers, educators, and advocates supporting grassroots healthcare initiatives',
      count: '100+ positions',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const volunteerBenefits = [
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Gain valuable experience in healthcare, research, and community development while building your professional network.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contribute to transforming healthcare delivery in Kenya and make a lasting difference in underserved communities.'
    },
    {
      icon: Shield,
      title: 'Training & Support',
      description: 'Receive comprehensive training, ongoing mentorship, and all necessary resources to succeed in your role.'
    },
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Be part of a mission-driven organization that values community ownership and sustainable healthcare solutions.'
    }
  ];

  const volunteerStories = [
    {
      name: 'Dr. Sarah Mwangi',
      role: 'Community Health Worker Volunteer',
      location: 'Kisumu County',
      duration: '8 months',
      quote: 'Volunteering with Ubuntu Afya has been transformative. I\'ve seen firsthand how community ownership can revolutionize healthcare delivery.',
      image: '/images/volunteer/sarah-mwangi.jpg'
    },
    {
      name: 'James Ochieng',
      role: 'Digital Health Specialist',
      location: 'Nairobi',
      duration: '6 months',
      quote: 'Training healthcare workers on STONE-HMIS® has been incredibly rewarding. The impact on patient care is immediate and measurable.',
      image: '/images/volunteer/james-ochieng.jpg'
    },
    {
      name: 'Grace Akinyi',
      role: 'Research Assistant',
      location: 'Mombasa',
      duration: '10 months',
      quote: 'The research opportunities here are unparalleled. I\'ve contributed to studies that directly inform healthcare policy in Kenya.',
      image: '/images/volunteer/grace-akinyi.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Volunteer with Ubuntu Afya"
            subtitle="Join our mission to transform healthcare delivery in Kenya. Make a difference in underserved communities through meaningful volunteer opportunities."
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/mission-2.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Volunteer Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Make a Difference in Healthcare
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ubuntu Afya volunteers are at the heart of our mission to transform healthcare delivery in Kenya. 
                Whether you're a healthcare professional, researcher, technologist, or community advocate, 
                there's a place for you to contribute your skills and passion.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Volunteer Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer diverse volunteer opportunities across healthcare, technology, research, and community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerTypes.map((type, index) => {
                const IconComponent = type.icon as any;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className={`w-16 h-16 ${type.color.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-8 h-8 ${type.color.split(' ')[1]}`} />
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

        {/* Current Opportunities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Current Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current volunteer positions and find the perfect opportunity to contribute your skills and passion.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ubuntu-orange text-white">{opportunity.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {opportunity.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{opportunity.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{opportunity.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {opportunity.duration} • {opportunity.commitment}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-ubuntu-orange mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Why Volunteer with Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a community of passionate individuals making a real difference in healthcare delivery across Kenya.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon as any;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-ubuntu-blue" />
                      </div>
                      <CardTitle className="text-xl text-ubuntu-blue">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Volunteer Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Volunteer Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our volunteers about their experiences and the impact they've made in communities across Kenya.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {volunteerStories.map((story, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                      <div>
                        <CardTitle className="text-lg text-ubuntu-blue">{story.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {story.role} • {story.location}
                        </CardDescription>
                        <Badge variant="outline" className="text-xs mt-1">
                          {story.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">How to Apply</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to make a difference? Follow these simple steps to start your volunteer journey with Ubuntu Afya.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">Browse Opportunities</h3>
                  <p className="text-gray-600 text-sm">Explore our current volunteer positions and find the perfect match for your skills.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">Submit Application</h3>
                  <p className="text-gray-600 text-sm">Complete our online application form with your details and motivation.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">Interview Process</h3>
                  <p className="text-gray-600 text-sm">Participate in a brief interview to discuss your interests and availability.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">Start Volunteering</h3>
                  <p className="text-gray-600 text-sm">Begin your journey making a difference in healthcare delivery across Kenya.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-ubuntu-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Join our community of volunteers and be part of transforming healthcare delivery in Kenya. 
                Your skills, passion, and commitment can help us reach more communities and save more lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white">
                  View All Opportunities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ubuntu-blue">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
