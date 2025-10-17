import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ImpactCard from '@/components/ImpactCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Laptop, 
  Microscope, 
  Users, 
  Stethoscope, 
  TrendingUp,
  Monitor,
  Database,
  BarChart3,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Impact Areas - Ubuntu Afya',
  description: 'Explore Ubuntu Afya\'s three core impact areas: Primary Healthcare, Health Technology, and Research & Evidence.',
};

export default function Impact() {
  const impactAreas = [
    {
      id: 'primary-healthcare',
      title: 'Primary Healthcare',
      description: 'Delivering essential healthcare services through our network of community kiosks, focusing on maternal and child health, basic diagnostics, and health education.',
      features: [
        'Maternal and child health services',
        'Basic diagnostic services',
        'Health education and promotion',
        'Emergency care coordination',
        'Chronic disease management',
        'Immunization programs'
      ],
      icon: <Heart className="h-8 w-8" />,
      link: '/impact#primary-healthcare'
    },
    {
      id: 'health-technology',
      title: 'Health Technology',
      description: 'Leveraging digital solutions including our STONE-HMIS® system to improve healthcare delivery, data management, and patient outcomes.',
      features: [
        'STONE-HMIS® health information system',
        'Digital patient records',
        'Real-time health monitoring',
        'Data-driven decision making',
        'Telemedicine capabilities',
        'Mobile health applications'
      ],
      icon: <Laptop className="h-8 w-8" />,
      link: '/impact#health-technology'
    },
    {
      id: 'research-evidence',
      title: 'Research & Evidence',
      description: 'Building a robust evidence base for effective community health interventions through rigorous research and program evaluation.',
      features: [
        'Health outcome research',
        'Program evaluation studies',
        'Community health assessments',
        'Policy recommendations',
        'Health impact measurements',
        'Best practice documentation'
      ],
      icon: <Microscope className="h-8 w-8" />,
      link: '/impact#research-evidence'
    }
  ];

  const primaryHealthcareStats = [
    { icon: <Users className="h-6 w-6" />, value: '250,000+', label: 'People Served' },
    { icon: <Stethoscope className="h-6 w-6" />, value: '60%', label: 'Increase in Skilled Delivery' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '100', label: 'Health Workers Trained' },
    { icon: <Heart className="h-6 w-6" />, value: '25', label: 'Community Kiosks' }
  ];

  const technologyFeatures = [
    {
      title: 'STONE-HMIS® Dashboard',
      description: 'Real-time health data visualization and management',
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: 'Patient Records',
      description: 'Digital health records accessible across all kiosks',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive health outcome tracking and analysis',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: 'Documentation',
      description: 'Automated reporting and compliance documentation',
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <Hero 
          title="Our Impact Areas"
          subtitle="Three pillars of comprehensive healthcare transformation"
          showButtons={false}
        />

        {/* Impact Areas Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work across three interconnected areas to deliver comprehensive healthcare solutions 
                that address the complex challenges facing underserved communities in Kenya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactAreas.map((area) => (
                <ImpactCard
                  key={area.id}
                  title={area.title}
                  description={area.description}
                  features={area.features}
                  icon={area.icon}
                  link={area.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Primary Healthcare Deep Dive */}
        <section id="primary-healthcare" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                  Primary Healthcare
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our community-based healthcare delivery model brings essential health services 
                  directly to underserved populations through strategically located kiosks.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {primaryHealthcareStats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-ubuntu-blue/10 text-ubuntu-blue">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-ubuntu-blue mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-ubuntu-blue mb-6">Our Services</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Maternal & Child Health</h4>
                        <p className="text-gray-600 text-sm">Prenatal care, delivery services, and pediatric care</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Basic Diagnostics</h4>
                        <p className="text-gray-600 text-sm">Blood pressure, blood sugar, and basic lab tests</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Health Education</h4>
                        <p className="text-gray-600 text-sm">Community health promotion and disease prevention</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Emergency Coordination</h4>
                        <p className="text-gray-600 text-sm">Emergency care referrals and ambulance coordination</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-ubuntu-blue mb-6">Impact Stories</h3>
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <blockquote className="text-gray-700 italic mb-4">
                        "The Ubuntu Afya kiosk in our village has transformed healthcare access. 
                        My daughter received proper prenatal care and had a safe delivery. 
                        We no longer need to travel 50 kilometers to the nearest hospital."
                      </blockquote>
                      <cite className="text-ubuntu-blue font-semibold">
                        — Mary Wanjiku, Community Member
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Technology Deep Dive */}
        <section id="health-technology" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                  Health Technology
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our STONE-HMIS® system and digital health solutions are revolutionizing 
                  how healthcare data is collected, managed, and utilized in Kenya.
                </p>
              </div>

              {/* STONE-HMIS Demo Card */}
              <Card className="shadow-xl mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl text-ubuntu-blue flex items-center gap-3">
                    <Laptop className="h-6 w-6" />
                    STONE-HMIS® System
                  </CardTitle>
                  <CardDescription>
                    Currently connecting 30 clinics across Kenya with real-time health data management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-ubuntu-blue mb-4">System Features</h4>
                      <div className="space-y-4">
                        {technologyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="p-2 rounded-full bg-ubuntu-orange/10 text-ubuntu-orange mr-3">
                              {feature.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-800">{feature.title}</h5>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-ubuntu-blue mb-4">Live Demo</h4>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-ubuntu-blue mb-2">30</div>
                        <div className="text-gray-600 mb-4">Clinics Connected</div>
                        <Button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white">
                          View Demo
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">
                          Interactive demonstration of STONE-HMIS® dashboard
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-ubuntu-blue mb-2">40%</div>
                    <div className="text-gray-600">Improvement in Patient Follow-up</div>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-ubuntu-blue mb-2">60%</div>
                    <div className="text-gray-600">Reduction in Data Collection Errors</div>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-ubuntu-blue mb-2">Real-time</div>
                    <div className="text-gray-600">Health Data Monitoring</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Evidence Deep Dive */}
        <section id="research-evidence" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                  Research & Evidence
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We build evidence-based solutions through rigorous research, program evaluation, 
                  and continuous learning to maximize our impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-ubuntu-blue mb-6">Research Areas</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Health Outcome Studies</h4>
                        <p className="text-gray-600 text-sm">Measuring the impact of our interventions on community health</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Program Evaluation</h4>
                        <p className="text-gray-600 text-sm">Assessing the effectiveness of our kiosk model</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Community Health Assessments</h4>
                        <p className="text-gray-600 text-sm">Understanding local health needs and challenges</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Policy Research</h4>
                        <p className="text-gray-600 text-sm">Informing health policy and program design</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-ubuntu-blue mb-6">Key Findings</h3>
                  <div className="space-y-4">
                    <Card className="shadow-md">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-ubuntu-blue mb-2">Maternal Health Impact</h4>
                        <p className="text-gray-600 text-sm">
                          Our kiosks have contributed to a 60% increase in skilled delivery rates 
                          in communities where we operate.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-md">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-ubuntu-blue mb-2">Technology Adoption</h4>
                        <p className="text-gray-600 text-sm">
                          Health workers using STONE-HMIS® report 40% improvement in patient 
                          follow-up rates and 60% reduction in data errors.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-md">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-ubuntu-blue mb-2">Community Engagement</h4>
                        <p className="text-gray-600 text-sm">
                          95% of community members report high satisfaction with kiosk services 
                          and improved healthcare access.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
