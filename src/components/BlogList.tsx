import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { getAllPosts } from '../lib/blog';

export function BlogList({ limit }: { limit?: number }) {
  const posts = getAllPosts();
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayPosts.map((post, index) => (
        <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.pubDate}</span>
              <span className="mx-2">•</span>
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-indigo-600 font-medium">AI & Technology</span>
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}