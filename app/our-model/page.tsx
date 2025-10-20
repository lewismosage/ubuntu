import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Our Model - Ubuntu Afya',
  description: 'Ubuntu-Afya: A community-owned, financially sustainable healthcare model delivering integrated services in underserved communities.',
};

export default function OurModel() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section (matches Our People/Our Story) */}
        <div className="h-[70vh]">
          <Hero 
            title="Our Model"
            subtitle="Ubuntu-Afya: Community-owned, financially sustainable, and integrated healthcare"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/modalcare.jpg"
          />
        </div>

        {/* Spacer below Hero to match rhythm */}
        <div className="h-10 md:h-16" />

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-ubuntu-orange text-white font-semibold px-4 py-2 rounded-md uppercase tracking-wide mb-6">
                Our Model
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Community-Owned Healthcare that Scales
              </h2>
              <p className="text-lg text-gray-700">
                Ubuntu Afya is rooted in community ownership. Clinics are co-owned with local groups, 
                supported by community savings and county partnerships, creating a resilient, financially 
                sustainable network that delivers high-quality, integrated care where it is needed most.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Community Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Self-help groups co-own and co-manage Ubuntu-Afya kiosks, ensuring local control, 
                    accountability, and culturally grounded care.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Financial Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Community savings and credit schemes subsidize patient costs and support operations, 
                    enabling long-term viability and growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Integrated Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive care spanning maternal and child health, infectious diseases, HIV care, 
                    and chronic disease management—connected by digital health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Flower/Icons Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Left copy */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Empowered Communities</h3>
                  <p className="text-gray-700">Strengthening local leadership and capacity through co-ownership and continuous training.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Resilient Systems</h3>
                  <p className="text-gray-700">Clinics embedded in county systems with reliable supply chains and referral pathways.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Data-Driven Decisions</h3>
                  <p className="text-gray-700">STONE-HMIS® powers real-time monitoring and continuous quality improvement.</p>
                </div>
              </div>

              {/* Center icons grid */}
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {[
                  '👥','💰','🏥','📊','🛡️','⚕️'
                ].map((icon, i) => (
                  <div key={i} className="bg-ubuntu-blue/5 rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shadow">
                    <span className="text-2xl">{icon}</span>
                  </div>
                ))}
              </div>

              {/* Right copy */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Affordable Care</h3>
                  <p className="text-gray-700">Community subsidies and efficient delivery models reduce out-of-pocket costs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Continuum of Care</h3>
                  <p className="text-gray-700">From prevention to treatment and follow-up, care is coordinated and continuous.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ubuntu-blue mb-2">Ubuntu-Afya Kiosk</h3>
                  <p className="text-gray-700">The community-owned hub delivering accessible, quality services close to home.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Affordable Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Subsidies and operational efficiency make quality care accessible across income levels.</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Empowered Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Local ownership creates jobs, builds capacity, and strengthens social cohesion.</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-ubuntu-blue">Resilient Health Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Sustainable infrastructure adapts to evolving community needs over time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


