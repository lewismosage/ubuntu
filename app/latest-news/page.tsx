import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Latest News - Ubuntu Afya',
  description: 'Stay updated with the latest news, updates, and stories from Ubuntu Afya as we continue transforming healthcare delivery in Kenya.',
};

export default function LatestNews() {
  const featuredNews = [
    {
      id: 1,
      title: 'Ubuntu Afya Expands to Turkana County with New Kiosk Network',
      excerpt: 'We are excited to announce the launch of five new Ubuntu-Afya kiosks in Turkana County, bringing essential healthcare services to remote communities.',
      content: 'The expansion includes partnerships with local self-help groups and county government to ensure sustainable healthcare delivery in one of Kenya\'s most underserved regions.',
      date: '2024-01-15',
      author: 'Dr. Samson Gwer',
      category: 'Expansion',
      image: '/images/news/turkana-expansion.jpg',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      title: 'STONE-HMIS® Receives International Recognition for Innovation',
      excerpt: 'Our digital health management system has been recognized by the Global Health Innovation Awards for its impact on healthcare delivery in resource-limited settings.',
      content: 'The award recognizes STONE-HMIS® for its comprehensive approach to health information management and its role in improving patient care outcomes.',
      date: '2024-01-10',
      author: 'Dr. Moses Ndiritu',
      category: 'Technology',
      image: '/images/news/stone-hmis-award.jpg',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 3,
      title: 'New Research Partnership with University of Nairobi',
      excerpt: 'Ubuntu Afya has entered into a strategic research partnership with the University of Nairobi to advance evidence-based healthcare practices.',
      content: 'This partnership will focus on community health research, digital health implementation, and capacity building for healthcare workers.',
      date: '2024-01-05',
      author: 'Dr. Patricia Griffin',
      category: 'Research',
      image: '/images/news/university-partnership.jpg',
      readTime: '3 min read',
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: 'Community Health Workers Complete Advanced Training Program',
      excerpt: 'Fifty community health workers from across our network have successfully completed an advanced training program in maternal and child health.',
      date: '2024-01-12',
      author: 'Training Team',
      category: 'Training',
      readTime: '2 min read'
    },
    {
      id: 5,
      title: 'Ubuntu Afya Kiosks Achieve 95% Patient Satisfaction Rate',
      excerpt: 'Our latest patient satisfaction survey shows continued high ratings for the quality of care and accessibility of our kiosk services.',
      date: '2024-01-08',
      author: 'Quality Assurance Team',
      category: 'Impact',
      readTime: '2 min read'
    },
    {
      id: 6,
      title: 'New Funding Partnership with Grand Challenges Canada',
      excerpt: 'We are pleased to announce a new funding partnership that will support the expansion of our digital health initiatives.',
      date: '2024-01-03',
      author: 'Partnerships Team',
      category: 'Partnerships',
      readTime: '3 min read'
    },
    {
      id: 7,
      title: 'Mobile Health Outreach Program Launched in Marsabit',
      excerpt: 'Our new mobile health outreach program brings essential healthcare services directly to nomadic communities in Marsabit County.',
      date: '2023-12-28',
      author: 'Outreach Team',
      category: 'Outreach',
      readTime: '4 min read'
    },
    {
      id: 8,
      title: 'STONE-HMIS® Integration with County Health Systems',
      excerpt: 'Three additional counties have successfully integrated STONE-HMIS® into their health management systems, improving data collection and reporting.',
      date: '2023-12-20',
      author: 'Technology Team',
      category: 'Technology',
      readTime: '3 min read'
    },
    {
      id: 9,
      title: 'Annual Health Fair Reaches Over 2,000 Community Members',
      excerpt: 'Our annual community health fair in Kisumu County provided free health screenings and education to over 2,000 community members.',
      date: '2023-12-15',
      author: 'Community Team',
      category: 'Community',
      readTime: '2 min read'
    }
  ];

  const categories = ['All', 'Expansion', 'Technology', 'Research', 'Training', 'Impact', 'Partnerships', 'Outreach', 'Community'];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero
            title="Latest News"
            subtitle="Stay updated with the latest news, updates, and stories from Ubuntu Afya as we continue transforming healthcare delivery in Kenya"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/latest-news.jpg"
          />
        </div>

        {/* Spacer below Hero */}
        <div className="h-10 md:h-16" />

        {/* Featured News */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Featured Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our latest achievements, partnerships, and impact stories as we continue 
                to expand access to quality healthcare across Kenya.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredNews.map((article) => (
                <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-ubuntu-orange text-white">{article.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <Link 
                        href={`/updates/${article.id}`}
                        className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Recent Updates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest activities, achievements, and community impact 
                through our regular news updates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((article) => (
                <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-ubuntu-blue border-ubuntu-blue">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg text-ubuntu-blue line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    <Link 
                      href={`/updates/${article.id}`}
                      className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Subscribe to our newsletter to receive the latest news, updates, and stories 
                directly in your inbox. Be the first to know about our impact and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-ubuntu-orange focus:ring-2 focus:ring-ubuntu-orange/20 focus:outline-none"
                />
                <button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">Media Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access our press releases, media kit, and high-resolution images for journalists 
                and media professionals covering our work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-ubuntu-blue">Press Releases</CardTitle>
                  <CardDescription>
                    Official announcements and press releases about our latest initiatives and achievements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href="/media/press-releases"
                    className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-medium"
                  >
                    View Press Releases
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-ubuntu-blue">Media Kit</CardTitle>
                  <CardDescription>
                    Download our comprehensive media kit including logos, fact sheets, and organizational information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href="/media/media-kit"
                    className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-medium"
                  >
                    Download Media Kit
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-ubuntu-blue">Contact Media Team</CardTitle>
                  <CardDescription>
                    Get in touch with our media team for interviews, quotes, or additional information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href="/contact?subject=media"
                    className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-medium"
                  >
                    Contact Media Team
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
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
