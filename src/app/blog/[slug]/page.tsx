import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogData";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

 export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>{post.content}</p>
        </div>

        {/* CTA Section */}
        <div className="bg-teal-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to take the next step?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a consultation with our dental experts to discuss your specific needs.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Related Posts / More Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            View all blog posts →
          </Link>
        </div>
      </div>
    </article>
  );
}
