import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import TeamGrid from '@/components/TeamGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

// Import data
import teamData from '@/data/team.json';

export const metadata = {
  title: 'Our Story - Ubuntu Afya',
  description: 'Learn about Ubuntu Afya\'s mission, vision, and the dedicated team working to transform healthcare delivery in Kenya.',
};

export default function OurStory() {
  const missionVision = {
    mission: "To transform healthcare delivery in underserved communities by providing accessible, quality healthcare services through innovative technology and community-centered approaches.",
    vision: "A Kenya where every person, regardless of their location or economic status, has access to quality healthcare services that improve their health outcomes and quality of life."
  };

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero 
            title="Our Story"
            subtitle="Transforming healthcare delivery in Kenya since 2010"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/OurStory.jpg"
          />
        </div>

        {/* Spacer below Hero to match home page rhythm */}
        <div className="h-10 md:h-16" />

        {/* Who We Are Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-8 text-center">
                Who We Are
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Ubuntu Afya was founded in 2010 with a simple yet powerful vision: to make quality healthcare 
                  accessible to all Kenyans, regardless of their location or economic status. The name "Ubuntu Afya" 
                  reflects our core belief that health is a fundamental human right that should be available to everyone.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began when our founders witnessed firsthand the healthcare challenges facing rural and 
                  underserved communities in Kenya. Many people had to travel long distances to access basic healthcare 
                  services, often at great personal and financial cost. This reality inspired us to develop innovative 
                  solutions that would bring healthcare closer to the people who need it most.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Today, Ubuntu Afya operates a network of 25 community health kiosks across Kenya, serving over 
                  250,000 people. Our innovative Ubuntu-Afya Kiosk model combines traditional community health approaches 
                  with cutting-edge technology to deliver comprehensive healthcare services in the most remote areas.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We believe that healthcare should be community-centered, culturally appropriate, and sustainable. 
                  Our approach empowers local communities to take ownership of their health while providing them with 
                  the tools, training, and technology they need to deliver quality care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-ubuntu-blue">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {missionVision.mission}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-ubuntu-blue">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {missionVision.vision}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Model Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-8 text-center">
                Our Model
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-ubuntu-blue mb-4">
                  The Ubuntu-Afya Kiosk Model
                </h3>
                
                <p className="text-lg text-gray-700 mb-6">
                  Our innovative kiosk model is designed to bring comprehensive healthcare services to underserved 
                  communities. Each kiosk is strategically located in areas with limited healthcare access and is 
                  staffed by trained community health workers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-ubuntu-blue mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Community-based healthcare delivery</li>
                      <li>• STONE-HMIS® digital health system</li>
                      <li>• Trained local health workers</li>
                      <li>• Maternal and child health focus</li>
                      <li>• Health education and promotion</li>
                      <li>• Emergency care coordination</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-ubuntu-blue mb-3">Impact:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 60% increase in skilled delivery rates</li>
                      <li>• 100 trained community health workers</li>
                      <li>• 30 clinics connected via STONE-HMIS®</li>
                      <li>• 250,000+ people served</li>
                      <li>• 25 operational kiosks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-8 py-3">
                    <Link href="/public/docs/ubuntu-afya-model.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      Download Model PDF
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    <FileText className="h-4 w-4 inline mr-1" />
                    Detailed overview of our kiosk model and implementation strategy
                  </p>
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
