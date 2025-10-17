import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Import data
import updatesData from '@/data/updates.json';
import { formatDate } from '@/lib/formatDate';

interface UpdatePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return updatesData.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePageProps) {
  const update = updatesData.find((update) => update.slug === params.slug);
  
  if (!update) {
    return {
      title: 'Update Not Found - Ubuntu Afya',
    };
  }

  return {
    title: `${update.title} - Ubuntu Afya`,
    description: update.excerpt,
  };
}

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = updatesData.find((update) => update.slug === params.slug);

  if (!update) {
    notFound();
  }

  // Get related updates (excluding current one)
  const relatedUpdates = updatesData
    .filter((u) => u.id !== update.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Back Button */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="text-ubuntu-blue hover:text-ubuntu-blue/80">
              <Link href="/updates" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Updates
              </Link>
            </Button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={update.date}>
                  {formatDate(update.date)}
                </time>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-6">
                {update.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {update.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-ubuntu-blue/10 text-ubuntu-blue text-sm rounded-full"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
                
                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {update.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Video Embed (if available) */}
              {update.videoLink && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-ubuntu-blue mb-4">Related Video</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      Video embed would go here: {update.videoLink}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Updates */}
        {relatedUpdates.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-ubuntu-blue mb-8 text-center">
                  Related Updates
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedUpdates.map((relatedUpdate) => (
                    <Card key={relatedUpdate.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <time dateTime={relatedUpdate.date}>
                            {formatDate(relatedUpdate.date)}
                          </time>
                        </div>
                        
                        <h3 className="text-lg font-bold text-ubuntu-blue mb-3 line-clamp-2">
                          {relatedUpdate.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {relatedUpdate.excerpt}
                        </p>
                        
                        <Link
                          href={`/updates/${relatedUpdate.slug}`}
                          className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-semibold transition-colors duration-200"
                        >
                          Read More
                          <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-ubuntu-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Support Our Mission
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Help us continue transforming healthcare delivery in underserved communities across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white">
                  <Link href="/donate">
                    Donate Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ubuntu-blue">
                  <Link href="/our-story">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
