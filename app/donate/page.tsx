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

export const metadata = {
  title: 'Donate - Ubuntu Afya',
  description: 'Support Ubuntu Afya\'s mission to transform healthcare delivery in underserved communities across Kenya. Your donation makes a real difference.',
};

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
        {/* Hero Section */}
        <Hero 
          title="Support Our Mission"
          subtitle="Help us transform healthcare delivery in underserved communities across Kenya"
          showButtons={false}
        />

        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Your Impact in Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Since 2010, your support has helped us reach thousands of people across Kenya. 
                Here's what we've achieved together.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
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
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <DonateForm />
          </div>
        </section>

        {/* Donation Impact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                How Your Donation Helps
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every dollar you donate goes directly to supporting our healthcare programs 
                and making a real difference in people's lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationImpact.map((item, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ubuntu-orange">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-ubuntu-blue mb-2">{item.impact}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Trust */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Secure & Transparent
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We take your trust seriously. Your donations are secure, and we provide 
                regular updates on how your contributions are making an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-ubuntu-orange/10 text-ubuntu-orange">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Other Ways to Help
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                There are many ways to support our mission beyond financial donations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">
                    Volunteer
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Share your skills and time to help us expand our impact
                  </p>
                  <button className="text-ubuntu-orange font-semibold text-sm">
                    Learn More
                  </button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">
                    Partner With Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join us as a corporate or institutional partner
                  </p>
                  <button className="text-ubuntu-orange font-semibold text-sm">
                    Contact Us
                  </button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-ubuntu-blue mb-2">
                    Spread the Word
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Help us reach more people by sharing our story
                  </p>
                  <button className="text-ubuntu-orange font-semibold text-sm">
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
