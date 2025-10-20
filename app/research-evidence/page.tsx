import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { ArrowRight, BookOpen, GraduationCap, FileText, Award, Users, Target, TrendingUp, Microscope } from 'lucide-react';

export const metadata = {
  title: 'Research & Evidence - Ubuntu Afya',
  description: 'Evidence-based healthcare solutions through research, training, and collaboration with the Joanna Briggs Institute.',
};

export default function ResearchEvidence() {
  const researchAreas = [
    {
      icon: Target,
      title: 'Child Health Research',
      description: 'Comprehensive studies on pediatric care, vaccination programs, and child development outcomes in rural settings.',
      stats: ['8', 'Studies Completed', '5', 'Ongoing Projects']
    },
    {
      icon: Users,
      title: 'Health Worker Training',
      description: 'Evidence-based training programs and capacity building initiatives for frontline healthcare workers.',
      stats: ['225+', 'Workers Trained', '15+', 'Training Programs']
    },
    {
      icon: FileText,
      title: 'Policy Development',
      description: 'Research-informed policy recommendations and implementation strategies for improved healthcare delivery.',
      stats: ['10+', 'Policy Changes', '25', 'Policy Briefs']
    }
  ];

  const jbiCollaboration = [
    'Systematic review training and certification',
    'Evidence-based practice implementation',
    'Research methodology workshops',
    'Quality improvement initiatives',
    'Knowledge translation programs',
    'Clinical guideline development'
  ];

  const publications = [
    {
      title: 'Community Health Worker Effectiveness in Rural Kenya',
      journal: 'Global Health Research',
      year: '2024',
      description: 'A comprehensive study on the impact of community health workers in improving maternal and child health outcomes.'
    },
    {
      title: 'Digital Health Systems in Resource-Limited Settings',
      journal: 'Health Informatics Journal',
      year: '2023',
      description: 'Evaluation of STONE-HMIS® implementation and its effects on healthcare delivery efficiency.'
    },
    {
      title: 'Sustainable Healthcare Models in Sub-Saharan Africa',
      journal: 'International Health',
      year: '2023',
      description: 'Analysis of community-owned healthcare models and their long-term sustainability factors.'
    }
  ];

  const impactAreas = [
    {
      number: '1',
      title: 'Evidence-Based Practice',
      description: 'We engage leading clinicians and medical researchers to grow local research and support evidence-based medicine.',
      icon: Microscope
    },
    {
      number: '2',
      title: 'Research Community Building',
      description: 'Contributing to a larger medical research community by carrying out medical research initiatives relevant to the Ubuntu Afya Kiosks network.',
      icon: Users
    },
    {
      number: '3',
      title: 'Healthcare Quality Improvement',
      description: 'Bringing evidence to the forefront of healthcare provision in Kenya, providing healthcare professionals with the information and tools they need to provide high quality care.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Research & Evidence"
            subtitle="Evidence-based healthcare solutions through research, training, and collaboration with the Joanna Briggs Institute"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/Research-Evidence-Home.png"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">20+</div>
                <div className="text-lg font-semibold text-gray-800">Publications</div>
                <div className="text-gray-600">Published in peer-reviewed journals</div>
              </div>
              <div className="bg-ubuntu-orange/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-orange mb-2">225+</div>
                <div className="text-lg font-semibold text-gray-800">Health Workers Trained</div>
                <div className="text-gray-600">In evidence-based practices</div>
              </div>
              <div className="bg-ubuntu-blue/5 p-8 rounded-lg">
                <div className="text-4xl font-bold text-ubuntu-blue mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800">Training Programs</div>
                <div className="text-gray-600">Conducted across Kenya</div>
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
              <p className="text-lg text-gray-700 leading-relaxed">
                Too often health research is removed from the practice of providing care and health 
                workers who can use their practical knowledge to inform health research projects and 
                benefit from deploying research findings. We bridge this gap by integrating research 
                directly into healthcare delivery, ensuring that evidence informs practice and practice 
                informs research.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Our Research Focus Areas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We conduct rigorous research to generate evidence that informs 
                healthcare policy and practice in resource-limited settings.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon as any;
                return (
                  <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-ubuntu-blue/10 rounded-lg mr-4">
                        <IconComponent className="w-8 h-8 text-ubuntu-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ubuntu-blue">{area.stats[0]}</div>
                        <div className="text-sm text-gray-600">{area.stats[1]}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ubuntu-orange">{area.stats[2]}</div>
                        <div className="text-sm text-gray-600">{area.stats[3]}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-8">Our Approach</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We engage leading clinicians and medical researchers to grow local research, 
                    support evidence-based medicine, and conduct rigorous monitoring and evaluation 
                    of health programs.
                  </p>
                  <p>
                    By contributing to a larger medical research community and carrying out medical 
                    research initiatives relevant to the Ubuntu Afya Kiosks network, ARA can bring 
                    evidence to the forefront of healthcare provision in Kenya.
                  </p>
                  <p>
                    Our approach ensures that healthcare professionals have access to the information 
                    and tools they need to provide high quality care to people in underserved communities. 
                    We believe that research should not exist in isolation but should directly inform 
                    and improve clinical practice.
                  </p>
                  <p>
                    Through our partnership with the Joanna Briggs Institute and our commitment to 
                    capacity building, we're creating a sustainable ecosystem where research, training, 
                    and practice work together to transform healthcare delivery.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                  <img 
                    src="/images/vission-2.jpg" 
                    alt="Research and laboratory work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Recent Publications</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research findings are published in leading international journals, 
                contributing to the global knowledge base on healthcare in resource-limited settings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <FileText className="w-12 h-12 text-ubuntu-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                  <div className="text-sm text-ubuntu-blue font-semibold mb-2">
                    {pub.journal} • {pub.year}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Capacity Building & Training</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive training programs that equip healthcare workers 
                with the skills and knowledge needed to implement evidence-based practices 
                in their communities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-ubuntu-orange rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Systematic Review Training</h4>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive training in systematic review methodologies and evidence synthesis 
                  for healthcare professionals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-ubuntu-orange rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Evidence Implementation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Practical training on translating research evidence into clinical practice 
                  for improved patient outcomes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-ubuntu-orange rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Research Methodology</h4>
                <p className="text-gray-600 leading-relaxed">
                  Training in research design, data collection, and analysis techniques 
                  for conducting rigorous health research.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
