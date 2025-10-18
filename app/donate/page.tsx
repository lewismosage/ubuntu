'use client';

import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import DonateForm from '@/components/DonateForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  TrendingUp,
  CheckCircle,
  Shield,
  CreditCard,
  Smartphone
} from 'lucide-react';


export default function Donate() {
  const impactStats = [
    { icon: <Users className="h-6 w-6" />, value: '250,000+', label: 'People Served' },
    { icon: <Stethoscope className="h-6 w-6" />, value: '60%', label: 'Increase in Skilled Delivery' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '100', label: 'Health Workers Trained' },
    { icon: <Heart className="h-6 w-6" />, value: '25', label: 'Community Kiosks' }
  ];

  const donationImpact = [
    {
      amount: '$25',
      impact: 'Provides basic health screening for 5 people',
      description: 'Blood pressure, blood sugar, and basic vital signs check'
    },
    {
      amount: '$50',
      impact: 'Trains one community health worker for a month',
      description: 'Essential skills training and ongoing support'
    },
    {
      amount: '$100',
      impact: 'Supports one kiosk for a week',
      description: 'Medical supplies, equipment maintenance, and operations'
    },
    {
      amount: '$250',
      impact: 'Provides maternal health services for 10 women',
      description: 'Prenatal care, delivery support, and postnatal follow-up'
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Donations',
      description: 'Your payment information is encrypted and secure'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Multiple Payment Options',
      description: 'Credit cards, mobile money, and bank transfers accepted'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Transparent Impact',
      description: 'Regular reports on how your donation is being used'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section with Navigation Headers and Static Background */}
        <div className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/images/hero-healthcare-1.jpg')`
        }}>
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Use Hero component for navigation with custom background */}
          <div className="relative z-20 w-full">
        <Hero 
              title=""
              subtitle=""
          showButtons={false}
              isFullPage={false}
              showBackgroundImages={false}
            />
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                  Transform Lives Through Healthcare
                </h1>
                
                <p className="text-base md:text-lg text-white/90 mb-4 max-w-2xl mx-auto drop-shadow-lg">
                  Your donation helps us provide essential healthcare services to underserved communities across Kenya.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-6 py-2 text-base rounded-lg transition-colors"
                  >
                    Donate Now
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('impact-stats')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-white bg-white text-ubuntu-blue hover:bg-white/90 font-semibold px-6 py-2 text-base rounded-lg transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <section id="impact-stats" className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ubuntu-blue mb-6">
                Your Impact in Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Since 2010, your support has helped us reach thousands of people across Kenya. 
                Here's what we've achieved together.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-to-br from-ubuntu-blue/10 to-ubuntu-orange/10 text-ubuntu-blue shadow-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-3">
                      {stat.value}
                    </div>
                    <div className="text-base text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section id="donation-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <DonateForm />
          </div>
        </section>

        {/* Donation Impact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ubuntu-blue mb-6">
                How Your Donation Helps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every dollar you donate goes directly to supporting our healthcare programs 
                and making a real difference in people's lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {donationImpact.map((item, index) => (
                <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-3xl md:text-4xl text-ubuntu-orange font-bold">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-bold text-ubuntu-blue mb-4 text-lg">{item.impact}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Trust */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ubuntu-blue mb-6">
                Secure & Transparent
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We take your trust seriously. Your donations are secure, and we provide 
                regular updates on how your contributions are making an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-gradient-to-br from-ubuntu-orange/10 to-ubuntu-blue/10 text-ubuntu-orange shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-ubuntu-blue mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ubuntu-blue mb-6">
                Other Ways to Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                There are many ways to support our mission beyond financial donations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-4">
                    Volunteer
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Share your skills and time to help us expand our impact
                  </p>
                  <button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Learn More
                  </button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-4">
                    Partner With Us
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Join us as a corporate or institutional partner
                  </p>
                  <button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Contact Us
                  </button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-4">
                    Spread the Word
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Help us reach more people by sharing our story
                  </p>
                  <button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Share Now
                  </button>
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
