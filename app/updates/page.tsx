import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import UpdateCard from '@/components/UpdateCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import Link from 'next/link';

// Import data
import updatesData from '@/data/updates.json';

export const metadata = {
  title: 'Updates - Ubuntu Afya',
  description: 'Stay informed about Ubuntu Afya\'s latest initiatives, achievements, and impact stories from the field.',
};

export default function Updates() {
  // Get unique tags for filtering
  const allTags = Array.from(new Set(updatesData.flatMap(update => update.tags)));

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <Hero 
          title="Latest Updates"
          subtitle="Stay informed about our latest initiatives and impact stories"
          showButtons={false}
        />

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search updates..."
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
              
              {/* Tag Filters */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-ubuntu-blue border-ubuntu-blue">
                  All
                </Button>
                {allTags.map((tag) => (
                  <Button key={tag} variant="outline" size="sm" className="text-gray-600">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Updates Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {updatesData.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-ubuntu-blue mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest updates about our work and impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1"
                />
                <Button className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
