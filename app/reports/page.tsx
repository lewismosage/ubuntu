import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Calendar, Users, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Reports - Ubuntu Afya',
  description: 'Access Ubuntu Afya\'s annual reports, impact assessments, and research publications documenting our healthcare transformation journey in Kenya.',
};

export default function Reports() {
  const annualReports = [
    {
      year: '2024',
      title: 'Annual Report 2024',
      description: 'Comprehensive overview of our achievements, impact metrics, and strategic initiatives throughout 2024.',
      downloadUrl: '/docs/ubuntu-afya-annual-report-2024.pdf',
      pages: '48',
      size: '2.3 MB'
    },
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'Documenting our growth, community partnerships, and healthcare delivery improvements across Kenya.',
      downloadUrl: '/docs/ubuntu-afya-annual-report-2023.pdf',
      pages: '42',
      size: '1.8 MB'
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Recovery and resilience: How we adapted and expanded our services during challenging times.',
      downloadUrl: '/docs/ubuntu-afya-annual-report-2022.pdf',
      pages: '38',
      size: '1.6 MB'
    }
  ];

  const impactReports = [
    {
      title: 'Health Impact Assessment 2024',
      description: 'Detailed analysis of health outcomes, patient satisfaction, and community health improvements.',
      downloadUrl: '/docs/health-impact-assessment-2024.pdf',
      type: 'Impact Assessment',
      date: 'March 2024'
    },
    {
      title: 'STONE-HMIS® Implementation Report',
      description: 'Evaluation of our digital health system deployment and its effects on healthcare delivery efficiency.',
      downloadUrl: '/docs/stone-hmis-implementation-report.pdf',
      type: 'Technology Report',
      date: 'January 2024'
    },
    {
      title: 'Community Health Worker Training Evaluation',
      description: 'Assessment of training programs and their impact on healthcare worker capacity and service quality.',
      downloadUrl: '/docs/community-health-worker-evaluation.pdf',
      type: 'Training Report',
      date: 'November 2023'
    }
  ];

  const researchPublications = [
    {
      title: 'Community-Owned Healthcare Models in Rural Kenya',
      journal: 'Global Health Research',
      year: '2024',
      description: 'Peer-reviewed study on the effectiveness of community-owned healthcare kiosks in improving access to care.',
      downloadUrl: '/docs/community-owned-healthcare-models.pdf',
      authors: 'Dr. Samson Gwer, Dr. Moses Ndiritu, et al.'
    },
    {
      title: 'Digital Health Systems in Resource-Limited Settings',
      journal: 'Health Informatics Journal',
      year: '2023',
      description: 'Research on implementing digital health solutions in underserved communities.',
      downloadUrl: '/docs/digital-health-systems-resource-limited.pdf',
      authors: 'Dr. Moses Ndiritu, Dr. Lee Ngugi, et al.'
    },
    {
      title: 'Maternal and Child Health Outcomes in Rural Kenya',
      journal: 'International Health',
      year: '2023',
      description: 'Longitudinal study on maternal and child health improvements through community health interventions.',
      downloadUrl: '/docs/maternal-child-health-outcomes.pdf',
      authors: 'Dr. Patricia Griffin, Dr. Silvana Wanjiru, et al.'
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Reports"
            subtitle="Access our comprehensive reports, impact assessments, and research publications documenting our healthcare transformation journey"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/reports.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Reports Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                Transparency Through Documentation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in transparency and accountability. Our comprehensive reports provide detailed insights 
                into our impact, financial performance, and strategic initiatives. These documents demonstrate 
                our commitment to evidence-based healthcare delivery and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Annual Reports</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our annual reports provide comprehensive overviews of our achievements, impact metrics, 
                and strategic initiatives throughout each year.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {annualReports.map((report, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-ubuntu-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {report.year}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-1" />
                        {report.pages} pages
                      </div>
                    </div>
                    <CardTitle className="text-xl text-ubuntu-blue">{report.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{report.size}</span>
                      <Button asChild className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white">
                        <a href={report.downloadUrl} download className="flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Reports */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Impact Assessments</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed evaluations of our programs, technologies, and training initiatives 
                demonstrating measurable impact on healthcare delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {impactReports.map((report, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-ubuntu-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {report.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {report.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-ubuntu-blue">{report.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-ubuntu-blue hover:bg-ubuntu-blue/90 text-white">
                      <a href={report.downloadUrl} download className="flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Publications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Research Publications</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Peer-reviewed research papers and publications contributing to the global knowledge base 
                on healthcare delivery in resource-limited settings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {researchPublications.map((publication, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {publication.journal}
                      </span>
                      <span className="text-sm text-gray-500">{publication.year}</span>
                    </div>
                    <CardTitle className="text-xl text-ubuntu-blue">{publication.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {publication.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Authors:</p>
                      <p className="text-sm text-gray-700">{publication.authors}</p>
                    </div>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <a href={publication.downloadUrl} download className="flex items-center justify-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download Paper
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Report Highlights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key metrics and achievements documented in our reports demonstrate our commitment 
                to transparency and measurable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-ubuntu-blue" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">15+</div>
                <div className="text-gray-600 font-semibold">Reports Published</div>
                <div className="text-sm text-gray-500 mt-1">Annual, impact, and research reports</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-ubuntu-orange" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">290K+</div>
                <div className="text-gray-600 font-semibold">Lives Impacted</div>
                <div className="text-sm text-gray-500 mt-1">Documented in our impact reports</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">60%</div>
                <div className="text-gray-600 font-semibold">Improvement</div>
                <div className="text-sm text-gray-500 mt-1">In maternal health outcomes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ubuntu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-ubuntu-blue" />
                </div>
                <div className="text-3xl font-bold text-ubuntu-blue mb-2">14</div>
                <div className="text-gray-600 font-semibold">Years</div>
                <div className="text-sm text-gray-500 mt-1">Of documented impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for More Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Need More Information?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For additional reports, detailed data, or specific information about our programs, 
                please don't hesitate to contact us. We're committed to transparency and are happy 
                to provide any additional documentation you may need.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
