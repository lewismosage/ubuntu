import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Image from 'next/image';

export const metadata = {
  title: 'Our Partners - Ubuntu Afya',
  description: 'Meet our valued partners who support Ubuntu Afya\'s mission to transform healthcare delivery in Kenya through collaboration and shared vision.',
};

export default function OurPartners() {
  const partners = [
    {
      name: 'Joanna Briggs Institute',
      logo: '/images/our-partners/JBI.png',
      description: 'Collaborating center for evidence-based healthcare research and implementation'
    },
    {
      name: 'UK Aid',
      logo: '/images/our-partners/UKaid.png',
      description: 'Supporting healthcare infrastructure and capacity building initiatives'
    },
    {
      name: 'The Pfizer Foundation',
      logo: '/images/our-partners/The-Pfizer.png',
      description: 'Advancing global health through innovative healthcare solutions'
    },
    {
      name: 'Twining',
      logo: '/images/our-partners/Twining.png',
      description: 'Strengthening healthcare systems through strategic partnerships'
    },
    {
      name: 'Cheshire Disability Services Kenya',
      logo: '/images/our-partners/Cheshire-Disability-Services-Kenya.png',
      description: 'Supporting inclusive healthcare services for people with disabilities'
    },
    {
      name: 'County Innovation Challenge Fund',
      logo: '/images/our-partners/County-Innovation-Challenge-Fund.png',
      description: 'Fostering innovation in county-level healthcare delivery'
    },
    {
      name: 'Grand Challenges',
      logo: '/images/our-partners/Grand-challenges.png',
      description: 'Supporting breakthrough innovations in global health'
    },
    {
      name: 'International Transactions Clinic',
      logo: '/images/our-partners/International-Transactions-Clinic.png',
      description: 'Facilitating international healthcare collaborations and transactions'
    },
    {
      name: 'Liliane Fonds',
      logo: '/images/our-partners/Liliane-Fonds.png',
      description: 'Supporting children with disabilities through healthcare access'
    },
    {
      name: 'Turkana County',
      logo: '/images/our-partners/Turkana-COunty.png',
      description: 'Local government partnership for healthcare service delivery'
    },
    {
      name: 'Carbon Trust',
      logo: '/images/our-partners/Carbon-Trust.png',
      description: 'Promoting sustainable healthcare practices and environmental responsibility'
    },
    {
      name: 'Innovations in Healthcare',
      logo: '/images/our-partners/Innovations-in-healthcare.png',
      description: 'Catalyzing healthcare innovation and technology adoption'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Our Partners"
            subtitle="Collaborating with organizations that share our vision of transforming healthcare delivery in Kenya"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/partnership.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Partners Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Building Strong Partnerships
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our success in transforming healthcare delivery across Kenya is made possible through 
                strategic partnerships with organizations that share our commitment to accessible, 
                quality healthcare for all. Together, we're creating lasting impact in underserved communities.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Our Valued Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These organizations work alongside us to strengthen healthcare systems, 
                support research initiatives, and expand access to quality care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center group"
                >
                  <div className="w-32 h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={120}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-ubuntu-blue mb-2 group-hover:text-ubuntu-orange transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                  Why Partnership Matters
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our collaborative approach amplifies impact and creates sustainable solutions 
                  for healthcare challenges in Kenya.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-3">Shared Resources</h3>
                  <p className="text-gray-600">
                    Combining expertise, funding, and networks to maximize our collective impact 
                    on healthcare delivery.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-3">Global Perspective</h3>
                  <p className="text-gray-600">
                    Learning from international best practices while adapting solutions 
                    to local contexts and needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Fostering innovation through diverse perspectives and collaborative 
                    problem-solving approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Interested in Partnering with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're always looking for organizations that share our vision of accessible, 
                quality healthcare for all. Let's explore how we can work together to create 
                lasting impact in communities across Kenya.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
