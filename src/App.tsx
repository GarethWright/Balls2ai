import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { 
  Brain, 
  Code2, 
  Cpu, 
  Shield, 
  Users,
  ChevronRight,
  CheckCircle,
  Globe,
  ArrowRight,
  BookOpen,
  Calendar,
  User
} from 'lucide-react';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <Icon className="h-10 w-10 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Balls2.ai</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a>
              <a href="#expertise" className="text-gray-600 hover:text-gray-900 transition">Expertise</a>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Engineering Excellence in the AI Era
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Combining 100+ years of engineering expertise with cutting-edge AI capabilities to deliver exceptional software solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium border border-indigo-200 hover:bg-indigo-50 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beyond AI Hype: Real Engineering Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  In an era where AI tools promise to replace developers, we understand that successful software projects require more than just AI capabilities.
                </p>
                <p className="text-gray-600">
                  Our approach combines decades of engineering expertise with strategic AI integration, ensuring your projects are built on solid foundations that stand the test of time.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  'Proven engineering practices',
                  'Strategic AI integration',
                  'Scalable architecture',
                  'Security by design'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-indigo-600">100+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions that combine traditional engineering excellence with modern AI capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code2}
              title="Custom Software Development"
              description="End-to-end development of scalable, maintainable software solutions tailored to your needs."
            />
            <ServiceCard
              icon={Cpu}
              title="AI Integration"
              description="Strategic implementation of AI capabilities to enhance your existing systems and workflows."
            />
            <ServiceCard
              icon={Shield}
              title="Security & Performance"
              description="Robust security measures and performance optimization for mission-critical applications."
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white" id="expertise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team brings decades of experience in building robust, scalable software solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Senior Engineering Team",
                description: "100+ years of combined experience in Technical Leadership, Software Development and Architecture.",
                icon: Users
              },
              {
                title: "Global Reach",
                description: "Successfully delivered projects for clients across multiple industries worldwide.",
                icon: Globe
              },
              {
                title: "Proven Track Record",
                description: "Consistently delivering high-quality solutions that exceed expectations.",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <item.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Routes>
        <Route
          path="/blog"
          element={
            <section className="py-20 bg-gray-50" id="blog">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our latest thoughts on software engineering, AI integration, and industry best practices.
                  </p>
                </div>
                <BlogList />
              </div>
            </section>
          }
        />
        <Route path="/blog/:title" element={<BlogPost />} />
      </Routes>

      {/* Contact Section */}
      {!isBlogPost && (
      <section className="py-20 bg-indigo-600" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Great?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your software development goals with our expertise.
            </p>
            <a
              href="mailto:contact@balls2.ai"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">Balls2.ai</span>
            </div>
            <div className="flex space-x-6">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#expertise" className="hover:text-white transition">Expertise</a>
              <a href="#blog" className="hover:text-white transition">Blog</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Balls2.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;