import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { ArrowRight, Database, TrendingUp, Activity, FileText, Users, Pill, DollarSign, Home } from 'lucide-react';

export const metadata = {
  title: 'Health Technology - Ubuntu Afya',
  description: 'STONE-HMIS®: A comprehensive health management and information system transforming healthcare delivery in Kenya.',
};

export default function HealthTechnology() {
  const clinicalModules = [
    {
      icon: Users,
      title: 'Registration Module',
      description: 'Streamlined patient registration and demographic data management'
    },
    {
      icon: Activity,
      title: 'Clinical Module',
      description: 'Comprehensive clinical documentation and patient care tracking'
    },
    {
      icon: FileText,
      title: 'Laboratory Module',
      description: 'Integrated lab test ordering, results management, and reporting'
    },
    {
      icon: Pill,
      title: 'Pharmacy Module',
      description: 'Medication dispensing, inventory management, and drug tracking'
    },
    {
      icon: DollarSign,
      title: 'Finance and Administration Module',
      description: 'Billing, payments, and administrative operations management'
    },
    {
      icon: Home,
      title: 'Community Module',
      description: 'Community health worker tools and outreach program management'
    }
  ];

  const impactAreas = [
    {
      number: '1',
      title: 'Operational Efficiency',
      description: 'Reduced paperwork and administrative burdens',
      icon: TrendingUp
    },
    {
      number: '2',
      title: 'Data Management',
      description: 'Streamlined the collection, storage, and analysis of health data.',
      icon: Database
    },
    {
      number: '3',
      title: 'Public Health Response',
      description: 'STONE-HMIS ability to fast track disease patterns and treatment outcomes has improved how we respond to public health emergencies.',
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Health Technology"
            subtitle="STONE-HMIS®: Comprehensive health management and information system transforming healthcare delivery"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/StoneHMIS.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">25+</div>
                <div className="text-lg font-semibold text-gray-800">Active Users</div>
                <div className="text-gray-600">Healthcare facilities using STONE-HMIS®</div>
              </div>
              <div className="bg-ubuntu-orange/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-orange mb-2">6</div>
                <div className="text-lg font-semibold text-gray-800">Clinical Modules</div>
                <div className="text-gray-600">Integrated healthcare management tools</div>
              </div>
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-800">Free & Open-Source</div>
                <div className="text-gray-600">Supporting sustainable growth and impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Overview</h2>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Healthcare management is already undergoing substantial change with constant needs 
                pointing to the development of a Health Information system that integrates all hospital 
                management modules under a singular system. This has excluded the majority of patients 
                and providers in Kenya from accessing the benefits of health technologies and prevented 
                the comprehensive collection of national health data to aid in decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                STONE-HMIS® addresses this critical gap by providing an accessible, comprehensive solution 
                that brings the benefits of health technologies to providers delivering the majority of 
                healthcare in Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-8">Our Approach</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We designed and deployed STONE-HMIS®, a health management and information 
                    system to track patient care and improve all management functions within our 
                    network of Ubuntu-Afya Kiosk medical centers. STONE-HMIS® which can be adopted 
                    by healthcare organizations both in the public and private realm, operates 
                    across disease verticals and at all levels of care.
                  </p>
                  <p>
                    Under a unified system, the health management information system offers 
                    specialized clinical modules that work seamlessly together to provide 
                    comprehensive healthcare management.
                  </p>
                  <p>
                    STONE-HMIS® has also been designed to seamlessly integrate with existing 
                    clinical workflows of healthcare providers. We believe that by bringing the 
                    benefits of health technologies to providers delivering the majority of 
                    healthcare in Kenya, we can improve quality of care for patients and existing 
                    health databases and reporting systems.
                  </p>
                  <p>
                    STONE-HMIS® is a free-ware, supporting its potential for growth and impact 
                    in the coming years. Sustained impact will also leverage health data generated 
                    by the system while costs of development stand to decrease over time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/HealthTechnology.jpg" 
                    alt="STONE-HMIS workflow"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Modules Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Specialized Clinical Modules</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                STONE-HMIS® offers a comprehensive suite of integrated modules designed 
                to streamline every aspect of healthcare management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicalModules.map((module, index) => {
                const IconComponent = module.icon as any;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-ubuntu-blue/10 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-ubuntu-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{module.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{module.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Impact</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon as any;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col">
                      <div className="bg-ubuntu-blue h-20 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">{area.number}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start mb-3">
                          <IconComponent className="w-6 h-6 text-ubuntu-blue mr-3 mt-1 flex-shrink-0" />
                          <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Benefits Section */}
            <div className="mt-16 bg-ubuntu-blue/5 p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-ubuntu-blue mb-6 text-center">Key Benefits of STONE-HMIS®</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Seamless integration with existing clinical workflows</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Free and open-source for maximum accessibility</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Operates across all disease verticals and care levels</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Comprehensive data collection for better decision-making</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Suitable for both public and private healthcare organizations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4 mt-2" />
                  <p className="text-gray-700">Decreasing development costs over time</p>
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
