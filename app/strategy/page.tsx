import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  Laptop, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Heart,
  Microscope
} from 'lucide-react';

export const metadata = {
  title: 'Our Strategy - Ubuntu Afya',
  description: 'Learn about Ubuntu Afya\'s three-pillar strategy for transforming healthcare delivery in Kenya through technology, community engagement, and evidence-based practices.',
};

export default function Strategy() {
  const strategyPillars = [
    {
      title: 'Technology Innovation',
      description: 'Leveraging cutting-edge digital health solutions to improve healthcare delivery and data management.',
      icon: <Laptop className="h-8 w-8" />,
      color: 'ubuntu-blue',
      steps: [
        'Develop and deploy STONE-HMIS® health information system',
        'Implement digital patient records across all kiosks',
        'Create real-time health monitoring and analytics',
        'Build mobile health applications for community health workers',
        'Establish telemedicine capabilities for remote consultations'
      ]
    },
    {
      title: 'Community Engagement',
      description: 'Building strong partnerships with local communities to ensure sustainable and culturally appropriate healthcare delivery.',
      icon: <Users className="h-8 w-8" />,
      color: 'ubuntu-orange',
      steps: [
        'Train and empower local community health workers',
        'Establish community health committees and advisory boards',
        'Conduct regular community health assessments and feedback sessions',
        'Develop culturally appropriate health education programs',
        'Create sustainable community ownership models'
      ]
    },
    {
      title: 'Evidence-Based Practice',
      description: 'Using rigorous research and data analysis to continuously improve our programs and demonstrate impact.',
      icon: <Microscope className="h-8 w-8" />,
      color: 'ubuntu-blue',
      steps: [
        'Conduct comprehensive health outcome research',
        'Implement continuous program evaluation and monitoring',
        'Build evidence base for effective community health interventions',
        'Share findings with policy makers and health stakeholders',
        'Adapt programs based on research findings and community feedback'
      ]
    }
  ];

  const timeline = [
    {
      year: '2010-2015',
      title: 'Foundation & Pilot',
      description: 'Established Ubuntu Afya and launched pilot kiosk program in 3 communities',
      achievements: ['First 5 kiosks operational', 'Initial community partnerships', 'Basic health services delivery']
    },
    {
      year: '2015-2020',
      title: 'Expansion & Technology',
      description: 'Expanded to 15 kiosks and developed STONE-HMIS® system',
      achievements: ['15 kiosks across Kenya', 'STONE-HMIS® development', '100 health workers trained']
    },
    {
      year: '2020-2025',
      title: 'Scale & Innovation',
      description: 'Scaling to 25 kiosks and implementing advanced digital health solutions',
      achievements: ['25 kiosks operational', '30 clinics connected', '250,000+ people served']
    }
  ];

  const keyMetrics = [
    { icon: <Heart className="h-6 w-6" />, value: '60%', label: 'Increase in Skilled Delivery', description: 'Maternal health improvement' },
    { icon: <Users className="h-6 w-6" />, value: '250,000+', label: 'People Served', description: 'Lives touched by our programs' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '100', label: 'Health Workers Trained', description: 'Community health workforce' },
    { icon: <Laptop className="h-6 w-6" />, value: '30', label: 'Clinics Connected', description: 'STONE-HMIS® network' }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero 
            title="Our Strategy"
            subtitle="A comprehensive approach to transforming healthcare delivery in Kenya"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/strategy.jpg"
          />
        </div>

        {/* Spacer below Hero to match page rhythm */}
        <div className="h-10 md:h-16" />

        {/* Strategy Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Three-Pillar Strategy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strategy is built on three interconnected pillars that work together to create 
                sustainable, scalable, and effective healthcare solutions for underserved communities. 
                Each pillar reinforces the others, creating a comprehensive approach to healthcare transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategyPillars.map((pillar, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className={`flex justify-center mb-4 p-4 rounded-full bg-${pillar.color}/10 text-${pillar.color}`}>
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-xl text-ubuntu-blue">{pillar.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pillar.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Our Impact Metrics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These key performance indicators demonstrate the effectiveness of our strategy 
                and the positive impact we're making in communities across Kenya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-ubuntu-blue/10 text-ubuntu-blue">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-ubuntu-blue mb-2">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Implementation Timeline
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our journey from a small pilot program to a comprehensive healthcare network 
                serving communities across Kenya.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-ubuntu-orange rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-ubuntu-orange font-bold text-lg mr-3">{phase.year}</span>
                          <h3 className="text-xl font-bold text-ubuntu-blue">{phase.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-4">{phase.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {phase.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center text-sm text-gray-600">
                                <ArrowRight className="h-4 w-4 text-ubuntu-orange mr-2" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Looking Forward
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As we look to the future, our strategy continues to evolve based on lessons learned, 
                community feedback, and emerging health challenges. We remain committed to our mission 
                of making quality healthcare accessible to all Kenyans.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-ubuntu-blue">2025-2030 Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Expand to 50 kiosks across Kenya</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Connect 100 clinics to STONE-HMIS®</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Serve 500,000+ people annually</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Train 500 community health workers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-ubuntu-blue">Innovation Priorities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">AI-powered health diagnostics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Mobile health applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Telemedicine expansion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-ubuntu-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Predictive health analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
