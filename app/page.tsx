import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ElegantStatCard from '@/components/ui/elegantstatcard';
import ImpactAreasCarousel from '@/components/impactAreas/ImpactAreasCarousel';
import LatestUpdates from '@/components/LatestUpdates';

// Import data
import statsData from '@/data/stats.json';
import updatesData from '@/data/updates.json';

export default function Home() {
  const impactAreas = [
    {
      id: 'primary-healthcare',
      title: 'Primary Health Care - Ubuntu-Afya Kiosks',
      description: 'Through our Ubuntu-Afya kiosks, we bring essential health services closer to families in underserved communities, co-owned with local groups to ensure accountability and sustainability.',
      details: 'We equip communities with accessible healthcare facilities and trained health workers to provide maternal and child health services, basic diagnostics, and health education.',
      link: '/primary-healthcare',
      statistics: [
        { value: '25', label: 'Kiosks Operating' },
        { value: '250,000', label: 'Patients Served' },
        { value: '60%', label: 'Women & Children' }
      ]
    },
    {
      id: 'health-technology',
      title: 'Health Technology - STONE-HMIS® System',
      description: 'Our STONE-HMIS® connects clinics, communities, and county governments with real-time data to improve care, strengthen referrals, and guide decisions across health systems.',
      details: 'Our STONE-HMIS® system enables real-time health monitoring, digital patient records, and data-driven decision making for better health outcomes.',
      link: '/health-technology',
      statistics: [
        { value: '100%', label: 'Real-time Data' },
        { value: '50+', label: 'Clinics Connected' },
        { value: '24/7', label: 'System Availability' }
      ]
    },
    {
      id: 'research-evidence',
      title: 'Research & Evidence - Joanna Briggs Institute Collaboration',
      description: 'As a collaborating center with the Joanna Briggs Institute, we equip frontline workers with tools and training to translate evidence into practice, shaping policy and improving outcomes.',
      details: 'We conduct health outcome research, program evaluations, and community assessments to inform policy recommendations and strengthen health systems.',
      link: '/research-evidence',
      statistics: [
        { value: '500+', label: 'Workers Trained' },
        { value: '15', label: 'Research Studies' },
        { value: '10+', label: 'Policy Changes' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <Hero 
          title="Delivering|Healthcare in|Kenya's most|underserved|communities"
          subtitle="Through innovative technology, research and community-centered approaches."
          showButtons={true}
          isFullPage={true}
        />

        {/* Stats Section - New Elegant Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Since 2010, our community health programs have brought us a step closer to reducing health disparities in the communities we serve.
              </p>
            </div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <ElegantStatCard
                value={statsData.kiosks}
                label="Ubuntu Afya Kiosks"
                color="#084B8A"
              />
              <ElegantStatCard
                value={statsData.peopleServed.toLocaleString()}
                label="People Served"
                color="#084B8A"
              />
              <ElegantStatCard
                value={`${statsData.skilledDeliveryIncreasePct}%`}
                label="Increase in Skilled Delivery"
                color="#084B8A"
              />
              <ElegantStatCard
                value={statsData.healthWorkersTrained}
                label="Health Workers Trained"
                color="#084B8A"
              />
            </div>
          </div>
        </section>

        {/* Impact Areas Carousel */}
        <ImpactAreasCarousel
          areas={impactAreas}
          image="/images/hero-healthcare-1.jpg"
          heading="Proven Network for Healthier Kenya"
          subheading="Ubuntu Afya's approach leverages our unique position to deliver systemic impact at scale through our community-centered healthcare model and digital health solutions."
          autoRotate={true}
          autoRotateInterval={5000}
        />

        {/* Latest Updates */}
        <LatestUpdates updates={updatesData} />
      </main>

      <Footer />
    </div>
  );
}