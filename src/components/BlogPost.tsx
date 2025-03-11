import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getAllPosts } from '../lib/blog';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { slug } = useParams();
  const post = getAllPosts().find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-700">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 bg-white">
      <Link 
        to="/blog"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to blog
      </Link>
      
      <img
        src={post.heroImage}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-8"
      />
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{post.pubDate}</span>
        <span className="mx-2">•</span>
        <User className="h-4 w-4 mr-1" />
        <span>{post.author}</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{post.description}</p>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}