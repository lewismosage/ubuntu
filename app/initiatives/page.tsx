import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Shield, BookOpen, Target, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Initiatives - Ubuntu Afya',
  description: 'Explore Ubuntu Afya\'s comprehensive healthcare initiatives including maternal health, community outreach, digital health, and capacity building programs.',
};

export default function Initiatives() {
  const mainInitiatives = [
    {
      icon: Heart,
      title: 'Maternal and Child Health Program',
      description: 'Comprehensive care for mothers and children, including prenatal care, safe deliveries, and pediatric services.',
      impact: '60% increase in skilled delivery rates',
      beneficiaries: '15,000+ mothers and children served',
      status: 'Active',
      color: 'ubuntu-blue'
    },
    {
      icon: Users,
      title: 'Community Health Worker Training',
      description: 'Training and capacity building programs for community health workers to deliver quality healthcare services.',
      impact: '225+ health workers trained',
      beneficiaries: '50+ communities reached',
      status: 'Active',
      color: 'ubuntu-orange'
    },
    {
      icon: Shield,
      title: 'Digital Health Implementation',
      description: 'Deployment of STONE-HMIS® system to improve healthcare data management and service delivery.',
      impact: '100% digital health coverage',
      beneficiaries: '25+ healthcare facilities',
      status: 'Active',
      color: 'green-600'
    },
    {
      icon: BookOpen,
      title: 'Health Education and Awareness',
      description: 'Community-based health education programs focusing on prevention and health promotion.',
      impact: '80% improvement in health knowledge',
      beneficiaries: '100,000+ community members',
      status: 'Active',
      color: 'purple-600'
    }
  ];

  const specializedPrograms = [
    {
      title: 'HIV/AIDS Prevention and Care',
      description: 'Comprehensive HIV prevention, testing, and care services including antiretroviral therapy support.',
      target: 'High-risk populations and PLHIV',
      coverage: '12 counties',
      outcomes: '250% increase in HIV treatment during COVID-19'
    },
    {
      title: 'Sexual and Reproductive Health',
      description: 'Access to contraceptives, family planning services, and reproductive health education.',
      target: 'Women and adolescents',
      coverage: '25 kiosks',
      outcomes: '85% contraceptive uptake rate'
    },
    {
      title: 'Chronic Disease Management',
      description: 'Screening, diagnosis, and management of diabetes, hypertension, and other chronic conditions.',
      target: 'Adults 35+ years',
      coverage: 'All kiosks',
      outcomes: '70% improvement in disease control'
    },
    {
      title: 'Emergency Health Response',
      description: 'Rapid response system for health emergencies and outbreak management in communities.',
      target: 'Emergency situations',
      coverage: 'All service areas',
      outcomes: '24-hour response time'
    }
  ];

  const capacityBuildingInitiatives = [
    {
      title: 'Health Worker Certification Program',
      description: 'Structured certification program for community health workers with ongoing professional development.',
      participants: '150+ health workers',
      duration: '6 months',
      certification: 'Ministry of Health recognized'
    },
    {
      title: 'Leadership Development Program',
      description: 'Leadership training for healthcare managers and community leaders to strengthen health systems.',
      participants: '50+ leaders',
      duration: '3 months',
      certification: 'Ubuntu Afya Leadership Certificate'
    },
    {
      title: 'Research and Evidence Training',
      description: 'Training in research methodology and evidence-based practice for healthcare professionals.',
      participants: '75+ professionals',
      duration: '4 months',
      certification: 'JBI Collaboration Certificate'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Initiatives"
            subtitle="Comprehensive healthcare programs and initiatives designed to transform healthcare delivery and improve health outcomes across Kenya"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/hero-healthcare-2.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Initiatives Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Transforming Healthcare Through Action
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our initiatives are designed to address the most pressing healthcare challenges in Kenya. 
                Through evidence-based programs, community engagement, and innovative approaches, we're 
                creating lasting impact in underserved communities across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Main Initiatives */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Core Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our flagship programs that form the foundation of our healthcare transformation efforts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainInitiatives.map((initiative, index) => {
                const IconComponent = initiative.icon as any;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-${initiative.color}/10`}>
                          <IconComponent className={`w-8 h-8 text-${initiative.color}`} />
                        </div>
                        <Badge className="bg-green-100 text-green-800">{initiative.status}</Badge>
                      </div>
                      <CardTitle className="text-xl text-ubuntu-blue">{initiative.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {initiative.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-ubuntu-orange mr-2" />
                          <span className="text-sm text-gray-700">
                            <strong>Impact:</strong> {initiative.impact}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-ubuntu-blue mr-2" />
                          <span className="text-sm text-gray-700">
                            <strong>Beneficiaries:</strong> {initiative.beneficiaries}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized Programs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Specialized Programs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Targeted programs addressing specific health needs and populations in our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specializedPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-ubuntu-blue">{program.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-ubuntu-orange mr-2 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-gray-700">Target Population:</span>
                          <p className="text-sm text-gray-600">{program.target}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-ubuntu-blue mr-2 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-gray-700">Coverage:</span>
                          <p className="text-sm text-gray-600">{program.coverage}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-gray-700">Key Outcomes:</span>
                          <p className="text-sm text-gray-600">{program.outcomes}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capacity Building */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Capacity Building Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Investing in human capital through comprehensive training and professional development programs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capacityBuildingInitiatives.map((initiative, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-ubuntu-blue">{initiative.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {initiative.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-ubuntu-orange mr-2" />
                        <span className="text-sm text-gray-700">
                          <strong>Participants:</strong> {initiative.participants}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-ubuntu-blue mr-2" />
                        <span className="text-sm text-gray-700">
                          <strong>Duration:</strong> {initiative.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          <strong>Certification:</strong> {initiative.certification}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Initiative Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable outcomes demonstrating the effectiveness of our healthcare initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-ubuntu-blue" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">60%</div>
                <div className="text-gray-600 font-semibold">Increase in Skilled Deliveries</div>
                <div className="text-sm text-gray-500 mt-1">Maternal Health Program</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-ubuntu-orange" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">225+</div>
                <div className="text-gray-600 font-semibold">Health Workers Trained</div>
                <div className="text-sm text-gray-500 mt-1">Capacity Building</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Digital Health Coverage</div>
                <div className="text-sm text-gray-500 mt-1">STONE-HMIS® Implementation</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">100K+</div>
                <div className="text-gray-600 font-semibold">Community Members Reached</div>
                <div className="text-sm text-gray-500 mt-1">Health Education</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Get Involved in Our Initiatives
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a healthcare professional, community leader, or organization looking to make a difference, 
                there are many ways to get involved in our initiatives and contribute to transforming healthcare in Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?subject=partnership" 
                  className="inline-flex items-center bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact?subject=volunteer" 
                  className="inline-flex items-center bg-ubuntu-blue hover:bg-ubuntu-blue/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Volunteer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
