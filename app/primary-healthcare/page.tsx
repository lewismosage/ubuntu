import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { ArrowRight, Heart, Users, MapPin, Baby, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Primary Health Care - Ubuntu Afya',
  description: 'Ubuntu-Afya kiosks bring essential, community-owned primary healthcare closer to underserved families across Kenya.',
};

export default function PrimaryHealthCare() {
  const services = [
    {
      icon: Heart,
      title: 'Maternal & Child Health',
      description: 'Comprehensive care for mothers and children including prenatal care, safe deliveries, and pediatric services.',
      stats: ['85%', 'Safe Deliveries', '60%', 'Women & Children Served']
    },
    {
      icon: Users,
      title: 'Family Medicine',
      description: 'Primary care for the entire family—from prevention to treatment of common conditions.',
      stats: ['290K+', 'Patients Served', '25', 'Kiosks Operating']
    },
    {
      icon: MapPin,
      title: 'Community Outreach',
      description: 'Mobile services and health education programs reaching remote areas.',
      stats: ['50+', 'Communities Reached', '24/7', 'Emergency Services']
    }
  ];

  const kioskFeatures = [
    'Community-owned and managed',
    'Local health workers trained and employed',
    'Essential medicines and supplies',
    'Digital health records (STONE-HMIS®)',
    'Referral system to higher-level facilities',
    'Health education and prevention programs'
  ];

  const impactAreas = [
    { number: '1', title: 'Sexual and Reproductive Health (SRH)', description: 'Education, counseling, and access to contraceptives.', icon: Heart },
    { number: '2', title: 'Community Outreach', description: 'Essential services and initiatives delivered where people live.', icon: Users },
    { number: '3', title: 'Community Engagement', description: 'Strong local relationships that enable effective behavior change.', icon: MessageCircle },
    { number: '4', title: 'Maternal and Child Health (MCH)', description: 'Improving outcomes via education, prenatal care, and vaccination.', icon: Baby }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Primary Health Care"
            subtitle="Ubuntu-Afya kiosks: accessible, community-owned healthcare close to home"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/Ubuntu-Afya-Kiosks.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">25</div>
                <div className="text-lg font-semibold text-gray-800">Kiosks Operating</div>
                <div className="text-gray-600">Across Kenya's rural communities</div>
              </div>
              <div className="bg-ubuntu-orange/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-orange mb-2">290K+</div>
                <div className="text-lg font-semibold text-gray-800">Patients Served</div>
                <div className="text-gray-600">Since program inception</div>
              </div>
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-800">Women & Children</div>
                <div className="text-gray-600">Primary beneficiaries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Comprehensive Healthcare Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our kiosks offer a full range of primary healthcare tailored to community needs.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-ubuntu-blue/10 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-ubuntu-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ubuntu-blue">{service.stats[0]}</div>
                        <div className="text-sm text-gray-600">{service.stats[1]}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ubuntu-orange">{service.stats[2]}</div>
                        <div className="text-sm text-gray-600">{service.stats[3]}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kiosk Model */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/images/Mfangano-Community.jpg"
                    alt="Ubuntu-Afya kiosk providing healthcare services"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">Community-Owned Healthcare Model</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Each Ubuntu-Afya kiosk is co-owned with local self-help groups, ensuring accountability and long-term sustainability.
                </p>
                <div className="space-y-4 mb-8">
                  {kioskFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-4" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="/our-model" className="inline-flex items-center bg-ubuntu-blue hover:bg-ubuntu-blue/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  <span>Learn About Our Model</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-8">Our Approach</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Ubuntu Afya provides evidence-based, accessible, and sustainable facilities in Kenya's rural and underserved communities. Our network is anchored on STONE-eHMIS®, an open-source health information system.
                  </p>
                  <p>
                    Facilities offer comprehensive services: full-time clinic, essential medicines, lab services, Maternal and Child Health, Sexual and Reproductive Health, and HIV services.
                  </p>
                  <p>
                    We also enable Dollar-Afya health savings accounts and microfinance services for patients and partner centers.
                  </p>
                  <p>
                    Community savings and credit schemes co-own facilities and generate revenue to subsidize healthcare costs—improving outcomes and economic resilience.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                  <img
                    src="/images/Ubuntu-Afya-Kiosks.jpg"
                    alt="Clinic team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Impact</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon as any;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex">
                      <div className="bg-ubuntu-blue w-20 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">{area.number}</span>
                      </div>
                      <div className="flex-1 p-6">
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
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-ubuntu-blue/5 rounded-lg">
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">80%</div>
                <div className="text-gray-700 font-semibold">Reduction in Travel Time</div>
                <div className="text-sm text-gray-600 mt-2">From 25+ km to walking distance</div>
              </div>
              <div className="text-center p-6 bg-ubuntu-orange/5 rounded-lg">
                <div className="text-3xl font-bold text-ubuntu-orange mb-2">85%</div>
                <div className="text-gray-700 font-semibold">Improved Health Outcomes</div>
                <div className="text-sm text-gray-600 mt-2">In maternal and child health</div>
              </div>
              <div className="text-center p-6 bg-ubuntu-blue/5 rounded-lg">
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">50+</div>
                <div className="text-gray-700 font-semibold">Communities Reached</div>
                <div className="text-sm text-gray-600 mt-2">Across Kenya's rural areas</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


